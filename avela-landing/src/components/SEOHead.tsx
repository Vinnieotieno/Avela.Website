"use client"

import Head from 'next/head'
import { baseSEO } from '@/lib/seo'

interface SEOHeadProps {
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
  structuredData?: object
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  path = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  structuredData
}: SEOHeadProps) {
  const url = `${baseSEO.siteUrl}${path}`
  const fullTitle = title.includes('Avela') ? title : `${title} | Avela`
  const allKeywords = [...baseSEO.keywords, ...keywords].join(', ')

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={authors ? authors.join(', ') : baseSEO.author} />
      <meta name="creator" content={baseSEO.creator} />
      <meta name="publisher" content={baseSEO.publisher} />
      <meta name="robots" content={baseSEO.robots} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={baseSEO.siteName} />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${baseSEO.siteUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseSEO.siteUrl}/og-image.jpg`} />
      <meta name="twitter:creator" content="@avelafinan79261" />
      <meta name="twitter:site" content="@avelafinan79261" />
      
      {/* Additional SEO */}
      <meta name="geo.region" content={baseSEO.region} />
      <meta name="geo.country" content={baseSEO.countryName} />
      <meta name="geo.placename" content="Nairobi, Kenya" />
      <meta name="language" content={baseSEO.language} />
      <meta name="target-country" content="KE" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  )
}
