import type { MetadataRoute } from 'next'
import { absoluteUrl, siteMetadata } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  const base = new URL(siteMetadata.baseUrl)

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: [absoluteUrl('/sitemap.xml')],
    host: base.host,
  }
}