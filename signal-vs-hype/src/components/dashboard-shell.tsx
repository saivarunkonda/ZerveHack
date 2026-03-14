type PillProps = {
  label: string;
  tone?: "cyan" | "violet" | "emerald" | "slate";
};

type PanelProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

type SignalCardProps = {
  label: string;
  value: string;
  helper: string;
  tone: "emerald" | "cyan" | "amber" | "violet";
};

type SourceCardProps = {
  name: string;
  type: string;
  use: string;
};

const pillToneClasses: Record<NonNullable<PillProps["tone"]>, string> = {
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-200",
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  slate: "border-white/10 bg-white/5 text-slate-200",
};

const cardToneClasses: Record<SignalCardProps["tone"], string> = {
  emerald: "from-emerald-400/20 to-emerald-200/5 text-emerald-200",
  cyan: "from-cyan-400/20 to-cyan-200/5 text-cyan-200",
  amber: "from-amber-300/20 to-amber-100/5 text-amber-200",
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

export function SectionHeading({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-300">{detail}</p>
    </div>
  );
}

export function SignalCard({ label, value, helper, tone }: SignalCardProps) {
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