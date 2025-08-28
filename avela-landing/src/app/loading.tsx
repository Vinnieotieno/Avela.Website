import { Skeleton, SkeletonCard } from '@/components/LoadingProvider'

export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section Skeleton */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <Skeleton height="4rem" width="80%" />
              <Skeleton height="2rem" width="100%" />
              <Skeleton height="2rem" width="90%" />
              <div className="flex space-x-4">
                <Skeleton height="3rem" width="8rem" />
                <Skeleton height="3rem" width="8rem" />
              </div>
            </div>
            <div className="flex justify-center">
              <Skeleton height="20rem" width="16rem" className="rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton height="3rem" width="60%" className="mx-auto mb-4" />
            <Skeleton height="1.5rem" width="80%" className="mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Skeleton */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Skeleton height="3rem" width="70%" />
              <Skeleton height="1.5rem" width="100%" />
              <Skeleton height="1.5rem" width="95%" />
              <Skeleton height="1.5rem" width="85%" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} height="8rem" className="rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
