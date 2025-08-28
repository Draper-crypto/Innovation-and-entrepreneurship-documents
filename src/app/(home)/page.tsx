import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-blue-600/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-400/20">
            <div className="flex items-center space-x-2 text-blue-600">
              <span className="text-sm">🌟 受到 100+ 开发者的信赖</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            给灵感赋予 <br />
            <AnimatedText />
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            专为比赛打造的实战型指南，助力拿下高分
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
            >
              开始构建
            </Link>
            <Link
              href="/blog"
              className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section as 6 flat cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">跳过设置，专注于功能</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              停止在设置代码上浪费时间和金钱。从我们经过实战考验的模板开始，让 AI 帮助您更快地构建功能。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '代码库',
                desc: '访问包含完整示例、入门套件和高级功能的私有仓库。',
              },
              {
                title: '开发工具',
                desc: '预配置的 MCP 服务器和优化的提示，帮助 AI 工具更好地理解您的代码库 — 节省令牌并提高输出质量。',
              },
              {
                title: '模板',
                desc: '使用预构建的模板跳过设置，用于身份验证、支付、AI 等 — 采用最佳实践构建。',
              },
              {
                title: 'Discord 专属频道',
                desc: '直接与我以及社区联系，获取支持、反馈和早期预览。',
              },
              {
                title: '未来更新',
                desc: '终身访问意味着您可以免费获得所有新课程、项目和资源。',
              },
              {
                title: '课程和教程',
                desc: '专注于构建和发布生产就绪应用程序的实践、真实世界内容。',
              },
            ].map((item, index) => (
              <div key={item.title} className="card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (kept) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">生产就绪的入门项目</h2>
            <p className="text-gray-600">
              从简单的 UI 开始，这些实用项目只是实践经验，让您在自己的工作区中抢占先机。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group rounded-2xl p-6 relative overflow-hidden border border-gray-200 bg-transparent dark:border-gray-700">
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">通用</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-gray-100">Expo 通用入门</h3>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">
                  使用 Expo 在两个平台上开发的通用应用程序。
                  功能：身份验证、支付、新手引导、
                  付费墙等。
                </p>
                <Link href="/docs" className="inline-flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  查看教程 →
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl p-6 relative overflow-hidden border border-gray-200 bg-transparent dark:border-gray-700">
              <div className="absolute top-4 right-4">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">NEW</span>
              </div>
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">数据库</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-gray-100">Supabase 入门</h3>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">
                  Supabase 具备所有应用程序功能，可用于开发数据优先的应用程序并随代码库一起发布。
                </p>
                <Link href="/docs" className="inline-flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  查看教程 →
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl p-6 relative overflow-hidden border border-gray-200 bg-transparent dark:border-gray-700">
              <div className="absolute top-4 right-4">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">NEW</span>
              </div>
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">多租户</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-gray-100">Turso 多租户入门</h3>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">
                  Turso 带来了多租户和新手引导诊所时间模式。
                </p>
                <Link href="/docs" className="inline-flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  查看教程 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
