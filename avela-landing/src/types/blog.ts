// Blog-related TypeScript interfaces and types

export interface BlogAuthor {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
  color?: string
  postCount?: number
}

export interface BlogTag {
  id: string
  name: string
  slug: string
  color?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: {
    url: string
    alt: string
    width?: number
    height?: number
  }
  author: BlogAuthor
  category: BlogCategory
  tags: BlogTag[]
  publishedAt: string
  updatedAt?: string
  readingTime: number // in minutes
  status: 'draft' | 'published' | 'archived'
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
  relatedPosts?: BlogPost[]
}

export interface BlogPostSummary {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage: {
    url: string
    alt: string
  }
  author: {
    id: string
    name: string
    avatar?: string
  }
  category: {
    id: string
    name: string
    slug: string
    color?: string
  }
  publishedAt: string
  readingTime: number
  tags: {
    id: string
    name: string
    slug: string
  }[]
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalPosts: number
  postsPerPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface BlogListResponse {
  posts: BlogPostSummary[]
  pagination: PaginationInfo
  categories: BlogCategory[]
  totalPosts: number
}

export interface BlogDetailResponse {
  post: BlogPost
  relatedPosts: BlogPostSummary[]
}

export interface BlogFilters {
  category?: string
  tag?: string
  author?: string
  search?: string
  page?: number
  limit?: number
  sortBy?: 'publishedAt' | 'title' | 'readingTime'
  sortOrder?: 'asc' | 'desc'
}

export interface BlogSearchParams {
  q?: string
  category?: string
  tag?: string
  page?: string
}

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

// Blog statistics for admin/analytics
export interface BlogStats {
  totalPosts: number
  totalCategories: number
  totalAuthors: number
  totalViews: number
  popularPosts: BlogPostSummary[]
  recentPosts: BlogPostSummary[]
}
