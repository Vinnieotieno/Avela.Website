import { Metadata } from 'next'

// Base SEO configuration
export const baseSEO = {
  siteName: 'Avela - Kenya\'s Leading Earned Wage Access Platform',
  siteUrl: 'https://avela.co.ke',
  defaultTitle: 'Avela - Instant Salary Access to M-Pesa | Kenya\'s #1 EWA Platform',
  defaultDescription: 'Get instant access to your earned salary via M-Pesa with Avela. Kenya\'s leading Earned Wage Access platform - 0% interest, no loans, instant transfers. Join 50,000+ workers.',
  keywords: [
    'Avela',
    'salary advance Kenya',
    'earned wage access',
    'M-Pesa salary advance',
    'instant salary Kenya',
    'payroll advance',
    'financial wellness Kenya',
    'employee benefits',
    'salary on demand',
    'EWA platform Kenya',
    'Kenyan fintech',
    'mobile money Kenya',
    'financial inclusion',
    'digital lending Kenya',
    'workplace benefits'
  ],
  author: 'Avela Technologies',
  creator: 'Avela Team',
  publisher: 'Avela Technologies Ltd',
  robots: 'index, follow',
  language: 'en-KE',
  region: 'KE',
  countryName: 'Kenya'
}

// Generate structured data for organization
export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Avela Technologies',
  alternateName: 'Avela',
  url: baseSEO.siteUrl,
  logo: `${baseSEO.siteUrl}/logo.png`,
  description: baseSEO.defaultDescription,
  foundingDate: '2025',
  founders: [
    {
      '@type': 'Person',
      name: 'Avela Team'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'Kenya'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254-700-AVELA',
    contactType: 'customer service',
    email: 'business@avela.co.ke'
  },
  sameAs: [
    'https://www.facebook.com/share/1FPvLEAvQB/',
    'https://instagram.com/avela_finance',
    'https://x.com/avelafinan79261'
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'Kenya'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Earned Wage Access Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instant Salary Access',
          description: 'Access your earned salary instantly via M-Pesa'
        }
      }
    ]
  }
}

// Generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}): Metadata {
  const url = `${baseSEO.siteUrl}${path}`
  const fullTitle = title.includes('Avela') ? title : `${title} | Avela`
  const allKeywords = [...baseSEO.keywords, ...keywords].join(', ')

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: authors ? authors.map(name => ({ name })) : [{ name: baseSEO.author }],
    creator: baseSEO.creator,
    publisher: baseSEO.publisher,
    robots: baseSEO.robots,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: baseSEO.siteName,
      locale: 'en_KE',
      type,
      images: [
        {
          url: `${baseSEO.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags && { tags })
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseSEO.siteUrl}/og-image.jpg`],
      creator: '@avelafinan79261',
      site: '@avelafinan79261'
    },
    other: {
      'geo.region': baseSEO.region,
      'geo.country': baseSEO.countryName,
      'geo.placename': 'Nairobi, Kenya',
      'language': baseSEO.language,
      'target-country': 'KE',
      'distribution': 'global',
      'rating': 'general',
      'revisit-after': '7 days'
    }
  }

  return metadata
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Generate service structured data
export function generateServiceStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Earned Wage Access',
    description: 'Instant access to earned salary via M-Pesa without loans or interest',
    provider: {
      '@type': 'Organization',
      name: 'Avela Technologies'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kenya'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'EWA Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instant M-Pesa Transfer',
            description: 'Get your earned salary instantly via M-Pesa'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 Access',
            description: 'Access your earned wages anytime, anywhere'
          }
        }
      ]
    }
  }
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}
