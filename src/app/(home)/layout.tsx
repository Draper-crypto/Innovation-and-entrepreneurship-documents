import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Footer } from '@/components/footer';

export default function Layout({ children }: LayoutProps<'/'>) {
  const base = baseOptions();
  return (
    <>
      <HomeLayout {...base}>{children}</HomeLayout>
      <Footer />
    </>
  );
}
