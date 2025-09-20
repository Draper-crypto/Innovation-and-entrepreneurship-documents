import type { MetadataRoute } from 'next'
import { absoluteUrl, toIsoDate } from '@/lib/seo'
import { source, blog, changelog } from '@/lib/source'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const seen = new Set<string>()

  const add = (path: string, entry: Partial<MetadataRoute.Sitemap[number]> = {}) => {
    if (!path) return
    const url = absoluteUrl(path)
    if (seen.has(url)) return
    seen.add(url)
    entries.push({ url, ...entry })
  }

  add('/', { changeFrequency: 'weekly', priority: 1 })
  add('/blog', { changeFrequency: 'weekly', priority: 0.7 })
  add('/changelog', { changeFrequency: 'weekly', priority: 0.6 })
  add('/sponsors', { changeFrequency: 'monthly', priority: 0.5 })

  const docPages = source.getPages()
  for (const page of docPages) {
    add(page.url, {
      lastModified: toIsoDate((page.data as any)?.updated ?? (page.data as any)?.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  }

  const blogPosts = blog.getPages()
  for (const post of blogPosts) {
    add(post.url, {
      lastModified: toIsoDate((post.data as any)?.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  const changelogPosts = changelog.getPages()
  for (const log of changelogPosts) {
    add(log.url, {
      lastModified: toIsoDate((log.data as any)?.date),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  }

  add('/api/llms-full', { changeFrequency: 'monthly', priority: 0.3 })

  return entries
}
