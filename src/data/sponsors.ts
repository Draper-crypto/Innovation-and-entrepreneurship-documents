export interface SponsorCardItem {
  name: string;
  href: string;
  description: string;
  image: string; // local SVG path
}

export const sponsorItems: SponsorCardItem[] = [
  {
    name: 'OpenAlternative',
    href: 'https://openalternative.co',
    description: 'Discover open source alternatives to popular software',
    image: '/images/sponsors/openalternative.svg',
  },
  {
    name: 'EuroAlternative',
    href: 'https://euroalternative.co',
    description: 'Discover European alternatives to big tech companies',
    image: '/images/sponsors/euroalternative.svg',
  },
  {
    name: 'DevSuite',
    href: 'https://devsuite.co',
    description: 'Curated developer tools to build faster & ship sooner',
    image: '/images/sponsors/devsuite.svg',
  },
];