"use client"

import { useState } from 'react'
import { 
  useLoading, 
  PageLoader, 
  LoadingButton, 
  Skeleton, 
  SkeletonCard, 
  SkeletonText 
} from './LoadingProvider'
import { useFormLoading, useNavigationLoader } from '@/hooks/useRouteLoading'
import { Button } from './ui/button'
import { Card } from './ui/card'

export default function LoadingDemo() {
  const { showLoader, hideLoader } = useLoading()
  const { isNavigating, navigateWithLoading } = useNavigationLoader()
  const { isSubmitting, submitError, submitSuccess, submitWithLoading } = useFormLoading()
  const [showPageLoader, setShowPageLoader] = useState(false)
  const [showSkeletons, setShowSkeletons] = useState(false)

  const handleWelcomeLoader = () => {
    showLoader()
    setTimeout(() => {
      hideLoader()
    }, 4000)
  }

  const handlePageLoader = () => {
    setShowPageLoader(true)
    setTimeout(() => {
      setShowPageLoader(false)
    }, 2000)
  }

  const handleFormSubmit = () => {
    submitWithLoading(
      async () => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        // Simulate random success/failure
        if (Math.random() > 0.3) {
          throw new Error('Submission failed')
        }
      },
      {
        successMessage: 'Form submitted successfully!',
        errorMessage: 'Failed to submit form',
        resetAfter: 3000
      }
    )
  }

  const handleNavigation = () => {
    navigateWithLoading('/about', 1000)
  }

  const toggleSkeletons = () => {
    setShowSkeletons(!showSkeletons)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Loading Components Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore the various loading states and animations available in the Avela website.
        </p>
      </div>

      {/* Welcome Loader Demo */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome Loader</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The beautiful welcome screen that appears when users first visit the site.
        </p>
        <Button onClick={handleWelcomeLoader} className="mr-4">
          Show Welcome Loader
        </Button>
      </Card>

      {/* Page Loader Demo */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Page Loader</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A subtle overlay loader for page transitions and content loading.
        </p>
        <Button onClick={handlePageLoader} variant="secondary">
          Show Page Loader
        </Button>
        <PageLoader isVisible={showPageLoader} message="Loading page content..." />
      </Card>

      {/* Navigation Loader Demo */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Navigation Loader</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Loading state for programmatic navigation between pages.
        </p>
        <LoadingButton
          loading={isNavigating}
          loadingText="Navigating..."
          onClick={handleNavigation}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Navigate to About Page
        </LoadingButton>
      </Card>

      {/* Form Loading Demo */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Form Loading</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Loading states for form submissions with success and error handling.
        </p>
        <div className="space-y-4">
          <LoadingButton
            loading={isSubmitting}
            loadingText="Submitting..."
            onClick={handleFormSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Submit Form
          </LoadingButton>
          
          {submitSuccess && (
            <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
              ✅ Form submitted successfully!
            </div>
          )}
          
          {submitError && (
            <div className="p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
              ❌ {submitError}
            </div>
          )}
        </div>
      </Card>

      {/* Skeleton Loading Demo */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Skeleton Loading</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Placeholder content that shows while actual content is loading.
        </p>
        <Button onClick={toggleSkeletons} variant="outline" className="mb-6">
          {showSkeletons ? 'Hide' : 'Show'} Skeletons
        </Button>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Skeleton Components</h3>
            {showSkeletons ? (
              <div className="space-y-4">
                <Skeleton height="2rem" width="80%" />
                <Skeleton height="1rem" width="100%" />
                <Skeleton height="1rem" width="90%" />
                <SkeletonText lines={3} />
                <div className="flex space-x-2">
                  <Skeleton height="2.5rem" width="6rem" />
                  <Skeleton height="2.5rem" width="6rem" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Sample Content</h4>
                <p>This is some sample content that would normally be loaded.</p>
                <p>It demonstrates what the actual content looks like.</p>
                <p>The skeleton loading provides a smooth transition.</p>
                <div className="flex space-x-2">
                  <Button size="sm">Action 1</Button>
                  <Button size="sm" variant="outline">Action 2</Button>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Skeleton Card</h3>
            {showSkeletons ? (
              <SkeletonCard />
            ) : (
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-2">Sample Card</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This is a sample card with actual content loaded.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm">Learn More</Button>
                  <Button size="sm" variant="outline">Share</Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </Card>

      {/* Loading States Guide */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Loading States Guide</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">When to Use Each Loader</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><strong>Welcome Loader:</strong> First-time site visits</li>
              <li><strong>Page Loader:</strong> Route changes and page transitions</li>
              <li><strong>Skeleton Loading:</strong> Content that's loading in place</li>
              <li><strong>Button Loading:</strong> Form submissions and actions</li>
              <li><strong>Navigation Loading:</strong> Programmatic navigation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Best Practices</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Keep loading times under 3 seconds when possible</li>
              <li>• Use skeleton loading for content-heavy pages</li>
              <li>• Provide clear feedback for user actions</li>
              <li>• Consider accessibility with screen readers</li>
              <li>• Test loading states on slow connections</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
