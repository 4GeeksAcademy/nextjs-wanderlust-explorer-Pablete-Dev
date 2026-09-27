"use client";

import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import { useFavorites } from "@/components/FavoritesProvider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-zinc-950">Favorites</h1>
      </header>

      {favoriteExperiences.length === 0 ? (
        <section className="py-12 text-center">
          <h2 className="text-xl font-semibold text-zinc-950">
            Aún no hay experiencias favoritas
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600">
            Explora las experiencias y guarda aquí las que quieras volver a encontrar.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-sm bg-emerald-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
          >
            Explorar experiencias
          </Link>
        </section>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </main>
  );
}