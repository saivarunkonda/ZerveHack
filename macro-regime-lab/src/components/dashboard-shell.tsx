type PillProps = {
  label: string;
  tone?: "blue" | "orange" | "emerald" | "slate";
};

type PanelProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

type ScoreCardProps = {
  label: string;
  value: string;
  helper: string;
  tone: "blue" | "orange" | "emerald" | "violet";
};

type SourceCardProps = {
  name: string;
  type: string;
  use: string;
};

const pillToneClasses: Record<NonNullable<PillProps["tone"]>, string> = {
  blue: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  orange: "border-orange-400/20 bg-orange-400/10 text-orange-200",
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  slate: "border-white/10 bg-white/5 text-slate-200",
};

const cardToneClasses: Record<ScoreCardProps["tone"], string> = {
  blue: "from-sky-400/20 to-sky-200/5 text-sky-200",
  orange: "from-orange-400/20 to-orange-200/5 text-orange-200",
  emerald: "from-emerald-400/20 to-emerald-200/5 text-emerald-200",
  violet: "from-violet-400/20 to-violet-200/5 text-violet-200",
};

export function Pill({ label, tone = "slate" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${pillToneClasses[tone]}`}
    >
      {label}
    </span>
  );
}

export function Panel({ eyebrow, title, children }: PanelProps) {
  return (
    <section className="rounded-[28px] border border-border bg-panel p-6 backdrop-blur xl:p-7">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function ScoreCard({ label, value, helper, tone }: ScoreCardProps) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${cardToneClasses[tone]} p-5 text-white shadow-lg shadow-black/20`}
    >
      <p className="text-sm text-slate-300">{label}</p>
      <p className="mt-3 text-3xl font-semibold">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-200">{helper}</p>
    </div>
  );
}

export function SourceCard({ name, type, use }: SourceCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-white">{name}</h3>
        <Pill label={type} tone="slate" />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{use}</p>
    </div>
  );
}