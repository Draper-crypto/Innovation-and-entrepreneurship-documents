import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'zh',
  languages: ['zh', 'en'],
});

// 使用 defineI18nUI 来创建 provider 
export const { provider } = defineI18nUI(i18n, {
  translations: {
    zh: {
      displayName: '中文',
      search: '搜索文档',
      toc: '目录',
      lastUpdate: '最后更新',
      searchNoResult: '没有找到结果',
      tocNoHeadings: '没有标题',
      editOnGithub: '在 GitHub 上编辑此页',
      previousPage: '上一页',
      nextPage: '下一页',
    },
    en: {
      displayName: 'English',
      search: 'Search',
      toc: 'Table of Contents',
      lastUpdate: 'Last updated',
      searchNoResult: 'No results found',
      tocNoHeadings: 'No Headings',
      editOnGithub: 'Edit this page on GitHub',
      previousPage: 'Previous',
      nextPage: 'Next',
    },
  },
});

// 语言检测和持久化工具函数
export function detectLanguage(): string {
  if (typeof window === 'undefined') {
    return i18n.defaultLanguage; // 服务端渲染时使用默认语言
  }
  
  // 优先从 localStorage 读取用户选择的语言
  const storedLang = localStorage.getItem('fumadocs-language');
  if (storedLang && (i18n.languages as string[]).includes(storedLang)) {
    return storedLang;
  }
  
  // 其次从浏览器语言检测
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }
  
  return i18n.defaultLanguage;
}

export function setLanguage(locale: string) {
  if (typeof window !== 'undefined' && (i18n.languages as string[]).includes(locale)) {
    localStorage.setItem('fumadocs-language', locale);
  }
}