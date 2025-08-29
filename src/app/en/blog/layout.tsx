import { BlogCard, type BlogPost } from '../../../components/blog-card';
import { blogSourceEn } from '@/lib/source';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export const metadata = {
  title: 'Blog',
  description: 'Latest insights and thoughts on innovation and entrepreneurship',
};

function getBlogPosts(): BlogPost[] {
  const pages = blogSourceEn.getPages();
  
  return pages.map((page) => {
    const { data } = page.data;
    
    return {
      title: data.title || 'Untitled',
      description: data.description || '',
      author: data.author || 'Elexvx Lab',
      authorAvatar: data.authorAvatar,
      date: data.date || new Date().toISOString(),
      thumbnail: data.thumbnail,
      tags: data.tags || [],
      readingTime: data.readingTime,
      featured: data.featured || false,
      url: `/en${page.url}`,
      lang: 'en',
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const base = baseOptions();
  if (children) {
    return <HomeLayout {...base}>{children}</HomeLayout>;
  }

  const posts = getBlogPosts();
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <HomeLayout {...base}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Latest insights and thoughts on innovation and entrepreneurship
          </p>
        </div>

        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard key={post.url} post={post} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <BlogCard key={post.url} post={post} />
            ))}
          </div>
        </section>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts yet</p>
          </div>
        )}
      </div>
    </HomeLayout>
  );
}