"use client"

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PaginationInfo } from '@/types/blog'

interface PaginationProps {
  pagination: PaginationInfo
  onPageChange: (page: number) => void
  showInfo?: boolean
  variant?: 'default' | 'simple' | 'compact'
  className?: string
}

export default function Pagination({
  pagination,
  onPageChange,
  showInfo = true,
  variant = 'default',
  className = ''
}: PaginationProps) {
  const { currentPage, totalPages, totalPosts, postsPerPage, hasNextPage, hasPreviousPage } = pagination

  const generatePageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisiblePages = 7

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      if (currentPage > 4) {
        pages.push('...')
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (currentPage < totalPages - 3) {
        pages.push('...')
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  const getDisplayRange = () => {
    const start = (currentPage - 1) * postsPerPage + 1
    const end = Math.min(currentPage * postsPerPage, totalPosts)
    return { start, end }
  }

  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-between ${className}`}>
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPreviousPage}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <span className="text-sm text-gray-600 dark:text-gray-400">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNextPage}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPreviousPage}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg">
          {currentPage} / {totalPages}
        </span>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNextPage}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    )
  }

  const pageNumbers = generatePageNumbers()
  const { start, end } = getDisplayRange()

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Info */}
      {showInfo && (
        <div className="text-center">
          <p className="text-sm text-black/60 dark:text-white/60">
            Showing <span className="font-semibold text-black dark:text-white">{start.toLocaleString()}</span> to{' '}
            <span className="font-semibold text-black dark:text-white">{end.toLocaleString()}</span> of{' '}
            <span className="font-semibold text-black dark:text-white">{totalPosts.toLocaleString()}</span> articles
          </p>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous Button */}
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPreviousPage}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
          {pageNumbers.map((page, index) => {
            if (page === '...') {
              return (
                <div
                  key={`ellipsis-${index}`}
                  className="px-3 py-2 text-gray-400 dark:text-gray-500"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </div>
              )
            }

            const pageNumber = page as number
            const isCurrentPage = pageNumber === currentPage

            return (
              <button
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                disabled={isCurrentPage}
                className={`w-12 h-12 rounded-xl font-semibold transition-all duration-200 hover:scale-105 disabled:hover:scale-100 ${
                  isCurrentPage
                    ? 'bg-[#0081CC] text-white shadow-lg shadow-[#0081CC]/25'
                    : 'bg-white dark:bg-black text-black dark:text-white border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:border-[#0081CC] dark:hover:border-[#0081CC]'
                }`}
              >
                {pageNumber}
              </button>
            )
          })}
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNextPage}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Mobile-friendly page info */}
      <div className="sm:hidden text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full text-sm text-black/60 dark:text-white/60">
          Page <span className="font-semibold text-black dark:text-white">{currentPage}</span> of{' '}
          <span className="font-semibold text-black dark:text-white">{totalPages}</span>
        </div>
      </div>
    </div>
  )
}
