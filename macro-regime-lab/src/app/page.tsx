import { Panel, Pill, ScoreCard, SourceCard } from "@/components/dashboard-shell";
import {
  deploymentPlan,
  heroStats,
  indicatorBoard,
  metrics,
  regimePlaybook,
  sources,
} from "@/lib/dashboard-data";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
      <section className="overflow-hidden rounded-[32px] border border-border bg-panel-strong shadow-2xl shadow-black/30">
        <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.35fr_0.95fr] lg:px-10 lg:py-10">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Pill label="Finance & Economics" tone="blue" />
              <Pill label="FRED + Alpha Vantage + SEC EDGAR" tone="orange" />
              <Pill label="Explorable app + API" tone="slate" />
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Macro Regime Lab
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                A regime detection workspace that turns fragmented economic data,
                market action, and company filings into an explainable operating
                map for investors, founders, and analysts.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <Panel title="Critical issue being solved" eyebrow="Why this deserves to exist">
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                Macro analysis is still fragmented across terminals, PDFs,
                spreadsheets, and disconnected headlines. Teams waste time
                arguing over indicators instead of acting on a shared view.
              </p>
              <p>
                <span className="font-semibold text-white">Macro Regime Lab</span>{" "}
                compresses that mess into one answerable system: what regime are
                we in, what indicators are driving it, and what actions usually
                work in that environment?
              </p>
              <ul className="space-y-3 text-slate-200">
                <li>• Detects growth, inflation, liquidity, and stress regimes</li>
                <li>• Links each regime to sector and asset implications</li>
                <li>• Surfaces explainable evidence from data and filings</li>
              </ul>
            </div>
          </Panel>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <ScoreCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Panel title="Indicator board" eyebrow="What the model sees now">
          <div className="space-y-4">
            {indicatorBoard.map((indicator) => (
              <div
                key={indicator.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        {indicator.name}
                      </h3>
                      <Pill label={indicator.family} tone="slate" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {indicator.takeaway}
                    </p>
                  </div>
                  <div className="grid min-w-56 grid-cols-3 gap-3 text-sm">
                    <div className="rounded-xl bg-slate-950/50 p-3">
                      <p className="text-slate-400">Signal</p>
                      <p className="mt-2 text-xl font-semibold text-white">
                        {indicator.signal}
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-950/50 p-3">
                      <p className="text-slate-400">Trend</p>
                      <p className="mt-2 text-xl font-semibold text-sky-300">
                        {indicator.trend}
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-950/50 p-3">
                      <p className="text-slate-400">Impact</p>
                      <p className="mt-2 text-xl font-semibold text-orange-300">
                        {indicator.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Regime playbook" eyebrow="What users can do with it">
          <div className="space-y-4">
            {regimePlaybook.map((item) => (
              <div
                key={item.regime}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-white">{item.regime}</h3>
                  <Pill label={item.score} tone="blue" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.summary}
                </p>
                <p className="mt-3 text-sm font-medium text-orange-200">
                  Action lens: {item.action}
                </p>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Panel title="Integrated sources" eyebrow="Why the product is hard to fake">
          <div className="grid gap-4 md:grid-cols-2">
            {sources.map((source) => (
              <SourceCard key={source.name} {...source} />
            ))}
          </div>
        </Panel>

        <Panel title="Deployment plan" eyebrow="Take it past analysis">
          <div className="space-y-3">
            {deploymentPlan.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <Pill label={item.type} tone="orange" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </main>
  );
}
