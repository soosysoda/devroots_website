import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — DevRoots",
  description: "DevRoots is a systems operations studio rooted in Kolkata.",
};

const values = [
  {
    title: "One team, whole stack",
    body: "Design, engineering and operations sit together on every project — no handoffs, no dropped context.",
  },
  {
    title: "Built to be run, not just shipped",
    body: "We think about who's on call at 2am before we write the first line of code.",
  },
  {
    title: "Rooted, not remote-only",
    body: "We're based in Kolkata and work like it — direct conversations, real accountability, no ticket queues.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-panel-line/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              About DevRoots
            </p>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              Named for what we believe good systems need.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-dim">
              DevRoots is a systems operations studio based in Kolkata. We
              exist because too many organizations get a website or a
              server, but not the team that keeps either one healthy. We
              build both, together, and stay attached after launch.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/brand/mark-transparent.png"
              alt="DevRoots mark"
              width={220}
              height={220}
              className="w-40 md:w-56"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-panel-line/60 bg-bg-deep/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            How we think
          </p>
          <h2 className="mt-4 max-w-lg text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            A short list of things we won&apos;t compromise on.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden border border-panel-line bg-panel-line md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="bg-bg p-7">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="facet border border-panel-line bg-panel/60 p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dim">
                Where we work
              </p>
              <p className="mt-4 text-balance font-display text-xl font-semibold text-ink">
                Kolkata-based, working with organizations wherever they are.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                Our team sits in Kolkata, but our systems run on infrastructure
                that doesn&apos;t care about time zones — and neither does our
                on-call rotation.
              </p>
            </div>
            <div className="facet border border-panel-line bg-panel/60 p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dim">
                Who we work with
              </p>
              <p className="mt-4 text-balance font-display text-xl font-semibold text-ink">
                Teams who need a technical partner, not just a vendor.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                From early-stage teams shipping a first platform to
                established organizations modernizing what they already run.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
