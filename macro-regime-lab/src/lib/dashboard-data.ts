export const heroStats = [
  {
    label: "Primary question",
    value: "What regime are we in?",
    detail: "Turn dozens of indicators into one explainable macro state.",
  },
  {
    label: "Best users",
    value: "PMs, operators, analysts",
    detail: "Anyone making decisions under shifting macro conditions.",
  },
  {
    label: "Winning hook",
    value: "One macro map, not 20 tabs",
    detail: "A cleaner story than fragmented dashboards and PDF research.",
  },
];

export const metrics = [
  {
    label: "Growth pulse",
    value: "Cooling",
    helper: "Manufacturing, payrolls, and credit data are losing momentum.",
    tone: "blue" as const,
  },
  {
    label: "Inflation pressure",
    value: "Sticky",
    helper: "Disinflation is uneven across services and wages.",
    tone: "orange" as const,
  },
  {
    label: "Liquidity stress",
    value: "Moderate",
    helper: "Financial conditions are restrictive but not yet disorderly.",
    tone: "violet" as const,
  },
  {
    label: "Earnings tone",
    value: "Cautious",
    helper: "Management commentary implies slower demand and tighter margins.",
    tone: "emerald" as const,
  },
];

export const indicatorBoard = [
  {
    name: "2s10s yield curve",
    family: "FRED",
    takeaway:
      "Still points to restrictive conditions, but the steepening pattern is increasingly growth-scare driven rather than bullish reflation.",
    signal: "Inverted",
    trend: "Steepening",
    impact: "Risk-off",
  },
  {
    name: "Payroll growth vs unemployment",
    family: "FRED",
    takeaway:
      "Labor remains intact but no longer offsets the broader slowdown. That pushes the regime toward late-cycle, not fresh expansion.",
    signal: "Cooling",
    trend: "Down",
    impact: "Defensive",
  },
  {
    name: "Sector breadth and revisions",
    family: "Alpha Vantage",
    takeaway:
      "Index resilience is hiding narrower participation, a useful warning when leadership becomes fragile.",
    signal: "Narrow",
    trend: "Weakening",
    impact: "Selective",
  },
];

export const regimePlaybook = [
  {
    regime: "Late-cycle slowdown",
    score: "62% probability",
    summary:
      "Growth cools faster than inflation, leaving policy tight and cyclicals vulnerable to disappointment.",
    action: "Favor quality balance sheets, watch duration, and reduce blind beta exposure.",
  },
  {
    regime: "Sticky-inflation reset",
    score: "24% probability",
    summary:
      "Price pressure proves persistent enough to delay easing and squeeze margins.",
    action: "Look for pricing power, commodities sensitivity, and rate resilience.",
  },
  {
    regime: "Re-acceleration",
    score: "14% probability",
    summary:
      "A lower-probability upside case where growth and breadth improve together.",
    action: "Rotate into cyclicals and small caps only when breadth confirms.",
  },
];

export const sources = [
  {
    name: "FRED",
    type: "Macro data",
    use: "Core economic time series for rates, inflation, labor, growth, and financial conditions.",
  },
  {
    name: "Alpha Vantage",
    type: "Market data",
    use: "Equity, FX, and sector performance for mapping macro regimes into asset behavior.",
  },
  {
    name: "SEC EDGAR",
    type: "Filings",
    use: "Management commentary and disclosures that explain when the macro signal is showing up inside company narratives.",
  },
  {
    name: "Zerve workflows",
    type: "Execution layer",
    use: "Autonomous data cleaning, feature engineering, summarization, and deployable output generation.",
  },
];

export const deploymentPlan = [
  {
    title: "Regime API",
    type: "API",
    detail:
      "Return current regime probabilities, top drivers, and recent changes so other apps or newsletters can consume the signal.",
  },
  {
    title: "Interactive scenario explorer",
    type: "App",
    detail:
      "Let users stress the model with higher inflation, weaker payrolls, or tighter spreads and see the regime shift instantly.",
  },
  {
    title: "Filing-aware alerts",
    type: "Workflow",
    detail:
      "Trigger alerts when SEC commentary starts confirming or contradicting the macro regime signal.",
  },
];