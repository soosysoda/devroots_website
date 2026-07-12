import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — DevRoots",
  description: "Web platforms, infrastructure and managed operations from DevRoots.",
};

const services = [
  {
    id: "web",
    accent: "brand",
    eyebrow: "Web platforms",
    title: "Sites and products that hold up under real use",
    body: "We design and build marketing sites, customer portals, dashboards and internal tools — as production systems from day one, not prototypes waiting to be rebuilt.",
    items: [
      "Marketing & brand websites",
      "Web applications & dashboards",
      "Internal tools & admin systems",
      "API design & integration",
    ],
  },
  {
    id: "infra",
    accent: "coral",
    eyebrow: "Infrastructure & DevOps",
    title: "The plumbing nobody sees, working every time",
    body: "Cloud architecture, deployment pipelines and environment management set up so releases are routine events, not incidents.",
    items: [
      "Cloud architecture & migration",
      "CI/CD pipelines",
      "Containerization & orchestration",
      "Cost & performance tuning",
    ],
  },
  {
    id: "ops",
    accent: "magenta",
    eyebrow: "Managed operations",
    title: "Someone awake when your systems aren't",
    body: "Monitoring, alerting and on-call response for teams who'd rather build than watch dashboards at 2am — with us on the other end of the page.",
    items: [
      "Uptime & performance monitoring",
      "Incident response & on-call",
      "Backups & disaster recovery",
      "Ongoing maintenance & patching",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-panel-line/60">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Services
          </p>
          <h1 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Everything a system needs to exist, ship, and stay alive.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-dim">
            Most vendors hand you off between design, engineering and
            operations teams. DevRoots stays as one team across all three,
            so nothing gets lost at the seams.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`border-b border-panel-line/60 ${i % 2 === 1 ? "bg-bg-deep/40" : ""}`}
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
            <div>
              <span
                className="inline-block h-2.5 w-2.5"
                style={{ background: `var(--${s.accent})` }}
              />
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-dim">
                {s.eyebrow}
              </p>
              <h2 className="mt-4 text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
                {s.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-dim">
                {s.body}
              </p>
            </div>

            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="facet-sm border border-panel-line bg-panel/60 px-5 py-4 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="facet-br flex flex-col items-start gap-6 border border-panel-line bg-panel/60 p-10 md:flex-row md:items-center md:justify-between md:p-14">
            <div>
              <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Not sure which of these you need?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-dim">
                Most projects touch all three. Tell us where things stand and
                we&apos;ll scope from there.
              </p>
            </div>
            <Link
              href="/contact"
              className="facet-sm shrink-0 bg-brand px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-bg-deep transition-colors hover:bg-lime"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
