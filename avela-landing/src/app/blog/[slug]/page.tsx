import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"
import BlogDetailClient from './BlogDetailClient'

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params

  // Blog post metadata mapping
  const blogMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
    'understanding-earned-wage-access-avela': {
      title: "Understanding Earned Wage Access: How Avela Transforms Financial Flexibility",
      description: "Discover how Avela's Earned Wage Access platform provides instant access to your accrued salary without loans, interest, or debt. Learn why 74% of Kenyan workers need this solution.",
      keywords: ["earned wage access", "EWA platform", "salary advance", "financial flexibility", "Kenya workers", "M-Pesa transfer", "instant salary"]
    },
    'breaking-free-predatory-lending-avela': {
      title: "Breaking Free from Predatory Lending: The Avela Alternative",
      description: "Learn how Avela helps Kenyan workers avoid 20% monthly interest rates of digital lenders. Discover why 80% of employed Kenyans live in poverty and how EWA provides a solution.",
      keywords: ["predatory lending", "digital lenders Kenya", "high interest rates", "financial poverty", "EWA alternative", "debt-free solution"]
    },
    'employers-benefit-avela-cash-flow-relief': {
      title: "How Employers Benefit from Avela: Cash Flow Relief and Employee Wellbeing",
      description: "Discover how Avela eliminates the need for employers to budget mid-month salary advances while boosting employee satisfaction, retention, and productivity.",
      keywords: ["employer benefits", "cash flow relief", "employee wellbeing", "HR benefits", "payroll integration", "employee retention"]
    }
  }

  const postData = blogMetadata[slug] || {
    title: "Avela Blog Post - Financial Insights and EWA Tips",
    description: "Read the latest insights on earned wage access, financial wellness, and employee benefits from Avela's expert team.",
    keywords: ["Avela blog", "financial insights", "EWA tips", "employee benefits"]
  }

  return generatePageMetadata({
    title: postData.title,
    description: postData.description,
    keywords: postData.keywords,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: new Date().toISOString(),
    section: "Financial Tips",
    tags: postData.keywords
  })
}

// Generate static params for static export
export async function generateStaticParams() {
  // In a real app, you would fetch all blog post slugs from your API
  // For now, return all the blog post slugs we're using
  return [
    { slug: 'understanding-earned-wage-access-avela' },
    { slug: 'breaking-free-predatory-lending-avela' },
    { slug: 'employers-benefit-avela-cash-flow-relief' },
    { slug: 'getting-started-salary-advances-guide' },
    { slug: 'understanding-credit-score-avela-helps' },
    { slug: 'smart-budgeting-salary-advances' },
    { slug: 'building-emergency-funds-avela' },
    { slug: 'financial-wellness-tips' },
    { slug: 'budgeting-with-salary-advances' }
  ]
}

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return <BlogDetailClient slug={params.slug} />
}


