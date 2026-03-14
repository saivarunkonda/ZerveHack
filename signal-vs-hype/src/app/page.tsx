import {
  Panel,
  Pill,
  SignalCard,
  SourceCard,
} from "@/components/dashboard-shell";
import {
  apiEndpoints,
  heroHighlights,
  liveBoard,
  metrics,
  pipelineSteps,
  sources,
} from "@/lib/dashboard-data";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
      <section className="overflow-hidden rounded-[32px] border border-border bg-panel-strong shadow-2xl shadow-black/30">
        <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.4fr_0.9fr] lg:px-10 lg:py-10">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Pill label="Zerve Hackathon Build" />
              <Pill label="Prediction markets + macro data" tone="cyan" />
              <Pill label="Deployable as app + API" tone="violet" />
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Signal vs Hype
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Audit whether public event odds deserve trust. The app compares
                Polymarket, Kalshi, and Metaculus probabilities against FRED-led
                macro fundamentals to reveal when market pricing is being driven
                by narrative instead of reality.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
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

          <Panel title="Critical issue being solved" eyebrow="Why this matters now">
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                Prediction markets are increasingly quoted like objective truth,
                but many contracts are thinly traded, headline-sensitive, and
                difficult to audit in context.
              </p>
              <p>
                <span className="font-semibold text-white">Signal vs Hype</span>{" "}
                gives traders, journalists, and researchers a transparent answer
                to one question: <em>is this probability grounded in data, or in crowd momentum?</em>
              </p>
              <ul className="space-y-3 text-slate-200">
                <li>• Detects macro divergence before the market snaps back</li>
                <li>• Explains odds moves with real economic drivers</li>
                <li>• Ships as both a shareable app and alert API</li>
              </ul>
            </div>
          </Panel>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <SignalCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <Panel title="Live mispricing board" eyebrow="Top opportunities">
          <div className="space-y-4">
            {liveBoard.map((event) => (
              <div
                key={event.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        {event.name}
                      </h3>
                      <Pill label={event.market} tone="slate" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {event.thesis}
                    </p>
                  </div>
                  <div className="grid min-w-56 grid-cols-3 gap-3 text-sm">
                    <div className="rounded-xl bg-slate-950/50 p-3">
                      <p className="text-slate-400">Market odds</p>
                      <p className="mt-2 text-xl font-semibold text-white">
                        {event.marketOdds}
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-950/50 p-3">
                      <p className="text-slate-400">Model odds</p>
                      <p className="mt-2 text-xl font-semibold text-cyan-300">
                        {event.modelOdds}
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-950/50 p-3">
                      <p className="text-slate-400">Gap</p>
                      <p className="mt-2 text-xl font-semibold text-emerald-300">
                        {event.gap}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Why judges will care" eyebrow="Hackathon framing">
          <div className="space-y-5 text-sm leading-7 text-slate-300">
            <div>
              <h3 className="font-semibold text-white">Analytical depth</h3>
              <p>
                Historical calibration, model-market divergence, event-level
                explanations, and accuracy backtesting go beyond a generic odds
                tracker.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">End-to-end workflow</h3>
              <p>
                Zerve handles ingestion, alignment, scoring, and automated error
                recovery. The frontend turns the analysis into a usable product.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Storytelling clarity</h3>
              <p>
                Every screen answers the same punchy question: when is the crowd
                wrong, and why?
              </p>
            </div>
          </div>
        </Panel>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Panel title="Data pipeline" eyebrow="Zerve execution plan">
          <div className="space-y-4">
            {pipelineSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-semibold text-cyan-300">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-6">
          <Panel title="Integrated sources" eyebrow="Cross-domain advantage">
            <div className="grid gap-4 md:grid-cols-2">
              {sources.map((source) => (
                <SourceCard key={source.name} {...source} />
              ))}
            </div>
          </Panel>

          <Panel title="API surface" eyebrow="Deploy something others can use">
            <div className="space-y-3">
              {apiEndpoints.map((endpoint) => (
                <div
                  key={endpoint.path}
                  className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="font-mono text-sm text-cyan-300">
                      {endpoint.path}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      {endpoint.description}
                    </p>
                  </div>
                  <Pill label={endpoint.method} tone="emerald" />
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </section>
    </main>
  );
}
