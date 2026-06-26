import type { MetadataRoute } from 'next'
import { site } from '@/data/site'
import { articles } from '@/data/articles'
import { guides } from '@/data/guides'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`
  const now = new Date()

  const staticRoutes = [
    '',
    '/field-notes',
    '/eco-glossary',
    '/our-method',
    '/reach-us',
    '/privacy-policy',
    '/terms',
    '/affiliate-disclosure',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  const articleRoutes = articles.map((a) => ({
    url: `${base}/best/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const guideRoutes = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...articleRoutes, ...guideRoutes]
}
