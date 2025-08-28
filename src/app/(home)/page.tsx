import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-6">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-16 pb-10">
        <div className="relative z-10 w-full mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-400/30 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">全新上线</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-[1.1]">
            给灵感赋予
            <br />
            <AnimatedText />
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            转为比赛打造的实战性指南
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              立即体验
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
              </svg>
              GitHub
            </Link>
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full max-w-[min(1200px,var(--fd-layout-width))] px-6">
          <div className="mx-auto w-full overflow-hidden">
            <Image
              src="/images/banner/banner.svg"
              alt="Banner"
              width={2417}
              height={1847}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16" />

      {/* Features Section as 6 flat cards */}
      <section className="py-20">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">核心优势</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              我们提供全方位的创业支持，从构思到市场，每一步都与您并肩作战。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '实战指南',
                desc: '提供从零到一的创业指导，覆盖市场分析、产品开发、融资等关键环节。',
              },
              {
                title: '资源对接',
                desc: '链接行业专家、投资人与合作伙伴，为您的项目注入关键资源。',
              },
              {
                title: '社区支持',
                desc: '加入活跃的创业者社区，交流经验、分享见解，共同成长。',
              },
            ].map((item) => (
              <div key={item.title} className="relative overflow-hidden rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="mb-4 text-4xl">✨</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
