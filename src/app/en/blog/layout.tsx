import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Blog',
  description: 'Latest insights and thoughts on innovation and entrepreneurship',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HomeLayout {...baseOptions()}>{children}</HomeLayout>
      <Footer />
    </>
  )
}