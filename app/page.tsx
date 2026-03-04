import { Suspense } from "react";
import DashboardClient from "./DashboardClient";

export default function Page() {
  return (
    <Suspense
      fallback={
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
      }
    >
      <DashboardClient />
    </Suspense>
  );
}