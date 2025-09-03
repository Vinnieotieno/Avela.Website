"use client"

import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { BlogPostSummary } from '@/types/blog'
import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  post: BlogPostSummary
  variant?: 'default' | 'featured' | 'compact'
  showAuthor?: boolean
  showCategory?: boolean
  showTags?: boolean
  className?: string
}

export default function BlogCard({ 
  post, 
  variant = 'default',
  showAuthor = true,
  showCategory = true,
  showTags = true,
  className = ''
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const cardVariants = {
    default: 'group hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
    featured: 'group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-200 dark:border-blue-800',
    compact: 'group hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5'
  }

  const imageVariants = {
    default: 'h-48 sm:h-56',
    featured: 'h-56 sm:h-64',
    compact: 'h-40'
  }

  return (
    <Card className={`${cardVariants[variant]} ${className} overflow-hidden`}>
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Featured Image */}
        <div className={`relative ${imageVariants[variant]} overflow-hidden`}>
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Category Badge */}
          {showCategory && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#0081CC] text-white shadow-lg">
                {post.category.name}
              </span>
            </div>
          )}

          {/* Reading Time Badge */}
          <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readingTime} min
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-black dark:text-white mb-3 line-clamp-2 group-hover:text-[#0081CC] transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-black/70 dark:text-white/70 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          {showTags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.id}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-black/10 dark:bg-white/10 text-black/70 dark:text-white/70 rounded-md"
                >
                  <Tag className="w-3 h-3" />
                  {tag.name}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-black/60 dark:text-white/60">
            <div className="flex items-center gap-4">
              {/* Author */}
              {showAuthor && (
                <div className="flex items-center gap-2">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span>{post.author.name}</span>
                </div>
              )}

              {/* Date */}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>

            {/* Read More Arrow */}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Card>
  )
}
