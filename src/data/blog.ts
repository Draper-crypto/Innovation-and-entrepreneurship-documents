export interface BlogCardItem {
  title: string;
  description: string;
  date: string; // ISO string
  href: string;
  image: string; // absolute/relative path
  category?: string;
}

export const blogItems: BlogCardItem[] = [
  {
    title: 'Expo mobile development pitfalls and how to avoid them',
    description: 'Learn common pitfalls in Expo mobile development and practical ways to avoid them.',
    date: '2025-06-09',
    href: '/docs',
    image: '/images/blog/expo-pitfalls.svg',
    category: 'Development',
  },
  {
    title: 'Deploying a Self-Hosted Expo API Routes using Docker',
    description: 'Step-by-step guide to deploy self-hosted Expo API Routes with Docker.',
    date: '2024-10-28',
    href: '/docs',
    image: '/images/blog/expo-docker.svg',
    category: 'Guides',
  },
  {
    title: 'Improve User Experience and First-Time App Load with Expo and libSQL',
    description: 'Boost first-time load performance with Expo + libSQL and improve user experience.',
    date: '2024-10-22',
    href: '/docs',
    image: '/images/blog/expo-libsql.svg',
    category: 'Development',
  },
];