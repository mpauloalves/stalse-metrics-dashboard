import { NextResponse } from "next/server";


export async function GET() {
 /* return Response.json(
    { message: "Erro simulado" },
    { status: 500 }
  );
}*/


  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = {
   metrics: {
      totalClients: 1240,
      monthlyRevenue: 58200,
      conversionRate: 3.8,
    },

    campaigns: [
      { id: 1, name: "Google Search - Janeiro", channel: "Google", status: "Ativa", investment: 5000 },
      { id: 2, name: "Facebook Leads", channel: "Facebook", status: "Pausada", investment: 3200 },
      { id: 3, name: "Instagram Awareness", channel: "Instagram", status: "Ativa", investment: 4100 },
      { id: 4, name: "LinkedIn B2B", channel: "LinkedIn", status: "Ativa", investment: 6200 },
      { id: 5, name: "Google Display", channel: "Google", status: "Pausada", investment: 2100 },
      { id: 6, name: "YouTube Ads", channel: "YouTube", status: "Ativa", investment: 4700 },
      { id: 7, name: "Facebook Remarketing", channel: "Facebook", status: "Ativa", investment: 3900 },
      { id: 8, name: "Instagram Stories", channel: "Instagram", status: "Pausada", investment: 1800 },
      { id: 9, name: "LinkedIn Leads", channel: "LinkedIn", status: "Ativa", investment: 5400 },
      { id: 10, name: "Google Performance Max", channel: "Google", status: "Ativa", investment: 7300 },
      { id: 11, name: "YouTube Branding", channel: "YouTube", status: "Pausada", investment: 2600 },
      { id: 12, name: "Meta Conversões", channel: "Facebook", status: "Ativa", investment: 4500 },
    ],
  };

  return NextResponse.json(data);
}