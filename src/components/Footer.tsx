import Link from 'next/link';
import { IconBrandTwitter, IconBrandGithub, IconRss } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-200 text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* 这里可以放置一个实际的Logo组件或图片 */}
              <span className="text-xl font-bold">ElexvxAI Lab</span>
            </div>
            <p className="text-gray-600 text-sm">构建真实的移动应用程序</p>
          </div>

          {/* PRODUCT Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700">产品</h3>
            <div className="space-y-3">
              <Link href="/docs" className="block text-gray-600 hover:text-gray-800 text-sm transition-colors">
                文档
              </Link>
              <Link href="/pricing" className="block text-gray-600 hover:text-gray-800 text-sm transition-colors">
                定价
              </Link>
              <Link href="/faq" className="block text-gray-600 hover:text-gray-800 text-sm transition-colors">
                常见问题
              </Link>
            </div>
          </div>

          {/* COMMUNITY Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700">社区</h3>
            <div className="space-y-3">
              <Link href="https://twitter.com" target="_blank" className="block text-gray-600 hover:text-gray-800 text-sm transition-colors">
                推特
              </Link>
              <Link href="mailto:support@example.com" className="block text-gray-600 hover:text-gray-800 text-sm transition-colors">
                邮箱
              </Link>
            </div>
          </div>

          {/* LEGAL Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700">法律</h3>
            <div className="space-y-3">
              <Link href="/terms" className="block text-gray-600 hover:text-gray-800 text-sm transition-colors">
                条款
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-gray-800 text-sm transition-colors">
                隐私
              </Link>
              <Link href="/licenses" className="block text-gray-600 hover:text-gray-800 text-sm transition-colors">
                许可
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Link href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-gray-800 transition-colors">
                <IconBrandTwitter size={20} />
              </Link>
              <Link href="https://github.com" target="_blank" className="text-gray-600 hover:text-gray-800 transition-colors">
                <IconBrandGithub size={20} />
              </Link>
              <Link href="/rss.xml" target="_blank" className="text-gray-600 hover:text-gray-800 transition-colors">
                <IconRss size={20} />
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              版权所有 © 2024 ElexvxAI Lab. 保留所有权利。
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}