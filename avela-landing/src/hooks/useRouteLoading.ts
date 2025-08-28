"use client"

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function useRouteLoading() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    // Simulate route change loading
    handleStart()
    const timer = setTimeout(handleComplete, 500)

    return () => {
      clearTimeout(timer)
      handleComplete()
    }
  }, [pathname, searchParams])

  return isLoading
}

// Hook for programmatic navigation with loading
export function useNavigationLoader() {
  const [isNavigating, setIsNavigating] = useState(false)

  const navigateWithLoading = async (url: string, delay: number = 300) => {
    setIsNavigating(true)
    
    // Add a small delay to show the loading state
    await new Promise(resolve => setTimeout(resolve, delay))
    
    // Navigate to the new URL
    window.location.href = url
  }

  const stopNavigation = () => {
    setIsNavigating(false)
  }

  return {
    isNavigating,
    navigateWithLoading,
    stopNavigation
  }
}

// Hook for form submission loading
export function useFormLoading() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const submitWithLoading = async (
    submitFn: () => Promise<void>,
    options?: {
      successMessage?: string
      errorMessage?: string
      resetAfter?: number
    }
  ) => {
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      await submitFn()
      setSubmitSuccess(true)
      
      if (options?.resetAfter) {
        setTimeout(() => {
          setSubmitSuccess(false)
        }, options.resetAfter)
      }
    } catch (error) {
      setSubmitError(
        options?.errorMessage || 
        (error instanceof Error ? error.message : 'An error occurred')
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitting(false)
    setSubmitError(null)
    setSubmitSuccess(false)
  }

  return {
    isSubmitting,
    submitError,
    submitSuccess,
    submitWithLoading,
    resetForm
  }
}

// Hook for data loading with retry
export function useDataLoading<T>(
  fetchFn: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const loadData = async (isRetry = false) => {
    if (!isRetry) {
      setIsLoading(true)
    }
    setError(null)

    try {
      const result = await fetchFn()
      setData(result)
      setRetryCount(0)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data')
    } finally {
      setIsLoading(false)
    }
  }

  const retry = () => {
    setRetryCount(prev => prev + 1)
    loadData(true)
  }

  useEffect(() => {
    loadData()
  }, dependencies)

  return {
    data,
    isLoading,
    error,
    retry,
    retryCount
  }
}

// Hook for progressive loading (load content in stages)
export function useProgressiveLoading(stages: string[], stageDelay: number = 500) {
  const [currentStage, setCurrentStage] = useState(0)
  const [completedStages, setCompletedStages] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentStage >= stages.length) {
      setIsComplete(true)
      return
    }

    const timer = setTimeout(() => {
      setCompletedStages(prev => [...prev, stages[currentStage]])
      setCurrentStage(prev => prev + 1)
    }, stageDelay)

    return () => clearTimeout(timer)
  }, [currentStage, stages, stageDelay])

  const reset = () => {
    setCurrentStage(0)
    setCompletedStages([])
    setIsComplete(false)
  }

  return {
    currentStage: stages[currentStage],
    completedStages,
    isComplete,
    progress: (completedStages.length / stages.length) * 100,
    reset
  }
}

// Hook for lazy loading with intersection observer
export function useLazyLoading(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref)
        }
      },
      { threshold }
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref, threshold])

  return { isVisible, ref: setRef }
}

// Hook for image loading
export function useImageLoading(src: string) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const img = new Image()
    
    img.onload = () => {
      setIsLoaded(true)
      setHasError(false)
    }
    
    img.onerror = () => {
      setIsLoaded(false)
      setHasError(true)
    }
    
    img.src = src
  }, [src])

  return { isLoaded, hasError }
}
