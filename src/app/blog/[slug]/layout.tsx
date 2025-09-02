import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: { children: React.ReactNode }) {
  const base = baseOptions();
  return (
    <HomeLayout
      {...base}
      // 文章详情页：仅保留“回首页”的单一链接，隐藏其他导航入口
      links={[{ text: '回首页', url: '/' }]}
    >
      {children}
    </HomeLayout>
  );
}