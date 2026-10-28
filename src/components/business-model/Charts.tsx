/**
 * Flat SVG charts for the financial dashboard. Positions along the value axis are percentages of the SVG's own width,
 * so the charts fill any panel width while text keeps its real size (no viewBox scaling). The numbers are in the
 * tables next to each chart, so each chart is one image with a short spoken summary.
 */

/**
 * One colour per plan year from the site palette (forest, sage, wicker, sun, terracotta), nudged into the dataviz
 * lightness and chroma band. Passes the CVD and normal-vision separation checks on cream; sage and sun sit below 3:1
 * on cream, so the legend, end labels and the tables carry the values.
 */
export const yearColors = ["#226837", "#89ac64", "#986022", "#e19f3e", "#c06233"];

/** One bar per year, value on top, year below. */
export function ColumnChart({ title, labels, values, format }: { title: string; labels: string[]; values: number[]; format: (n: number) => string }) {
  const top = 22;
  const plot = 128;
  const max = Math.max(...values) || 1;
  const slot = 100 / values.length;
  const summary = `${title}: ${labels.map((l, i) => `${l} ${format(values[i])}`).join(", ")}`;
  return (
    <figure>
      <figcaption className="text-sm font-semibold text-bark">{title}</figcaption>
      <svg role="img" aria-label={summary} width="100%" height={top + plot + 24} className="mt-2 block">
        {/* Bars run 4px past the baseline and are clipped there, so only their top corners are round. */}
        <svg width="100%" height={top + plot}>
          {values.map((v, i) => {
            const h = (v / max) * plot;
            return (
              <rect
                key={labels[i]}
                className="bar-y"
                x={`${i * slot + slot * 0.2}%`}
                width={`${slot * 0.6}%`}
                y={top + plot - h}
                height={h + 4}
                rx={4}
                fill="#2f5d3a"
              />
            );
          })}
        </svg>
        <line x1="0" x2="100%" y1={top + plot} y2={top + plot} stroke="#1f3a26" strokeOpacity={0.35} />
        {values.map((v, i) => (
          <g key={labels[i]} textAnchor="middle" className="text-xs tabular-nums">
            <text x={`${(i + 0.5) * slot}%`} y={top + plot - (v / max) * plot - 6} className="fill-bark font-semibold">
              {format(v)}
            </text>
            <text x={`${(i + 0.5) * slot}%`} y={top + plot + 17} className="fill-leaf">
              {labels[i]}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

/** Year swatches for charts that colour by year. */
export function YearLegend({ label, years }: { label: string; years: readonly number[] }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-leaf">
      <span className="font-semibold">{label}</span>
      {years.map((y, i) => (
        <span key={y} className="inline-flex items-center gap-1.5 tabular-nums">
          <span aria-hidden className="size-2.5 rounded-sm" style={{ background: yearColors[i] }} />
          {y}
        </span>
      ))}
    </p>
  );
}

/**
 * Horizontal bars, one row per item, one bar per series in that row (`series.length` 1 = a plain bar list).
 * `max` sets the full width; the last bar of each row is labelled at its end.
 */
export function BarRows({
  summary,
  rows,
  max,
  colors,
}: {
  summary: string;
  rows: { label: string; note?: string; values: number[]; end: string }[];
  max: number;
  colors: string[];
}) {
  const bar = rows[0].values.length > 1 ? 7 : 12;
  const gap = 2;
  return (
    <ul role="img" aria-label={summary} className="space-y-3">
      {rows.map((r) => {
        const h = r.values.length * (bar + gap) - gap;
        // 82% at most, so the end label always fits on the right.
        const pct = (v: number) => (v / max) * 82;
        const last = r.values.length - 1;
        return (
          <li key={r.label}>
            <p className="text-sm leading-snug font-semibold text-bark">{r.label}</p>
            {r.note && <p className="text-xs leading-snug text-leaf">{r.note}</p>}
            <svg width="100%" height={h} className="mt-1 block overflow-visible">
              {r.values.map((v, i) => (
                <rect key={i} className="bar-x" x="0" y={i * (bar + gap)} width={`${pct(v)}%`} height={bar} rx={2} fill={colors[i]} />
              ))}
              <text x={`${pct(r.values[last])}%`} dx={6} y={last * (bar + gap) + bar / 2} dominantBaseline="central" className="fill-bark text-xs font-semibold tabular-nums">
                {r.end}
              </text>
            </svg>
          </li>
        );
      })}
    </ul>
  );
}
