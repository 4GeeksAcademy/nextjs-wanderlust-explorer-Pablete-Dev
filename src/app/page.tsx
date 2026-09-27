import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-zinc-900 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85')] bg-cover bg-center">
        <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 lg:px-12">
          <p className="mb-5 text-xs font-semibold uppercase text-white/80 sm:text-sm">
            Discover beyond the usual
          </p>
          <h1 className="max-w-4xl text-5xl leading-[1.02] font-semibold text-white sm:text-6xl lg:text-8xl">
            Go where the story begins.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
            Find remarkable places, meet local makers, and make room for the
            unexpected along the way.
          </p>
          <Link
            href="/experiences"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-sm bg-emerald-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore experiences
          </Link>
        </div>
      </section>
    </main>
  );
}
