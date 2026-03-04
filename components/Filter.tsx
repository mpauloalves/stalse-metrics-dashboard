"use client";

export type StatusFilter = "Todas" | "Ativa" | "Pausada";

interface FilterProps {
  value: StatusFilter;
  onChange: (value: StatusFilter) => void;
}

export default function Filter({ value, onChange }: FilterProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-zinc-600">Status:</span>

      <select
        className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-400"
        value={value}
        onChange={(e) => onChange(e.target.value as StatusFilter)}
      >
        <option value="Todas">Todas</option>
        <option value="Ativa">Ativas</option>
        <option value="Pausada">Pausadas</option>
      </select>
    </div>
  );
}