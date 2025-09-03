"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import BlogCard from '@/components/blog/BlogCard'
import ReadingTime from '@/components/blog/ReadingTime'
import { BlogPost } from '@/types/blog'

// Mock data for demonstration - replace with actual API calls
const mockBlogPost: BlogPost = {
  id: '1',
  title: 'Understanding Earned Wage Access: How Avela Transforms Financial Flexibility',
  slug: 'understanding-earned-wage-access-avela',
  excerpt: 'Discover how Avela\'s Earned Wage Access platform provides instant access to your accrued salary without loans, interest, or debt. Learn why 74% of Kenyan workers earning under KES 50,000 need this solution.',
  content: `
    <h2>What is Earned Wage Access (EWA)?</h2>
    <p>Earned Wage Access is a revolutionary financial service that allows employees to access a portion of their accrued salary before payday. Unlike traditional loans, EWA is based on work you've already completed, making it a debt-free solution for managing cash flow gaps and unexpected expenses.</p>

    <h2>The Kenyan Financial Reality</h2>
    <p>In Kenya, 74% of salaried workers (≈1.9 million) earn under KES 50,000 per month, yet face mounting financial pressure due to rising costs of living and heavy statutory deductions. Over 70% live paycheck to paycheck with little room for emergencies.</p>

    <p>When unexpected expenses arise, many turn to predatory digital lenders charging up to 20% monthly interest rates, trapping workers in cycles of debt and financial stress.</p>

    <h2>How Avela Transforms This Reality</h2>
    <p>Avela provides a simple, 5-step process:</p>

    <ol>
      <li><strong>Employer Partnership:</strong> Your company integrates with our secure platform</li>
      <li><strong>Employee Registration:</strong> Sign up using an invite code from your employer</li>
      <li><strong>Request Access:</strong> Get a portion of your earned salary instantly</li>
      <li><strong>Instant Disbursement:</strong> Receive full amount via M-Pesa or bank account</li>
      <li><strong>Automatic Repayment:</strong> Seamless deduction on your next payday</li>
    </ol>

    <h2>Why Choose Avela Over Traditional Loans?</h2>
    <ul>
      <li><strong>Interest-Free:</strong> No loans, no interest, no debt creation</li>
      <li><strong>Instant Access:</strong> 24/7 availability via M-Pesa or bank transfer</li>
      <li><strong>No Employer Approval:</strong> Pre-approved access with privacy guaranteed</li>
      <li><strong>Transparent Fees:</strong> Only a flat processing fee, no hidden charges</li>
      <li><strong>Financial Empowerment:</strong> Break free from predatory lending cycles</li>
    </ul>

    <h2>Impact on Kenyan Workers</h2>
    <p>Avela addresses the core challenge facing 80% of employed Kenyans living in poverty despite having jobs. By providing instant access to earned wages, we eliminate the need for high-interest loans and promote financial wellness and dignity.</p>

    <p>For employers, Avela provides cash flow relief by eliminating the need to budget for mid-month salary advances while boosting employee satisfaction, retention, and productivity.</p>
  `,
  featuredImage: {
    url: '/api/placeholder/1200/600',
    alt: 'Person using mobile banking app',
    width: 1200,
    height: 600
  },
  author: {
    id: '1',
    name: 'Vincent Otieno',
    email: 'vincent@avela.co.ke',
    avatar: '/api/placeholder/80/80',
    bio: 'Financial technology expert and founder with extensive experience in digital financial services and salary advance solutions.'
  },
  category: {
    id: '1',
    name: 'Financial Tips',
    slug: 'financial-tips',
    color: '#0081CC'
  },
  tags: [
    { id: '1', name: 'Salary Advance', slug: 'salary-advance' },
    { id: '2', name: 'Financial Planning', slug: 'financial-planning' },
    { id: '3', name: 'Budgeting', slug: 'budgeting' }
  ],
  publishedAt: '2025-09-02T10:00:00Z',
  updatedAt: '2025-09-02T14:30:00Z',
  readingTime: 5,
  status: 'published',
  seo: {
    metaTitle: 'Complete Guide to Salary Advances | Avela Blog',
    metaDescription: 'Learn everything about salary advances with Avela. Get instant access to your earned salary before payday with our comprehensive guide.',
    keywords: ['salary advance', 'financial planning', 'budgeting', 'avela']
  }
}

const mockRelatedPosts = [
  {
    id: '2',
    title: 'Understanding Your Credit Score and How Avela Helps',
    slug: 'understanding-credit-score-avela-helps',
    excerpt: 'Discover how using Avela responsibly can help improve your credit score and financial health.',
    featuredImage: { url: '/api/placeholder/400/300', alt: 'Credit score dashboard' },
    author: { id: '2', name: 'Vincent Otieno', avatar: '/api/placeholder/40/40' },
    category: { id: '1', name: 'Financial Tips', slug: 'financial-tips', color: '#10B981' },
    publishedAt: '2025-09-01T14:30:00Z',
    readingTime: 7,
    tags: [{ id: '2', name: 'Financial Planning', slug: 'financial-planning' }]
  },
  {
    id: '3',
    title: 'Smart Budgeting with Salary Advances',
    slug: 'smart-budgeting-salary-advances',
    excerpt: 'Learn how to budget effectively when using salary advances to maintain financial stability.',
    featuredImage: { url: '/api/placeholder/400/300', alt: 'Budgeting app interface' },
    author: { id: '1', name: 'Vincent Otieno', avatar: '/api/placeholder/40/40' },
    category: { id: '1', name: 'Financial Tips', slug: 'financial-tips', color: '#0081CC' },
    publishedAt: '2025-08-30T16:00:00Z',
    readingTime: 4,
    tags: [{ id: '3', name: 'Budgeting', slug: 'budgeting' }]
  },
  {
    id: '4',
    title: 'Building Emergency Funds with Avela',
    slug: 'building-emergency-funds-avela',
    excerpt: 'Strategies for building and maintaining emergency funds while using salary advance services.',
    featuredImage: { url: '/api/placeholder/400/300', alt: 'Emergency fund savings' },
    author: { id: '1', name: 'Vincent Otieno', avatar: '/api/placeholder/40/40' },
    category: { id: '1', name: 'Financial Tips', slug: 'financial-tips', color: '#0081CC' },
    publishedAt: '2025-08-28T11:15:00Z',
    readingTime: 6,
    tags: [{ id: '1', name: 'Salary Advance', slug: 'salary-advance' }]
  }
]

interface BlogDetailClientProps {
  slug: string
}

export default function BlogDetailClient({ slug }: BlogDetailClientProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      try {
        // Replace with actual API call
        // const response = await fetch(`/api/blog/${slug}`)
        // const data = await response.json()
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        setPost(mockBlogPost)

        // Filter related posts by category and tags
        const filteredRelatedPosts = mockRelatedPosts.filter(relatedPost => {
          // Same category or shared tags
          const sameCategory = relatedPost.category.slug === mockBlogPost.category.slug
          const sharedTags = relatedPost.tags.some(tag =>
            mockBlogPost.tags.some(postTag => postTag.slug === tag.slug)
          )
          return sameCategory || sharedTags
        }).slice(0, 3) // Limit to 3 related posts

        setRelatedPosts(filteredRelatedPosts)
      } catch (err) {
        setError('Failed to load blog post')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        })
      } catch (err) {
        // Fallback to copying URL
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      }
    } else {
      // Fallback to copying URL
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      } catch (err) {
        // Final fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = window.location.href
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        alert('Link copied to clipboard!')
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading article...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Article not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/blog">
            <Button className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/blog?category=${post.category.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {post.category.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white truncate">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[#0081CC] text-white">
            {post.category.name}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-8 leading-tight tracking-tight font-serif">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-12 text-black/60 dark:text-white/60 border-b border-black/20 dark:border-white/20 pb-8">
          <div className="flex items-center gap-2">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <User className="w-8 h-8" />
            )}
            <span className="font-medium">{post.author.name}</span>
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <ReadingTime minutes={post.readingTime} />

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-xl dark:prose-invert max-w-none mb-16 prose-headings:font-serif prose-headings:font-bold prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg prose-li:text-lg prose-li:leading-relaxed prose-strong:text-gray-900 dark:prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/blog?tag=${tag.slug}`}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Tag className="w-3 h-3" />
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <Card className="p-8 mb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="relative">
              <Image
                src={post.author.avatar || '/api/placeholder/100/100'}
                alt={post.author.name}
                width={100}
                height={100}
                className="rounded-full ring-4 ring-blue-100 dark:ring-blue-900"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
                  {post.author.name}
                </h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  Author
                </span>
              </div>
              {post.author.bio && (
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                  {post.author.bio}
                </p>
              )}
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>📧 {post.author.email}</span>
                <span>📝 Financial Expert</span>
                <span>🏢 Avela Team</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                Related Articles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Continue exploring our insights on financial wellness and salary advances
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  post={relatedPost}
                  variant="compact"
                  className="transform hover:scale-105 transition-all duration-300"
                />
              ))}
            </div>

            {/* View All Articles Button */}
            <div className="text-center mt-12">
              <Link href="/blog">
                <Button className="px-8 py-3 text-lg font-semibold bg-[#0081CC] hover:bg-[#0081CC]/90 text-white transform hover:scale-105 transition-all duration-300">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
