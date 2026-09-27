"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/components/FavoritesProvider";
import { experiences } from "@/data/experiences";

export default function ExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const experience = experiences.find((item) => item.id === id);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!experience) {
    return (
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start px-5 py-10 sm:px-8">
        <h1 className="text-3xl font-semibold text-zinc-950">
          Experiencia no encontrada
        </h1>
        <Link
          href="/experiences"
          className="mt-6 text-sm font-medium text-emerald-800 underline underline-offset-4 hover:text-emerald-950"
        >
          Volver a experiencias
        </Link>
      </main>
    );
  }

  const favorite = isFavorite(experience.id);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 sm:px-8 sm:py-10">
      <Link
        href="/experiences"
        className="inline-flex min-h-10 items-center text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
      >
        <span aria-hidden="true" className="mr-2">&larr;</span>
        Volver a experiencias
      </Link>

      <article className="mt-6 grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-zinc-100">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            unoptimized
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col items-start py-1">
          <p className="text-sm font-medium text-emerald-800">
            {experience.category}
          </p>
          <h1 className="mt-2 text-3xl leading-tight font-semibold text-zinc-950 sm:text-4xl">
            {experience.title}
          </h1>
          <p className="mt-3 text-base text-zinc-600">
            {experience.destination}
          </p>
          <p className="mt-6 max-w-prose text-base leading-7 text-zinc-700">
            {experience.description}
          </p>

          <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-5">
            <div className="flex items-center gap-5">
              <p className="text-xl font-semibold text-zinc-950">
                ${experience.price}
              </p>
              <p
                className="text-sm font-medium text-zinc-700"
                aria-label={`Rating ${experience.rating} out of 5`}
              >
                <span aria-hidden="true" className="text-amber-600">★</span>{" "}
                {experience.rating.toFixed(1)}
              </p>
            </div>
            <button
              type="button"
              aria-label={`${favorite ? "Quitar de" : "Añadir a"} favoritos: ${experience.title}`}
              aria-pressed={favorite}
              onClick={() => toggleFavorite(experience.id)}
              className="grid size-11 place-items-center rounded-full border border-zinc-300 text-2xl text-rose-600 transition-colors hover:bg-rose-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              <span aria-hidden="true">{favorite ? "♥" : "♡"}</span>
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}