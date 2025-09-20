import Link from 'next/link';
import Image from 'next/image';

const sponsors = [
  {
    name: 'Elexvx Inc',
    description: '发起公司、主要投资方',
    cover: '/images/sponsors/elexvx.svg',
    url: 'https://ai.elexvx.com/',
  },
  {
    name: '全国大学生创新创业实践大赛',
    description: '合作伙伴',
    cover: '/images/sponsors/cxcysj.svg',
    url: 'https://new.saikr.com/vse/51382?type=notice&id=32747',
  },
  {
    name: '南京市建邺区韶华工坊',
    description: '合作伙伴、省级大学生创业示范园',
    cover: '/images/sponsors/jyqrmzf.png',
    url: 'https://www.njjy.gov.cn/ztzl/yshjzl/202401/t20240129_4158107.html',
  },
  {
    name: '江宁沉梦亿联软件科技工作室',
    description: '合作伙伴',
    cover: '/images/sponsors/cmyl.png',
    url: 'https://aiqicha.baidu.com/company_detail_58792301623482',
  },
];

export default function SponsorsPage() {
  return (
    <main className="grow container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">赞助商</h1>
      <p className="text-fd-muted-foreground mb-8">感谢以下合作伙伴的支持</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sponsors.map((s) => (
          <div
            key={s.name}
            className="group rounded-2xl border bg-fd-card text-fd-card-foreground overflow-hidden shadow-sm hover:shadow-md transition-shadow dark:border-white/10"
          >
            <div className="relative aspect-[16/9]">
              <Image 
                src={s.cover} 
                alt={s.name} 
                fill
                className="object-cover" 
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 group-hover:underline">{s.name}</h2>
              <p className="text-sm text-fd-muted-foreground mb-4 line-clamp-2">{s.description}</p>
              <Link
                href={s.url}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
              >
                访问 {new URL(s.url).host}
                <svg className="ms-2 size-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}