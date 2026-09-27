import { Suspense } from "react";
import ExperienceExplorer from "@/components/ExperienceExplorer";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-zinc-950">
          Explore experiences
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          {experiences.length} experiences to discover
        </p>
      </header>
      <Suspense fallback={<p className="text-zinc-600">Loading experiences...</p>}>
        <ExperienceExplorer experiences={experiences} />
      </Suspense>
    </main>
  );
}