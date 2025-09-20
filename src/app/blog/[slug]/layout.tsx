import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: { children: React.ReactNode }) {
  const base = baseOptions();
  return <HomeLayout {...base}>{children}</HomeLayout>;
}