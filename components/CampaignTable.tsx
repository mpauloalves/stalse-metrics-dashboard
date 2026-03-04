"use client";

type Campaign = {
  id: number;
  name: string;
  channel: string;
  status: "Ativa" | "Pausada";
  investment: number;
};

export default function CampaignTable({ campaigns }: { campaigns: Campaign[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
      <table className="w-full text-sm">
        <thead className="bg-zinc-50 text-zinc-600">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Nome</th>
            <th className="px-4 py-3 text-left font-medium">Canal</th>
            <th className="px-4 py-3 text-left font-medium">Status</th>
            <th className="px-4 py-3 text-right font-medium">Investimento</th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((c) => (
            <tr
              key={c.id}
              className="border-t border-zinc-100 transition-colors hover:bg-zinc-50"
            >
              <td className="px-4 py-3 text-zinc-900">{c.name}</td>
              <td className="px-4 py-3 text-zinc-700">{c.channel}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    c.status === "Ativa"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-zinc-100 text-zinc-700"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right font-medium text-zinc-900">
                R$ {c.investment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}