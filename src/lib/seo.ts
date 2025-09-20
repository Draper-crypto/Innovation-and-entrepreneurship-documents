const FALLBACK_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://ai.elexvx.com'

const rawBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || (process.env.VERCEL_URL ? process.env.VERCEL_URL : FALLBACK_URL)

function ensureAbsolute(url: string | undefined): string {
  if (!url) return FALLBACK_URL
  if (/^https?:\/\//i.test(url)) return url
  return `https://${url}`
}

const DEFAULT_URL = ensureAbsolute(rawBaseUrl)
const normalizedUrl = DEFAULT_URL.replace(/\/$/, '')

export const siteMetadata = {
  name: 'ElexvxAI Lab',
  shortName: 'ElexvxAI Lab',
  title: 'ElexvxAI Lab - 宏翔商道创新产业研发中心',
  description: 'ElexvxAI Lab（宏翔商道创新产业研发中心）成立于2025年8月，致力于多模态智能、创新创业赋能、自有资金投资与资产管理协同发展的研究实践。',
  locale: 'zh_CN',
  baseUrl: normalizedUrl,
  defaultOgImage: '/images/top/top1.svg',
  socials: {
    github: 'https://github.com/elexvx',
    twitter: '@elexvx',
  },
} as const

export function absoluteUrl(path: string = '/'): string {
  try {
    return new URL(path, siteMetadata.baseUrl).toString()
  } catch {
    return path
  }
}

export function toIsoDate(value: unknown): string | undefined {
  if (!value) return undefined
  const date = value instanceof Date ? value : new Date(value as string)
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString()
}