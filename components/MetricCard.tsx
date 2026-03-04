interface MetricCardProps {
  title: string;
  value: string | number;
}

export default function MetricCard({ title, value }: MetricCardProps) {
  return (
    <div className="w-full rounded-xl bg-white p-6 border border-zinc-200 shadow-sm transition hover:shadow-md">
      <div
        className="h-1 w-10 rounded-full mb-4"
        style={{ background: "var(--brand)" }}
      />

      <p className="text-sm text-zinc-500">{title}</p>

      <h2
        className="mt-2 text-2xl font-bold"
        style={{ color: "var(--brand)" }}
      >
        {value}
      </h2>
    </div>
  );
}