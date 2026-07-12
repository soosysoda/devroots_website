import Link from "next/link";
import RootGraphic from "@/components/RootGraphic";

const pillars = [
  {
    tag: "01",
    title: "Web platforms",
    body: "Marketing sites, product dashboards and internal tools, designed and shipped by the same team that keeps them running.",
  },
  {
    tag: "02",
    title: "Infrastructure & DevOps",
    body: "Cloud architecture, CI/CD pipelines and deployment systems built to survive contact with real traffic.",
  },
  {
    tag: "03",
    title: "Managed operations",
    body: "Monitoring, on-call response and maintenance, so nothing you ship becomes something nobody watches.",
  },
];

const process = [
  { step: "01", title: "Discovery", body: "We map how your organization actually works before proposing how it should run." },
  { step: "02", title: "Build", body: "Design and engineering move together — one team, one system, no handoff gaps." },
  { step: "03", title: "Launch", body: "We ship in stages, with rollback paths and monitoring live before day one." },
  { step: "04", title: "Operate", body: "We stay attached to what we build — patching, scaling and answering the pager." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
               Kolkata — systems operations studio
            </p>
            <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Systems,<br />rooted right.
            </h1>
            <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-ink-dim">
              DevRoots designs, builds and operates the websites and
              infrastructure organizations run on — as one accountable team,
              from first line of code to 2am pages.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="facet bg-brand px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-bg-deep transition-colors hover:bg-lime"
              >
                Start a project
              </Link>
              <Link
                href="/services"
                className="font-mono text-sm uppercase tracking-wider text-ink underline decoration-panel-line underline-offset-8 transition-colors hover:text-brand hover:decoration-brand"
              >
                See what we run
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <RootGraphic className="w-full max-w-sm" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-panel-line/60 bg-bg-deep/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-lg">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              What we run
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              One team across the whole stack.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.tag}
                className="facet border border-panel-line bg-panel/60 p-7"
              >
                <span className="font-mono text-xs text-brand">{p.tag}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-panel-line/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-lg">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              How we work
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Four stages, one accountable team.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-panel-line bg-panel-line md:grid-cols-4">
            {process.map((s) => (
              <div key={s.step} className="bg-bg p-7">
                <span className="font-mono text-sm text-brand">{s.step}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-panel-line/60 bg-bg-deep/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="facet-br flex flex-col items-start gap-6 border border-panel-line bg-panel/60 p-10 md:flex-row md:items-center md:justify-between md:p-14">
            <div>
              <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Tell us what you&apos;re running. We&apos;ll tell you how we&apos;d run it.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-dim">
                A short call is usually enough to know if we&apos;re the right fit.
              </p>
            </div>
            <Link
              href="/contact"
              className="facet-sm shrink-0 bg-brand px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-bg-deep transition-colors hover:bg-lime"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
