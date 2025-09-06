'use client'

import { usePathname } from 'next/navigation'
import { Footer } from '@/components/footer'

export function ConditionalFooter() {
  const pathname = usePathname()
  const isDocsPage = pathname?.startsWith('/docs/')
  
  // 只在非文档页面显示footer
  if (isDocsPage) {
    return null
  }
  
  return <Footer />
}