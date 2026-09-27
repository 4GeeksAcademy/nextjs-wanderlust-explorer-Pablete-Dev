"use client";

import Link from "next/link";
import { useFavorites } from "@/components/FavoritesProvider";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">
      <header className="border-b border-zinc-200 pb-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div
            aria-hidden="true"
            className="grid size-20 shrink-0 place-items-center rounded-full bg-emerald-100 text-2xl font-semibold text-emerald-900"
          >
            LP
          </div>
          <div>
            <p className="text-sm font-medium text-emerald-800">
              Traveler profile
            </p>
            <h1 className="mt-1 text-3xl font-semibold text-zinc-950">
              Lena Park
            </h1>
            <p className="mt-1 text-sm text-zinc-600">Vancouver, Canada</p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-700">
          Curious about local food, quiet trails, and the stories that make every
          place feel different.
        </p>
      </header>

      <section className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-zinc-950">
            Saved experiences
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            {favoriteIds.length} {favoriteIds.length === 1 ? "favorite" : "favorites"}
          </p>
        </div>
        <Link
          href="/favorites"
          className="inline-flex min-h-11 items-center justify-center self-start rounded-sm border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-emerald-800 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 sm:self-auto"
        >
          View favorites
        </Link>
      </section>
    </main>
  );
}