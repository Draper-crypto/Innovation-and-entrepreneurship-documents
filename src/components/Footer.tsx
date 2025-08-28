'use client';

import Link from 'next/link';
import { IconBrandTwitter, IconBrandGithub, IconRss } from '@tabler/icons-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const { name, description, footer, links } = siteConfig;
  return (
    <footer className="bg-transparent border-t border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 py-16 px-6">
      <div className="mx-auto w-full max-w-[min(1200px,var(--fd-layout-width))]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">{name}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
          </div>

          {/* PRODUCT Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">产品</h3>
            <div className="space-y-3">
              {footer.product.map((i) => (
                <Link key={i.label} href={i.href} className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm transition-colors">
                  {i.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COMMUNITY Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">社区</h3>
            <div className="space-y-3">
              {footer.community.map((i) => (
                <Link key={i.label} href={i.href} target={i.external ? '_blank' : undefined} className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm transition-colors">
                  {i.label}
                </Link>
              ))}
            </div>
          </div>

          {/* LEGAL Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">法律</h3>
            <div className="space-y-3">
              {footer.legal.map((i) => (
                <Link key={i.label} href={i.href} className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm transition-colors">
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href={links.twitter} target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <IconBrandTwitter size={20} />
              </Link>
              <Link href={links.github} target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <IconBrandGithub size={20} />
              </Link>
              <Link href={links.rss} target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <IconRss size={20} />
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              {footer.copy}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

