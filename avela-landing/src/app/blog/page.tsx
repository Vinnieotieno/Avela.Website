"use client"

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import BlogHero from '@/components/blog/BlogHero'
import BlogCard from '@/components/blog/BlogCard'
import CategoryFilter from '@/components/blog/CategoryFilter'
import Pagination from '@/components/blog/Pagination'
import { BlogListResponse, BlogFilters } from '@/types/blog'
import { Loader2, AlertCircle } from 'lucide-react'

// Mock data for demonstration - replace with actual API calls
const mockBlogData: BlogListResponse = {
  posts: [
    {
      id: '1',
      title: 'Understanding Earned Wage Access: How Avela Transforms Financial Flexibility',
      slug: 'understanding-earned-wage-access-avela',
      excerpt: 'Discover how Avela\'s Earned Wage Access platform provides instant access to your accrued salary without loans, interest, or debt. Learn why 74% of Kenyan workers earning under KES 50,000 need this solution.',
      featuredImage: {
        url: '/api/placeholder/600/400',
        alt: 'Kenyan worker using Avela mobile app'
      },
      author: {
        id: '1',
        name: 'Vincent Otieno',
        avatar: '/api/placeholder/40/40'
      },
      category: {
        id: '1',
        name: 'Financial Tips',
        slug: 'financial-tips',
        color: '#0081CC'
      },
      publishedAt: '2025-09-02T10:00:00Z',
      readingTime: 5,
      tags: [
        { id: '1', name: 'Earned Wage Access', slug: 'earned-wage-access' },
        { id: '2', name: 'Financial Planning', slug: 'financial-planning' }
      ]
    },
    {
      id: '2',
      title: 'Breaking Free from Predatory Lending: The Avela Alternative',
      slug: 'breaking-free-predatory-lending-avela',
      excerpt: 'Learn how Avela helps Kenyan workers avoid the 20% monthly interest rates of digital lenders. Discover why 80% of employed Kenyans live in poverty despite having jobs, and how EWA provides a solution.',
      featuredImage: {
        url: '/api/placeholder/600/400',
        alt: 'Kenyan workers financial freedom'
      },
      author: {
        id: '1',
        name: 'Vincent Otieno',
        avatar: '/api/placeholder/40/40'
      },
      category: {
        id: '1',
        name: 'Financial Tips',
        slug: 'financial-tips',
        color: '#0081CC'
      },
      publishedAt: '2025-09-01T14:30:00Z',
      readingTime: 7,
      tags: [
        { id: '3', name: 'Predatory Lending', slug: 'predatory-lending' },
        { id: '4', name: 'Financial Health', slug: 'financial-health' }
      ]
    },
    {
      id: '3',
      title: 'How Employers Benefit from Avela: Cash Flow Relief and Employee Wellbeing',
      slug: 'employers-benefit-avela-cash-flow-relief',
      excerpt: 'Discover how Avela eliminates the need for employers to budget mid-month salary advances while boosting employee satisfaction, retention, and productivity.',
      featuredImage: {
        url: '/api/placeholder/600/400',
        alt: 'Happy employees and employer'
      },
      author: {
        id: '1',
        name: 'Vincent Otieno',
        avatar: '/api/placeholder/40/40'
      },
      category: {
        id: '2',
        name: 'Employer Benefits',
        slug: 'employer-benefits',
        color: '#0081CC'
      },
      publishedAt: '2025-08-30T16:00:00Z',
      readingTime: 6,
      tags: [
        { id: '5', name: 'Employee Wellbeing', slug: 'employee-wellbeing' },
        { id: '6', name: 'Cash Flow Management', slug: 'cash-flow-management' }
      ]
    }
  ],
  pagination: {
    currentPage: 1,
    totalPages: 5,
    totalPosts: 48,
    postsPerPage: 12,
    hasNextPage: true,
    hasPreviousPage: false
  },
  categories: [
    { id: '1', name: 'Financial Tips', slug: 'financial-tips', color: '#0081CC', postCount: 18 },
    { id: '2', name: 'Employer Benefits', slug: 'employer-benefits', color: '#0081CC', postCount: 12 },
    { id: '3', name: 'EWA Insights', slug: 'ewa-insights', color: '#0081CC', postCount: 10 },
    { id: '4', name: 'Kenya Economy', slug: 'kenya-economy', color: '#0081CC', postCount: 8 }
  ],
  totalPosts: 48
}

export default function BlogPage() {
  const [blogData, setBlogData] = useState<BlogListResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const searchParams = useSearchParams()
  const router = useRouter()

  // Get current filters from URL
  const currentFilters: BlogFilters = {
    category: searchParams.get('category') || undefined,
    search: searchParams.get('q') || undefined,
    page: parseInt(searchParams.get('page') || '1'),
    limit: 12
  }

  // Update URL with new filters
  const updateFilters = (newFilters: Partial<BlogFilters>) => {
    const params = new URLSearchParams()
    
    const filters = { ...currentFilters, ...newFilters }
    
    if (filters.category) params.set('category', filters.category)
    if (filters.search) params.set('q', filters.search)
    if (filters.page && filters.page > 1) params.set('page', filters.page.toString())
    
    const queryString = params.toString()
    const newUrl = queryString ? `/blog?${queryString}` : '/blog'
    
    router.push(newUrl)
  }

  // Fetch blog data
  const fetchBlogData = async (filters: BlogFilters) => {
    setLoading(true)
    setError(null)
    
    try {
      // Replace with actual API call
      // const response = await fetch(`/api/blog?${new URLSearchParams(filters as any)}`)
      // const data = await response.json()
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Use mock data for now
      setBlogData(mockBlogData)
    } catch (err) {
      setError('Failed to load blog posts. Please try again.')
      console.error('Error fetching blog data:', err)
    } finally {
      setLoading(false)
    }
  }

  // Load data when filters change
  useEffect(() => {
    fetchBlogData(currentFilters)
  }, [searchParams])

  const handleCategoryChange = (categorySlug: string | undefined) => {
    updateFilters({ category: categorySlug, page: 1 })
  }

  const handlePageChange = (page: number) => {
    updateFilters({ page })
  }

  const handleSearch = (query: string) => {
    updateFilters({ search: query, page: 1 })
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
            <button
              onClick={() => fetchBlogData(currentFilters)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <BlogHero
        title="Avela Blog"
        subtitle="Insights, tips, and updates to help you make the most of your financial journey"
        onSearch={handleSearch}
      />

      {/* Main Content */}
      <div id="blog-articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <span className="ml-3 text-gray-600 dark:text-gray-400">Loading articles...</span>
          </div>
        ) : blogData ? (
          <>
            {/* Category Filter */}
            <div className="mb-8">
              <CategoryFilter
                categories={blogData.categories}
                selectedCategory={currentFilters.category}
                onCategoryChange={handleCategoryChange}
                variant="tabs"
              />
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogData.posts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  variant={index === 0 ? 'featured' : 'default'}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              pagination={blogData.pagination}
              onPageChange={handlePageChange}
            />
          </>
        ) : null}
      </div>
    </div>
  )
}
