# 📊 Dashboard de Métricas — Desafio Técnico Stalse

Aplicação web construída com Next.js que exibe indicadores de marketing, gráfico de investimento por canal e tabela de campanhas com filtro por status sincronizado à URL.

## Tecnologias
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Recharts

## Recursos
- Cartões com métricas: total de clientes, receita mensal e taxa de conversão
- Gráfico de barras (Recharts) agregando investimento por canal
- Tabela de campanhas com destaque de status
- Filtro por status com sincronização de URL (`?status=Ativa|Pausada`) e deep-linking
- API interna que simula dados de métricas e campanhas

## Requisitos
- Node.js 18+ recomendado
- npm (ou outro gerenciador de pacotes equivalente)

## Instalação e execução
```bash
# dentro do repositório
cd dashboard-metricas
npm install
npm run dev
# aplicação disponível em http://localhost:3000
```

## Build, start e lint
```bash
npm run build
npm run start
npm run lint
```
## Deploy

A aplicação pode ser executada localmente ou publicada via Vercel.

Após o deploy, acesse:
👉 https://SEU-LINK-VERCEL.vercel.app

## Estrutura principal
- [app/page.tsx](./app/page.tsx): página principal com cartões, gráfico, filtro e tabela
- [app/api/data/route.ts](./app/api/data/route.ts): endpoint que retorna métricas e campanhas simuladas
- [components/](./components): componentes de UI (MetricCard, MetricsChart, CampaignTable, Filter)
- [app/globals.css](./app/globals.css): estilos globais e variáveis de tema (inclui `--brand`)

## API e dados
- Endpoint: `GET /api/data`
- Resposta: contém `metrics` (totalClients, monthlyRevenue, conversionRate) e lista de `campaigns` com `id`, `name`, `channel`, `status` e `investment`

## Filtro por status
- Componente [Filter](./components/Filter.tsx) controla o estado de `status`
- Estado sincronizado com a URL via `useSearchParams` e `router.replace`
- Valores aceitos: `Todas`, `Ativa`, `Pausada`

## Customização visual
- Ajuste a cor de marca (`--brand`) em [app/globals.css](./app/globals.css)
- Tailwind 4 está habilitado via `@import "tailwindcss";` e `@theme inline`

## Scripts disponíveis
- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção
- `npm run start`: inicializa servidor de produção
- `npm run lint`: executa ESLint

## Referências de código
[page.tsx](./app/page.tsx)
[route.ts](./app/api/data/route.ts)
[MetricsChart.tsx](./components/MetricsChart.tsx)
[CampaignTable.tsx](./components/CampaignTable.tsx)
[Filter.tsx](./components/Filter.tsx)
