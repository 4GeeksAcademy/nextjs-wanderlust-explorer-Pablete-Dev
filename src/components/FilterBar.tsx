import type { Experience } from "@/types/experience";

type FilterBarProps = {
  category: string;
  destination: string;
  categories: readonly Experience["category"][];
  destinations: readonly string[];
  onCategoryChange: (category: string) => void;
  onDestinationChange: (destination: string) => void;
};

export default function FilterBar({
  category,
  destination,
  categories,
  destinations,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
      <label className="block min-w-0">
        <span className="mb-2 block text-sm font-medium text-zinc-800">
          Category
        </span>
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="h-11 w-full rounded-sm border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
        >
          <option value="">All categories</option>
          {category && !categories.includes(category as Experience["category"]) && (
            <option value={category}>{category}</option>
          )}
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="block min-w-0">
        <span className="mb-2 block text-sm font-medium text-zinc-800">
          Destination
        </span>
        <select
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          className="h-11 w-full rounded-sm border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
        >
          <option value="">All destinations</option>
          {destination && !destinations.includes(destination) && (
            <option value={destination}>{destination}</option>
          )}
          {destinations.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}