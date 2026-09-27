import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/components/FavoritesProvider";
import type { Experience } from "@/types/experience";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experience.id);
  const experienceUrl = `/experiences/${experience.id}`;

  return (
    <article className="group overflow-hidden rounded-md border border-zinc-200 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <Link href={experienceUrl} aria-label={`View ${experience.title}`}>
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            unoptimized
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <button
          type="button"
          aria-label={`${favorite ? "Remove from" : "Add to"} favorites: ${experience.title}`}
          aria-pressed={favorite}
          onClick={() => toggleFavorite(experience.id)}
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white text-xl text-rose-600 shadow-sm transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          <span aria-hidden="true">{favorite ? "♥" : "♡"}</span>
        </button>
      </div>
      <div className="p-4">
        <p className="text-sm text-zinc-600">{experience.destination}</p>
        <h2 className="mt-1 text-lg font-semibold text-zinc-950">
          <Link href={experienceUrl} className="hover:text-emerald-800">
            {experience.title}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-zinc-600">
          {experience.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-100 pt-3 text-sm">
          <span className="text-zinc-600">{experience.category}</span>
          <span
            className="font-medium text-zinc-800"
            aria-label={`Rating ${experience.rating} out of 5`}
          >
            <span aria-hidden="true" className="text-amber-600">★</span>{" "}
            {experience.rating.toFixed(1)}
          </span>
          <span className="font-semibold text-zinc-950">
            ${experience.price}
          </span>
        </div>
      </div>
    </article>
  );
}