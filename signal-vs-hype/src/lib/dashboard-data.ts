export const heroHighlights = [
  {
    label: "Primary question",
    value: "When are market odds wrong?",
    detail: "Convert raw event prices into auditable forecasts.",
  },
  {
    label: "Best users",
    value: "Traders, media, research teams",
    detail: "Anyone who needs explainable probability, not just a headline.",
  },
  {
    label: "Winning hook",
    value: "The crowd is not the model",
    detail: "Show narrative premium in a way non-technical judges can follow.",
  },
];

export const metrics = [
  {
    label: "Market calibration score",
    value: "71 / 100",
    helper: "Current pricing quality across tracked event classes.",
    tone: "emerald" as const,
  },
  {
    label: "Narrative premium",
    value: "+13 pts",
    helper: "Odds expansion unexplained by macro, rate, or earnings data.",
    tone: "violet" as const,
  },
  {
    label: "Macro divergence",
    value: "4 live flags",
    helper: "Contracts where model probability and market probability disagree sharply.",
    tone: "cyan" as const,
  },
  {
    label: "Consensus spread",
    value: "18 pts",
    helper: "Distance between prediction markets and community forecasts.",
    tone: "amber" as const,
  },
];

export const liveBoard = [
  {
    name: "Fed cuts by September",
    market: "Kalshi",
    thesis:
      "Cooling payroll momentum and real-rate pressure support easing, but the market is overreacting to one CPI print.",
    marketOdds: "68%",
    modelOdds: "55%",
    gap: "+13 pts",
  },
  {
    name: "US recession before year-end",
    market: "Polymarket",
    thesis:
      "Yield-curve stress remains, but resilient services demand keeps the base case below the market-implied fear level.",
    marketOdds: "41%",
    modelOdds: "29%",
    gap: "+12 pts",
  },
  {
    name: "Major AI regulation signed this year",
    market: "Metaculus + market blend",
    thesis:
      "Search buzz and media attention spiked faster than legislative progress, inflating perceived near-term certainty.",
    marketOdds: "57%",
    modelOdds: "43%",
    gap: "+14 pts",
  },
];

export const pipelineSteps = [
  {
    title: "Normalize market contracts",
    detail:
      "Ingest Polymarket and Kalshi contracts, standardize expiry windows, and collapse duplicate narratives into one event graph.",
  },
  {
    title: "Blend alternative crowd belief",
    detail:
      "Add Metaculus question histories to compare speculative pricing with slower-moving forecast communities.",
  },
  {
    title: "Attach fundamental drivers",
    detail:
      "Pull FRED series such as CPI, payrolls, unemployment, yield spreads, and financial conditions to explain market moves.",
  },
  {
    title: "Score mispricing and alert users",
    detail:
      "Estimate model odds, compute divergence, then expose the output through a dashboard and alert-ready API.",
  },
];

export const sources = [
  {
    name: "Polymarket API",
    type: "Market data",
    use: "Broad crypto-native contract coverage for narrative-heavy events and fast crowd reaction.",
  },
  {
    name: "Kalshi API",
    type: "Market data",
    use: "US-regulated event contracts, especially useful for rates, inflation, and macro themes.",
  },
  {
    name: "Metaculus",
    type: "Forecasting",
    use: "Community forecast histories to benchmark whether tradable odds are ahead of or behind expert consensus.",
  },
  {
    name: "FRED",
    type: "Macro fundamentals",
    use: "Reliable economic indicators for calibration, mispricing scores, and event explanations.",
  },
];

export const apiEndpoints = [
  {
    method: "GET",
    path: "/api/events",
    description: "Returns the actively monitored contracts with normalized metadata and current divergence scores.",
  },
  {
    method: "GET",
    path: "/api/mispricing-score",
    description: "Ranks contracts by model-market gap and confidence level.",
  },
  {
    method: "GET",
    path: "/api/calibration",
    description: "Summarizes historical accuracy by market, topic, and time horizon.",
  },
  {
    method: "GET",
    path: "/api/events/:id/explanation",
    description: "Produces a natural-language explanation of which inputs moved the model probability.",
  },
];