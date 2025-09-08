import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="astro-404 relative min-h-[80vh] md:min-h-[86vh] overflow-hidden flex items-center justify-center px-4">
      {/* Star layers */}
      <div className="box-of-star1">
        <div className="star star-position1" />
        <div className="star star-position2" />
        <div className="star star-position3" />
        <div className="star star-position4" />
        <div className="star star-position5" />
        <div className="star star-position6" />
        <div className="star star-position7" />
      </div>
      <div className="box-of-star2">
        <div className="star star-position1" />
        <div className="star star-position2" />
        <div className="star star-position3" />
        <div className="star star-position4" />
        <div className="star star-position5" />
        <div className="star star-position6" />
        <div className="star star-position7" />
      </div>
      <div className="box-of-star3">
        <div className="star star-position1" />
        <div className="star star-position2" />
        <div className="star star-position3" />
        <div className="star star-position4" />
        <div className="star star-position5" />
        <div className="star star-position6" />
        <div className="star star-position7" />
      </div>
      <div className="box-of-star4">
        <div className="star star-position1" />
        <div className="star star-position2" />
        <div className="star star-position3" />
        <div className="star star-position4" />
        <div className="star star-position5" />
        <div className="star star-position6" />
        <div className="star star-position7" />
      </div>

      {/* Astronaut */}
      <div data-js="astro" className="astronaut">
        <div className="head" />
        <div className="arm arm-left" />
        <div className="arm arm-right" />
        <div className="body">
          <div className="panel" />
        </div>
        <div className="leg leg-left" />
        <div className="leg leg-right" />
        <div className="schoolbag" />
      </div>

      {/* Text layer */}
      <div className="relative z-[20] flex flex-col items-center text-center gap-3 md:gap-4">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 dark:from-[#e6e9ff] dark:to-[#aab1ff] drop-shadow-[0_6px_24px_rgba(0,0,0,0.2)]">
          404
        </h1>
        <p className="text-sm md:text-base text-white/90 dark:text-white/80">
          页面未找到或已移走
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-[var(--color-fd-primary,#6966EC)] px-4 py-2 text-white shadow-sm ring-1 ring-black/5 hover:opacity-90 transition"
        >
          返回首页
        </Link>
      </div>

      {/* Backdrop gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(105,102,236,0.35),transparent),linear-gradient(to_bottom,#0a0a1a,40%,#050510)] dark:bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(105,102,236,0.45),transparent),linear-gradient(to_bottom,#02020a,40%,#000)]"
      />
    </div>
  )
}

