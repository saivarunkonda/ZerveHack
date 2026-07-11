# ZerveHack

This parent folder now contains two separate hackathon project folders, each as its own Next.js app:

- [signal-vs-hype](signal-vs-hype) — prediction markets + forecasting + macro audit
- [macro-regime-lab](macro-regime-lab) — finance + economics + regime detection

## Why separate folders

You asked for both projects in different folders under the same parent. This keeps them independent so you can:

- present two distinct ideas,
- deploy either one without untangling the other,
- tailor the story, demo, and data pipeline for each submission direction.

## Chosen UI framework

Both projects use:

- Next.js
- React
- Tailwind CSS

This stack gives the best tradeoff for a hackathon: premium UI, fast iteration, deployability, and easy API integration.

## Project positioning

### 1. Signal vs Hype

**Critical issue solved:** prediction market odds are often treated as truth without transparent calibration against real-world fundamentals.

**Data focus:**

- Polymarket
- Kalshi
- Metaculus
- FRED

### 2. Macro Regime Lab

**Critical issue solved:** macro decision-making is fragmented across disconnected indicators, market dashboards, and filing research.

**Data focus:**

- FRED
- Alpha Vantage
- SEC EDGAR

## Run either app

From each project folder:

```bash
npm install
npm run dev
```
