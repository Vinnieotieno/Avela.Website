# Blog API Documentation

This document outlines all the API endpoints, data structures, and objects required for our Blog functionality.

## Base URL

https://api.avela.co.ke/v1


## Authentication
All API requests should include the following headers:

Authorization: Bearer <api-token>
Content-Type: application/json


## API Endpoints

### 1. Get Blog Posts (List)
**Endpoint:** `GET /blog/posts`

**Description:** Retrieve a paginated list of blog posts with filtering options.

**Query Parameters:**
- `page` (integer, optional): Page number (default: 1)
- `limit` (integer, optional): Posts per page (default: 12, max: 50)
- `category` (string, optional): Filter by category slug
- `tag` (string, optional): Filter by tag slug
- `author` (string, optional): Filter by author ID
- `search` (string, optional): Search in title and content
- `status` (string, optional): Filter by status (published, draft, archived)
- `sortBy` (string, optional): Sort field (publishedAt, title, readingTime)
- `sortOrder` (string, optional): Sort direction (asc, desc)

**Response:**
```json
{
  "success": true,
  "data": {
    "posts": [
      {
        "id": "string",
        "title": "string",
        "slug": "string",
        "excerpt": "string",
        "featuredImage": {
          "url": "string",
          "alt": "string"
        },
        "author": {
          "id": "string",
          "name": "string",
          "avatar": "string"
        },
        "category": {
          "id": "string",
          "name": "string",
          "slug": "string",
          "color": "string"
        },
        "publishedAt": "2024-01-15T10:00:00Z",
        "readingTime": 5,
        "tags": [
          {
            "id": "string",
            "name": "string",
            "slug": "string"
          }
        ]
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalPosts": 48,
      "postsPerPage": 12,
      "hasNextPage": true,
      "hasPreviousPage": false
    },
    "categories": [
      {
        "id": "string",
        "name": "string",
        "slug": "string",
        "color": "string",
        "postCount": 15
      }
    ],
    "totalPosts": 48
  }
}
```

2. Get Single Blog Post
Endpoint: GET /blog/posts/{slug}

Description: Retrieve a single blog post by its slug.

Path Parameters:
- `slug` (string, required): The blog post slug

Response:
json
{
  "success": true,
  "data": {
    "post": {
      "id": "string",
      "title": "string",
      "slug": "string",
      "excerpt": "string",
      "content": "string (HTML)",
      "featuredImage": {
        "url": "string",
        "alt": "string",
        "width": 1200,
        "height": 600
      },
      "author": {
        "id": "string",
        "name": "string",
        "email": "string",
        "avatar": "string",
        "bio": "string",
        "socialLinks": {
          "twitter": "string",
          "linkedin": "string",
          "github": "string"
        }
      },
      "category": {
        "id": "string",
        "name": "string",
        "slug": "string",
        "description": "string",
        "color": "string"
      },
      "tags": [
        {
          "id": "string",
          "name": "string",
          "slug": "string",
          "color": "string"
        }
      ],
      "publishedAt": "2024-01-15T10:00:00Z",
      "updatedAt": "2024-01-16T09:30:00Z",
      "readingTime": 5,
      "status": "published",
      "seo": {
        "metaTitle": "string",
        "metaDescription": "string",
        "keywords": ["string"]
      }
    },
    "relatedPosts": [
      {
        "id": "string",
        "title": "string",
        "slug": "string",
        "excerpt": "string",
        "featuredImage": {
          "url": "string",
          "alt": "string"
        },
        "author": {
          "id": "string",
          "name": "string",
          "avatar": "string"
        },
        "category": {
          "id": "string",
          "name": "string",
          "slug": "string",
          "color": "string"
        },
        "publishedAt": "2024-01-12T14:30:00Z",
        "readingTime": 7,
        "tags": [
          {
            "id": "string",
            "name": "string",
            "slug": "string"
          }
        ]
      }
    ]
  }
}


 3. Get Categories
Endpoint: `GET /blog/categories`

Description: Retrieve all blog categories.

Query Parameters:
- `includeCounts` (boolean, optional): Include post counts (default: true)

Response:
json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "slug": "string",
      "description": "string",
      "color": "string",
      "postCount": 15
    }
  ]
}
```

4. Get Tags
Endpoint: `GET /blog/tags`

Description: Retrieve all blog tags.

Query Parameters:
- `limit` (integer, optional): Maximum number of tags to return
- `popular` (boolean, optional): Return only popular tags

Response:
json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "slug": "string",
      "color": "string",
      "postCount": 8
    }
  ]
}


 5. Get Authors
Endpoint: `GET /blog/authors`

Description: Retrieve all blog authors.

Response:
json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "avatar": "string",
      "bio": "string",
      "socialLinks": {
        "twitter": "string",
        "linkedin": "string",
        "github": "string"
      },
      "postCount": 12
    }
  ]
}


 6. Search Blog Posts
Endpoint: `GET /blog/search`

Description: Advanced search functionality for blog posts.

Query Parameters:
- `q` (string, required): Search query
- `page` (integer, optional): Page number (default: 1)
- `limit` (integer, optional): Results per page (default: 12)
- `category` (string, optional): Filter by category
- `dateFrom` (string, optional): Filter posts from date (ISO format)
- `dateTo` (string, optional): Filter posts to date (ISO format)

Response:
json
{
  "success": true,
  "data": {
    "posts": [
      {
        "id": "string",
        "title": "string",
        "slug": "string",
        "excerpt": "string",
        "featuredImage": {
          "url": "string",
          "alt": "string"
        },
        "author": {
          "id": "string",
          "name": "string",
          "avatar": "string"
        },
        "category": {
          "id": "string",
          "name": "string",
          "slug": "string",
          "color": "string"
        },
        "publishedAt": "2024-01-15T10:00:00Z",
        "readingTime": 5,
        "relevanceScore": 0.95
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 3,
      "totalResults": 28,
      "resultsPerPage": 12
    },
    "searchQuery": "salary advance",
    "searchTime": 0.045
  }
}


## Data Models

### BlogPost (Full)
```typescript
interface BlogPost {
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
  readingTime: number 
  status: 'draft' | 'published' | 'archived'
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}
```

### BlogPostSummary (List View)
```typescript
interface BlogPostSummary {
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
```

### BlogAuthor
```typescript
interface BlogAuthor {
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
  postCount?: number
}
```

### BlogCategory
```typescript
interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
  color?: string 
  postCount?: number
}
```

### BlogTag
```typescript
interface BlogTag {
  id: string
  name: string
  slug: string
  color?: string // Hex color code
  postCount?: number
}
```

## Error Responses

All error responses follow this format:
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {
    "field": "Additional error details"
  }
}
```

### Common Error Codes
- `POST_NOT_FOUND`: Blog post not found
- `INVALID_PARAMETERS`: Invalid query parameters
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `UNAUTHORIZED`: Invalid or missing authentication
- `SERVER_ERROR`: Internal server error

## Rate Limiting
- 1000 requests per hour per API key
- 100 requests per minute per IP address

## Caching
- Blog posts: Cache for 15 minutes
- Categories/Tags: Cache for 1 hour
- Search results: Cache for 5 minutes

## Content Guidelines
- Maximum title length: 200 characters
- Maximum excerpt length: 500 characters
- Recommended featured image size: 1200x600px
- Supported image formats: JPG, PNG, WebP
- Maximum image size: 2MB
