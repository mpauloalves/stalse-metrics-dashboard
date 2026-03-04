"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import MetricCard from "@/components/MetricCard";
import MetricsChart from "@/components/MetricsChart";
import CampaignTable from "@/components/CampaignTable";
import Filter, { StatusFilter } from "@/components/Filter";

interface Metrics {
  totalClients: number;
  monthlyRevenue: number;
  conversionRate: number;
}

interface Campaign {
  id: number;
  name: string;
  channel: string;
  status: "Ativa" | "Pausada";
  investment: number;
}

interface Data {
  metrics: Metrics;
  campaigns: Campaign[];
}

function isValidStatus(
  value: string | null
): value is Exclude<StatusFilter, "Todas"> {
  return value === "Ativa" || value === "Pausada";
}

export default function DashboardClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const initialStatus = (() => {
    const s = searchParams.get("status");
    return isValidStatus(s) ? s : "Todas";
  })();

  const [statusFilter, setStatusFilter] = useState<StatusFilter>(initialStatus);

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    if (statusFilter === "Todas") {
      router.replace("/");
      return;
    }

    router.replace(`/?status=${encodeURIComponent(statusFilter)}`);
  }, [statusFilter, router]);

  useEffect(() => {
    const load = async () => {
      try {
        setError(null);

        const res = await fetch("/api/data");
        if (!res.ok) throw new Error();

        const json = (await res.json()) as Data;
        setData(json);
      } catch {
        setError("Não foi possível carregar os dados. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filteredCampaigns = useMemo(() => {
    if (!data) return [];
    if (statusFilter === "Todas") return data.campaigns;
    return data.campaigns.filter((c) => c.status === statusFilter);
  }, [data, statusFilter]);

  if (loading)
    return (
      <div className="min-h-screen bg-zinc-50 p-8">
        <div className="mb-8 h-8 w-64 rounded bg-zinc-200 animate-pulse" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="h-28 rounded-xl bg-zinc-200 animate-pulse" />
          <div className="h-28 rounded-xl bg-zinc-200 animate-pulse" />
          <div className="h-28 rounded-xl bg-zinc-200 animate-pulse" />
        </div>

        <div className="mt-8 h-80 rounded-xl bg-zinc-200 animate-pulse" />
        <div className="mt-8 h-96 rounded-xl bg-zinc-200 animate-pulse" />
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-zinc-50 p-8 text-zinc-900">
        <h1 className="mb-8 text-3xl font-bold" style={{ color: "var(--brand)" }}>
          Dashboard de Métricas
        </h1>

        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-zinc-50 p-8 text-zinc-900">
      <h1 className="mb-8 text-3xl font-bold" style={{ color: "var(--brand)" }}>
        Dashboard de Métricas
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <MetricCard title="Total de Clientes" value={data?.metrics.totalClients ?? 0} />
        <MetricCard title="Receita Mensal" value={`R$ ${data?.metrics.monthlyRevenue ?? 0}`} />
        <MetricCard title="Taxa de Conversão" value={`${data?.metrics.conversionRate ?? 0}%`} />
      </div>

      <div className="mt-8">{data && <MetricsChart campaigns={data.campaigns} />}</div>

      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">Campanhas</h2>
          <Filter value={statusFilter} onChange={setStatusFilter} />
        </div>

        <CampaignTable campaigns={filteredCampaigns} />
      </div>
    </div>
  );
}