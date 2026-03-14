# Macro Regime Lab

Macro Regime Lab is a standalone Next.js app for the Zerve hackathon.

## Problem

Macro data is fragmented across dashboards, terminals, and filings. This project builds an explainable regime engine so users can understand the current environment and act on it.

## Core data stack

- FRED
- Alpha Vantage
- SEC EDGAR

## Product outputs

- Interactive regime dashboard
- Regime and driver API
- Zerve analysis workflow for summarization and alerts

## Run locally

```bash
npm install
npm run dev
```

## Suggested next build steps

1. Add live ingestion for FRED, Alpha Vantage, and SEC EDGAR.
2. Build chart components for indicator trends and regime history.
3. Add queryable API routes for regime scores and filing summaries.This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
