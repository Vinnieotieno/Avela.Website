"use client"

import { useState } from 'react'
import { Filter, ChevronDown } from 'lucide-react'
import { BlogCategory } from '@/types/blog'
import { Button } from '@/components/ui/button'

interface CategoryFilterProps {
  categories: BlogCategory[]
  selectedCategory?: string
  onCategoryChange: (categorySlug: string | undefined) => void
  showPostCount?: boolean
  variant?: 'tabs' | 'dropdown' | 'pills'
  className?: string
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  showPostCount = true,
  variant = 'tabs',
  className = ''
}: CategoryFilterProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleCategorySelect = (categorySlug: string | undefined) => {
    onCategoryChange(categorySlug)
    setIsDropdownOpen(false)
  }

  const selectedCategoryData = categories.find(cat => cat.slug === selectedCategory)

  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`}>
        <Button
          variant="outline"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full sm:w-auto justify-between min-w-48"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            {selectedCategoryData ? selectedCategoryData.name : 'All Categories'}
          </div>
          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </Button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
            <div className="p-2">
              <button
                onClick={() => handleCategorySelect(undefined)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  !selectedCategory 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>All Categories</span>
                  {showPostCount && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {categories.reduce((sum, cat) => sum + (cat.postCount || 0), 0)}
                    </span>
                  )}
                </div>
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.slug)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.slug
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {category.color && (
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                      )}
                      <span>{category.name}</span>
                    </div>
                    {showPostCount && category.postCount !== undefined && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {category.postCount}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  if (variant === 'pills') {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        <button
          onClick={() => handleCategorySelect(undefined)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            !selectedCategory
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          All
          {showPostCount && (
            <span className="ml-2 text-xs opacity-75">
              {categories.reduce((sum, cat) => sum + (cat.postCount || 0), 0)}
            </span>
          )}
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category.slug
                ? 'text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            style={{
              backgroundColor: selectedCategory === category.slug ? category.color || '#0081CC' : undefined
            }}
          >
            {category.name}
            {showPostCount && category.postCount !== undefined && (
              <span className="ml-2 text-xs opacity-75">
                {category.postCount}
              </span>
            )}
          </button>
        ))}
      </div>
    )
  }

  // Default tabs variant
  return (
    <div className={`border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <nav className="flex space-x-8 overflow-x-auto">
        <button
          onClick={() => handleCategorySelect(undefined)}
          className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
            !selectedCategory
              ? 'border-blue-500 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
        >
          All Categories
          {showPostCount && (
            <span className="ml-2 text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
              {categories.reduce((sum, cat) => sum + (cat.postCount || 0), 0)}
            </span>
          )}
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.slug)}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              selectedCategory === category.slug
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <div className="flex items-center gap-2">
              {category.color && (
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
              )}
              {category.name}
              {showPostCount && category.postCount !== undefined && (
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                  {category.postCount}
                </span>
              )}
            </div>
          </button>
        ))}
      </nav>
    </div>
  )
}
