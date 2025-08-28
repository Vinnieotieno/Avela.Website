"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useAccessibility } from '@/hooks/useAccessibility'

interface AccessibilityContextType {
  announceToScreenReader: (message: string, priority?: 'polite' | 'assertive') => void
  focusElement: (selector: string) => void
  trapFocus: (containerSelector: string) => (() => void) | undefined
  isKeyboardNavigation: boolean
  reducedMotion: boolean
  highContrast: boolean
  screenReaderActive: boolean
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

interface AccessibilityProviderProps {
  children: ReactNode
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const accessibility = useAccessibility()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <AccessibilityContext.Provider value={accessibility}>
      {children}
      
      {/* Live region for announcements */}
      <div
        id="accessibility-announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
      
      {/* High contrast mode indicator */}
      {accessibility.highContrast && (
        <div className="sr-only">High contrast mode is enabled</div>
      )}
      
      {/* Reduced motion indicator */}
      {accessibility.reducedMotion && (
        <div className="sr-only">Reduced motion mode is enabled</div>
      )}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibilityContext() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibilityContext must be used within an AccessibilityProvider')
  }
  return context
}

// Focus management component
interface FocusManagerProps {
  children: ReactNode
  trapFocus?: boolean
  restoreFocus?: boolean
  initialFocus?: string
}

export function FocusManager({ 
  children, 
  trapFocus = false, 
  restoreFocus = true,
  initialFocus 
}: FocusManagerProps) {
  const { focusElement, trapFocus: trapFocusUtil } = useAccessibilityContext()
  const [previousFocus, setPreviousFocus] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // Store the currently focused element
    if (restoreFocus) {
      setPreviousFocus(document.activeElement as HTMLElement)
    }

    // Set initial focus
    if (initialFocus) {
      focusElement(initialFocus)
    }

    // Set up focus trap
    let cleanup: (() => void) | undefined
    if (trapFocus) {
      cleanup = trapFocusUtil('.focus-trap-container')
    }

    return () => {
      cleanup?.()
      
      // Restore previous focus
      if (restoreFocus && previousFocus) {
        previousFocus.focus()
      }
    }
  }, [trapFocus, restoreFocus, initialFocus, focusElement, trapFocusUtil, previousFocus])

  return (
    <div className={trapFocus ? 'focus-trap-container' : ''}>
      {children}
    </div>
  )
}

// Skip link component
interface SkipLinkProps {
  href: string
  children: ReactNode
}

export function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="skip-link"
      onFocus={(e) => {
        e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }}
    >
      {children}
    </a>
  )
}

// Accessible heading component with proper hierarchy
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
  className?: string
  id?: string
}

export function Heading({ level, children, className = '', id }: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements

  return (
    <Tag
      id={id}
      className={`focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      tabIndex={-1}
    >
      {children}
    </Tag>
  )
}

// Accessible image component
interface AccessibleImageProps {
  src: string
  alt: string
  decorative?: boolean
  className?: string
  loading?: 'lazy' | 'eager'
}

export function AccessibleImage({ 
  src, 
  alt, 
  decorative = false, 
  className = '',
  loading = 'lazy'
}: AccessibleImageProps) {
  return (
    <img
      src={src}
      alt={decorative ? '' : alt}
      aria-hidden={decorative}
      className={className}
      loading={loading}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.style.display = 'none'
        
        // Announce image load failure to screen readers
        const announcement = document.createElement('div')
        announcement.setAttribute('aria-live', 'polite')
        announcement.className = 'sr-only'
        announcement.textContent = `Image failed to load: ${alt}`
        document.body.appendChild(announcement)
        
        setTimeout(() => {
          document.body.removeChild(announcement)
        }, 3000)
      }}
    />
  )
}

// Accessible button with loading state
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  loadingText?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

export function AccessibleButton({
  loading = false,
  loadingText = 'Loading...',
  variant = 'primary',
  children,
  disabled,
  className = '',
  ...props
}: AccessibleButtonProps) {
  const isDisabled = disabled || loading

  const baseClasses = 'font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#0081CC] to-blue-600 hover:from-blue-700 hover:to-[#0081CC] text-white',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
    ghost: 'text-gray-600 dark:text-gray-400 hover:text-[#0081CC] dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center space-x-2">
          <svg 
            className="animate-spin h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>{loadingText}</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
}

// Status indicator for screen readers
interface StatusProps {
  status: 'success' | 'error' | 'warning' | 'info'
  message: string
  visible?: boolean
}

export function Status({ status, message, visible = true }: StatusProps) {
  const icons = {
    success: '✓',
    error: '✗',
    warning: '⚠',
    info: 'ℹ'
  }

  const colors = {
    success: 'text-green-600 dark:text-green-400',
    error: 'text-red-600 dark:text-red-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    info: 'text-blue-600 dark:text-blue-400'
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-center space-x-2 ${colors[status]} ${visible ? '' : 'sr-only'}`}
    >
      <span aria-hidden="true">{icons[status]}</span>
      <span>{message}</span>
    </div>
  )
}
