"use client"

import { useEffect, useState, useCallback } from 'react'

interface AccessibilityState {
  isKeyboardNavigation: boolean
  reducedMotion: boolean
  highContrast: boolean
  screenReaderActive: boolean
}

export function useAccessibility() {
  const [state, setState] = useState<AccessibilityState>({
    isKeyboardNavigation: false,
    reducedMotion: false,
    highContrast: false,
    screenReaderActive: false
  })

  // Detect keyboard navigation
  useEffect(() => {
    let isKeyboard = false

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isKeyboard = true
        document.body.classList.add('keyboard-navigation')
        setState(prev => ({ ...prev, isKeyboardNavigation: true }))
      }
    }

    const handleMouseDown = () => {
      if (isKeyboard) {
        isKeyboard = false
        document.body.classList.remove('keyboard-navigation')
        setState(prev => ({ ...prev, isKeyboardNavigation: false }))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  // Detect media query preferences
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')

    const updatePreferences = () => {
      setState(prev => ({
        ...prev,
        reducedMotion: reducedMotionQuery.matches,
        highContrast: highContrastQuery.matches
      }))
    }

    updatePreferences()

    reducedMotionQuery.addEventListener('change', updatePreferences)
    highContrastQuery.addEventListener('change', updatePreferences)

    return () => {
      reducedMotionQuery.removeEventListener('change', updatePreferences)
      highContrastQuery.removeEventListener('change', updatePreferences)
    }
  }, [])

  // Detect screen reader
  useEffect(() => {
    // Simple screen reader detection
    const hasScreenReader = window.navigator.userAgent.includes('NVDA') ||
                           window.navigator.userAgent.includes('JAWS') ||
                           window.speechSynthesis?.getVoices().length > 0

    setState(prev => ({ ...prev, screenReaderActive: hasScreenReader }))
  }, [])

  // Focus management utilities
  const focusElement = useCallback((selector: string) => {
    const element = document.querySelector(selector) as HTMLElement
    if (element) {
      element.focus()
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  const trapFocus = useCallback((containerSelector: string) => {
    const container = document.querySelector(containerSelector) as HTMLElement
    if (!container) return

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => {
      container.removeEventListener('keydown', handleTabKey)
    }
  }, [])

  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }, [])

  return {
    ...state,
    focusElement,
    trapFocus,
    announceToScreenReader
  }
}

// Keyboard navigation utilities
export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End'
} as const

export function handleKeyboardNavigation(
  event: React.KeyboardEvent,
  handlers: Partial<Record<keyof typeof KEYBOARD_KEYS, () => void>>
) {
  const key = event.key as keyof typeof KEYBOARD_KEYS
  const handler = handlers[key]
  
  if (handler) {
    event.preventDefault()
    handler()
  }
}
