"use client"

import { Clock, BookOpen, Eye } from 'lucide-react'

interface ReadingTimeProps {
  minutes: number
  wordCount?: number
  views?: number
  variant?: 'default' | 'detailed' | 'minimal'
  showIcon?: boolean
  className?: string
}

export default function ReadingTime({
  minutes,
  wordCount,
  views,
  variant = 'default',
  showIcon = true,
  className = ''
}: ReadingTimeProps) {
  const formatReadingTime = (mins: number) => {
    if (mins < 1) return 'Less than 1 min read'
    if (mins === 1) return '1 min read'
    return `${mins} min read`
  }

  const formatWordCount = (count: number) => {
    if (count < 1000) return `${count} words`
    return `${(count / 1000).toFixed(1)}k words`
  }

  const formatViews = (count: number) => {
    if (count < 1000) return `${count} views`
    if (count < 1000000) return `${(count / 1000).toFixed(1)}k views`
    return `${(count / 1000000).toFixed(1)}M views`
  }

  if (variant === 'minimal') {
    return (
      <span className={`inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 ${className}`}>
        {showIcon && <Clock className="w-3 h-3" />}
        {minutes} min
      </span>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className={`flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 ${className}`}>
        {/* Reading Time */}
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{formatReadingTime(minutes)}</span>
        </div>

        {/* Word Count */}
        {wordCount && (
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{formatWordCount(wordCount)}</span>
          </div>
        )}

        {/* Views */}
        {views && (
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{formatViews(views)}</span>
          </div>
        )}
      </div>
    )
  }

  // Default variant
  return (
    <div className={`inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 ${className}`}>
      {showIcon && <Clock className="w-4 h-4" />}
      <span>{formatReadingTime(minutes)}</span>
    </div>
  )
}
