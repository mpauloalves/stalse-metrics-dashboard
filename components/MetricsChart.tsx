"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Campaign = {
  id: number;
  name: string;
  channel: string;
  status: "Ativa" | "Pausada";
  investment: number;
};

type ChartData = {
  channel: string;
  investment: number;
};

function groupInvestmentByChannel(campaigns: Campaign[]): ChartData[] {
  const map = new Map<string, number>();

  for (const c of campaigns) {
    map.set(c.channel, (map.get(c.channel) ?? 0) + c.investment);
  }

  return Array.from(map.entries()).map(([channel, investment]) => ({
    channel,
    investment,
  }));
}

export default function MetricsChart({ campaigns }: { campaigns: Campaign[] }) {
  const data = groupInvestmentByChannel(campaigns);

  const [brandColor, setBrandColor] = useState("#f28c00");

  useEffect(() => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--brand")
      .trim();

    if (value) setBrandColor(value);
  }, []);

  return (
    <div className="w-full rounded-xl bg-white p-6 border border-zinc-200 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900">
          Investimento por Canal
        </h2>
        <span className="text-sm text-zinc-500">
          Soma do investimento por canal
        </span>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="channel" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="investment" fill={brandColor} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}