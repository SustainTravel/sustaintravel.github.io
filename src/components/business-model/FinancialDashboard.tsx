import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { fill, type Dictionary } from "@/i18n/get-dictionary";
import { formatNumber, formatPrice } from "@/lib/format";
import {
  capex,
  financing,
  operatingExpenses,
  otherDirectExpenses,
  payables,
  payrollRates,
  sales,
  staffing,
  sum,
  tourCount,
  yearTotals,
  years,
} from "@/content/financial-assumptions";
import { BarRows, ColumnChart, YearLegend, yearColors } from "./Charts";

type Row = { label: ReactNode; note?: string; cells: string[]; kind?: "group" | "total" };

function Panel({ id, title, className = "", children }: { id: string; title: string; className?: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className={`reveal reveal-card overflow-hidden rounded-2xl bg-cream ring-1 ring-forest/10 ${className}`}>
      <h3 id={id} className="mx-2 mt-2 rounded-xl bg-leaf px-4 py-2.5 text-sm font-bold tracking-wider text-cream uppercase">
        {title}
      </h3>
      <div className="p-3 sm:p-5">{children}</div>
    </section>
  );
}

/**
 * A year table in the Dashboard sheet's style. Below its natural width it scrolls inside its own box (keyboard
 * reachable, named by its heading) with the row labels pinned, so the page itself never scrolls sideways.
 */
function DataTable({ id, title, head, rows }: { id: string; title: string; head: string[]; rows: Row[] }) {
  return (
    <div>
      <h4 id={id} className="text-sm font-semibold text-bark">
        {title}
      </h4>
      <div role="region" aria-labelledby={id} tabIndex={0} className="mt-2 overflow-x-auto rounded-md focus-visible:outline-offset-0">
        <table aria-labelledby={id} className="w-full border-collapse text-sm tabular-nums">
          <thead>
            <tr className="border-b-2 border-bark">
              {head.map((h, i) => (
                <th
                  key={h}
                  scope="col"
                  className={`py-1.5 font-bold text-bark ${i ? "px-2 text-right leading-snug last:pr-0" : "sticky left-0 bg-cream pr-3 text-left"}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, n) =>
              r.kind === "group" ? (
                <tr key={n}>
                  <th scope="colgroup" colSpan={head.length} className="sticky left-0 bg-cream pt-3 pb-1 text-left text-xs font-semibold text-leaf">
                    {r.label}
                  </th>
                </tr>
              ) : (
                <tr key={n} className={r.kind === "total" ? "border-t-2 border-bark font-bold" : "border-b border-forest/15"}>
                  <th scope="row" className={`sticky left-0 min-w-32 bg-cream py-1.5 pr-3 text-left leading-snug sm:min-w-40 ${r.kind === "total" ? "text-bark" : "font-semibold text-forest"}`}>
                    {r.label}
                    {r.note && <span className="block text-xs font-normal text-leaf">{r.note}</span>}
                  </th>
                  {r.cells.map((c, i) => (
                    <td key={i} className="px-2 py-1.5 text-right whitespace-nowrap text-bark last:pr-0">
                      {c}
                    </td>
                  ))}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Facts({ items }: { items: [string, string][] }) {
  return (
    <dl className="divide-y divide-forest/15 text-sm">
      {items.map(([k, v]) => (
        <div key={k} className="flex items-baseline justify-between gap-4 py-1.5">
          <dt className="font-semibold text-forest">{k}</dt>
          <dd className="text-right font-semibold text-bark tabular-nums">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FinancialDashboard({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.businessModel.finance;
  const L = locale;
  const eur = (n: number) => formatPrice(n, L);
  const num = (n: number) => formatNumber(n, L);
  const pct = (n: number) => formatNumber(n, L, { style: "percent" });
  const compact = (n: number) => formatNumber(n, L, { style: "currency", currency: "EUR", notation: "compact", maximumFractionDigits: 0 });
  const yearHead = (first: string) => [first, ...years.map(String)];
  const yearLabels = years.map(String);
  const last = years.length - 1;

  const tours = yearTotals(sales.slice(0, tourCount).map((s) => s.units));
  const roles = staffing.flatMap((g) => g.roles);
  const team = yearTotals(roles.map((r) => r.headcount));
  const otherTotals = yearTotals(otherDirectExpenses.map((r) => r.values));
  const opexTotals = yearTotals(operatingExpenses.map((r) => r.values));
  const { loan } = financing;

  const kpis = [
    { label: t.kpis.tours.label, value: num(tours[last]), note: fill(t.kpis.tours.note, { n: num(tours[0]) }) },
    { label: t.kpis.team.label, value: num(team[last]), note: fill(t.kpis.team.note, { n: num(team[0]) }) },
    { label: t.kpis.shareCapital.label, value: eur(financing.shareCapital), note: t.kpis.shareCapital.note },
    { label: t.kpis.loan.label, value: eur(loan.principal), note: fill(t.kpis.loan.note, { rate: pct(loan.rate), years: loan.years }) },
    { label: t.kpis.capex.label, value: eur(sum(capex.map((c) => c.value))), note: t.kpis.capex.note },
  ];

  return (
    <section aria-labelledby="fin-title" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
      <div className="overflow-hidden rounded-3xl bg-meadow">
        <div className="bg-forest px-5 py-4 sm:px-8 sm:py-5">
          <h2 id="fin-title" className="text-xl leading-snug font-bold text-balance text-cream italic sm:text-2xl">
            {t.title}
          </h2>
        </div>

        <div className="p-2 sm:p-5 lg:p-6">
          <p className="max-w-3xl px-2 pt-2 leading-relaxed text-pretty text-bark sm:p-0">{t.lead}</p>

          <dl className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-6 sm:gap-3 lg:grid-cols-5">
            {kpis.map((k, i) => (
              <div key={k.label} className={`reveal flex flex-col rounded-2xl bg-cream p-4 ring-1 ring-forest/10 lg:col-span-1 ${i < 3 ? "sm:col-span-2" : "sm:col-span-3"} ${i === kpis.length - 1 ? "col-span-2" : ""}`}>
                <dt className="text-sm leading-snug font-semibold text-leaf">{k.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-bark tabular-nums sm:text-3xl">{k.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-leaf">{k.note}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-2 grid gap-2 sm:mt-4 sm:gap-4 xl:grid-cols-[8fr_7fr]">
            <Panel id="fin-sales" title={t.sales.title} className="xl:col-span-2">
              <div className="grid gap-6 xl:grid-cols-[3fr_2fr] xl:gap-8">
                <div className="min-w-0 space-y-6">
                  <DataTable
                    id="fin-units"
                    title={t.sales.units}
                    head={yearHead(t.item)}
                    rows={[
                      ...sales.map((s) => ({ label: s.name[L], note: s.detail[L], cells: s.units.map(num) })),
                      { label: t.total, kind: "total" as const, cells: yearTotals(sales.map((s) => s.units)).map(num) },
                    ]}
                  />
                  <DataTable
                    id="fin-prices"
                    title={t.sales.prices}
                    head={yearHead(t.item)}
                    rows={sales.map((s) => ({ label: s.name[L], cells: s.price.map((p) => formatPrice(p, L, 2)) }))}
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-bark">{t.sales.chart}</h4>
                  <div className="mt-2 mb-4">
                    <YearLegend label={t.years} years={years} />
                  </div>
                  <BarRows
                    summary={`${t.sales.chart}. ${sales
                      .map((s) => fill(t.sales.chartItem, { item: s.name[L], from: num(s.units[0]), first: years[0], to: num(s.units[last]), last: years[last] }))
                      .join("; ")}`}
                    rows={sales.map((s) => ({ label: s.name[L], values: s.units, end: num(s.units[last]) }))}
                    max={Math.max(...sales.flatMap((s) => s.units))}
                    colors={yearColors}
                  />
                </div>
              </div>
            </Panel>

            <Panel id="fin-costs" title={t.costs.title} className="xl:col-span-2">
              <div className="grid gap-6 xl:grid-cols-[2fr_3fr] xl:gap-8">
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-bark">{t.costs.materials}</h4>
                  <div className="mt-3">
                    <BarRows
                      summary={`${t.costs.materials}: ${sales.map((s) => `${s.name[L]} ${pct(s.materials)}`).join(", ")}`}
                      rows={sales.map((s) => ({ label: s.name[L], note: s.materialsNote[L], values: [s.materials], end: pct(s.materials) }))}
                      max={1}
                      colors={["#2f5d3a"]}
                    />
                  </div>
                </div>
                <div className="min-w-0 space-y-6">
                  <DataTable
                    id="fin-other"
                    title={t.costs.other}
                    head={yearHead(t.item)}
                    rows={[
                      ...otherDirectExpenses.map((r) => ({ label: r.label[L], note: `${t.costs.relatedTo}: ${r.relatedTo[L]}`, cells: r.values.map(eur) })),
                      { label: t.total, kind: "total" as const, cells: otherTotals.map(eur) },
                    ]}
                  />
                  <ColumnChart title={t.costs.chart} labels={yearLabels} values={otherTotals} format={compact} />
                </div>
              </div>
            </Panel>

            <Panel id="fin-staff" title={t.staff.title} className="xl:col-span-2">
              <div className="grid gap-6 xl:grid-cols-[3fr_2fr] xl:gap-8">
                <div className="min-w-0 space-y-6">
                  <DataTable
                    id="fin-headcount"
                    title={t.staff.headcount}
                    head={yearHead(t.item)}
                    rows={[
                      ...staffing.flatMap((g) => [
                        { label: g.group[L], kind: "group" as const, cells: [] },
                        ...g.roles.map((r) => ({ label: r.label[L], cells: r.headcount.map(num) })),
                      ]),
                      { label: t.staff.totalTeam, kind: "total" as const, cells: team.map(num) },
                    ]}
                  />
                  <DataTable
                    id="fin-salaries"
                    title={t.staff.salaries}
                    head={[t.item, t.staff.gross, t.staff.other, t.staff.net]}
                    rows={roles.map((r) => ({ label: r.label[L], cells: [r.gross, r.other, r.net].map(eur) }))}
                  />
                </div>
                <div className="min-w-0 space-y-6">
                  <ColumnChart title={t.staff.chart} labels={yearLabels} values={team} format={num} />
                  <div>
                    <h4 className="text-sm font-semibold text-bark">{t.staff.rates}</h4>
                    <div className="mt-2">
                      <Facts
                        items={[
                          [t.staff.employerSocialSecurity, pct(payrollRates.employerSocialSecurity)],
                          [t.staff.employeeSocialSecurity, pct(payrollRates.employeeSocialSecurity)],
                          [t.staff.incomeTax, pct(payrollRates.incomeTax)],
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Panel>

            <Panel id="fin-opex" title={t.opex.title}>
              <div className="space-y-6">
                <DataTable
                  id="fin-opex-table"
                  title={t.opex.table}
                  head={yearHead(t.item)}
                  rows={[
                    ...operatingExpenses.map((r) => ({ label: r.label[L], cells: r.values.map(eur) })),
                    { label: t.total, kind: "total" as const, cells: opexTotals.map(eur) },
                  ]}
                />
                <ColumnChart title={t.opex.chart} labels={yearLabels} values={opexTotals} format={compact} />
              </div>
            </Panel>

            <div className="grid content-start gap-2 sm:gap-4">
              <Panel id="fin-capex" title={t.capex.title}>
                <DataTable
                  id="fin-capex-table"
                  title={t.capex.table}
                  head={[t.item, t.capex.value, t.capex.year, t.capex.life]}
                  rows={[
                    ...capex.map((c) => ({ label: c.label[L], cells: [eur(c.value), String(c.year), fill(t.capex.lifeYears, { n: c.life })] })),
                    { label: t.total, kind: "total" as const, cells: [eur(sum(capex.map((c) => c.value))), "", ""] },
                  ]}
                />
              </Panel>

              <Panel id="fin-financing" title={t.financing.title}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-bark">{t.financing.start}</h4>
                    <div className="mt-2">
                      <Facts
                        items={[
                          [t.financing.shareCapital, eur(financing.shareCapital)],
                          [t.financing.principal, eur(loan.principal)],
                          [t.financing.rate, pct(loan.rate)],
                          [t.financing.term, fill(t.financing.termYears, { n: loan.years })],
                          [t.financing.instalment, formatPrice(loan.instalment, L, 2)],
                        ]}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-bark">{t.financing.terms}</h4>
                    <dl className="mt-2 divide-y divide-forest/15 text-sm">
                      <div className="py-1.5">
                        <dt className="font-semibold text-forest">{t.financing.customers}</dt>
                        <dd className="text-bark">{t.financing.customersNote}</dd>
                      </div>
                      {payables.map((p) => (
                        <div key={p.label.en} className="py-1.5">
                          <dt className="font-semibold text-forest">{p.label[L]}</dt>
                          <dd className="text-bark">{fill(p.days ? t.financing.payLater : t.financing.payNow, { share: pct(p.immediate), days: p.days })}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
