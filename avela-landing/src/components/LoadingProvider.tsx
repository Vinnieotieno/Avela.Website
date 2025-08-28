"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import WelcomeLoader from './WelcomeLoader'

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  showLoader: () => void
  hideLoader: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

interface LoadingProviderProps {
  children: ReactNode
  showInitialLoader?: boolean
  minLoadTime?: number
}

export function LoadingProvider({ 
  children, 
  showInitialLoader = true, 
  minLoadTime = 3000 
}: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(showInitialLoader)
  const [showWelcomeLoader, setShowWelcomeLoader] = useState(showInitialLoader)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('avela-visited')
    
    if (hasVisited && showInitialLoader) {
      // If user has already visited in this session, skip the loader
      setIsLoading(false)
      setShowWelcomeLoader(false)
      setIsFirstLoad(false)
    } else if (showInitialLoader) {
      // Mark as visited for this session
      sessionStorage.setItem('avela-visited', 'true')
    }
  }, [showInitialLoader])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setShowWelcomeLoader(false)
    setIsFirstLoad(false)
  }

  const showLoader = () => {
    setIsLoading(true)
    setShowWelcomeLoader(true)
  }

  const hideLoader = () => {
    setIsLoading(false)
    setShowWelcomeLoader(false)
  }

  const contextValue: LoadingContextType = {
    isLoading,
    setIsLoading,
    showLoader,
    hideLoader
  }

  return (
    <LoadingContext.Provider value={contextValue}>
      {showWelcomeLoader && isFirstLoad && (
        <WelcomeLoader 
          onLoadingComplete={handleLoadingComplete}
          minLoadTime={minLoadTime}
        />
      )}
      
      {/* Content with fade-in animation */}
      <div 
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ 
          visibility: isLoading ? 'hidden' : 'visible',
          pointerEvents: isLoading ? 'none' : 'auto'
        }}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

// Page transition loader component
interface PageLoaderProps {
  isVisible: boolean
  message?: string
}

export function PageLoader({ isVisible, message = "Loading..." }: PageLoaderProps) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 relative">
          <div className="absolute inset-0 border-4 border-[#0081CC]/20 border-t-[#0081CC] rounded-full animate-spin" />
          <div className="absolute inset-2 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-medium">{message}</p>
      </div>
    </div>
  )
}

// Route change loader hook
export function useRouteLoader() {
  const [isRouteLoading, setIsRouteLoading] = useState(false)

  const startRouteLoading = (message?: string) => {
    setIsRouteLoading(true)
  }

  const stopRouteLoading = () => {
    setIsRouteLoading(false)
  }

  return {
    isRouteLoading,
    startRouteLoading,
    stopRouteLoading,
    PageLoader: ({ message }: { message?: string }) => (
      <PageLoader isVisible={isRouteLoading} message={message} />
    )
  }
}

// Skeleton loader components for content loading
interface SkeletonProps {
  className?: string
  width?: string
  height?: string
}

export function Skeleton({ className = '', width = '100%', height = '1rem' }: SkeletonProps) {
  return (
    <div 
      className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`}
      style={{ width, height }}
      role="status"
      aria-label="Loading content"
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="space-y-4">
        <Skeleton height="2rem" width="60%" />
        <Skeleton height="1rem" width="100%" />
        <Skeleton height="1rem" width="80%" />
        <Skeleton height="1rem" width="90%" />
        <div className="flex space-x-2 mt-4">
          <Skeleton height="2.5rem" width="6rem" />
          <Skeleton height="2.5rem" width="6rem" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton 
          key={index}
          height="1rem" 
          width={index === lines - 1 ? '75%' : '100%'} 
        />
      ))}
    </div>
  )
}

// Loading button component
interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  loadingText?: string
  children: ReactNode
}

export function LoadingButton({ 
  loading = false, 
  loadingText = 'Loading...', 
  children, 
  disabled,
  className = '',
  ...props 
}: LoadingButtonProps) {
  return (
    <button
      className={`relative transition-all duration-200 ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
          <span>{loadingText}</span>
        </div>
      )}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
    </button>
  )
}
