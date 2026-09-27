"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceCard from "@/components/ExperienceCard";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import type { Experience } from "@/types/experience";

const categories: Experience["category"][] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

type QueryKey = "search" | "category" | "destination";

export default function ExperienceExplorer({
  experiences,
}: {
  experiences: Experience[];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const updateQuery = (key: QueryKey, value: string) => {
    const nextParams = new URLSearchParams(searchParams.toString());
    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }

    const query = nextParams.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  let titlePattern: RegExp | null = null;
  let invalidSearch = false;
  if (search) {
    try {
      titlePattern = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    } catch {
      invalidSearch = true;
    }
  }

  const destinations = [...new Set(experiences.map((item) => item.destination))].sort();
  const filteredExperiences = experiences.filter(
    (experience) =>
      !invalidSearch &&
      (!titlePattern || titlePattern.test(experience.title)) &&
      (!category || experience.category === category) &&
      (!destination || experience.destination === destination),
  );

  return (
    <section aria-label="Experience search and results">
      <div className="grid grid-cols-1 gap-4 rounded-md border border-zinc-200 bg-zinc-50 p-4 sm:grid-cols-2 lg:grid-cols-[minmax(16rem,1fr)_minmax(16rem,0.9fr)] lg:items-end">
        <SearchBar value={search} onChange={(value) => updateQuery("search", value)} />
        <FilterBar
          category={category}
          destination={destination}
          categories={categories}
          destinations={destinations}
          onCategoryChange={(value) => updateQuery("category", value)}
          onDestinationChange={(value) => updateQuery("destination", value)}
        />
      </div>

      <p className="my-5 text-sm text-zinc-600" aria-live="polite">
        {filteredExperiences.length} experiences
      </p>

      {filteredExperiences.length === 0 ? (
        <p className="py-12 text-center text-zinc-700">
          No se encontraron resultados
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </section>
  );
}