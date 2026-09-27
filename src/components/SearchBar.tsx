type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="block min-w-0 flex-1">
      <span className="mb-2 block text-sm font-medium text-zinc-800">
        Search by title
      </span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Try a place or experience name"
        className="h-11 w-full rounded-sm border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
      />
    </label>
  );
}