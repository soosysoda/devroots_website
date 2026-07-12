import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — DevRoots",
  description: "Get in touch with the DevRoots team in Kolkata.",
};

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Contact
          </p>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Let&apos;s look at what you&apos;re running.
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-dim">
            Tell us about the system, site or problem — we&apos;ll reply with
            next steps, not a sales deck.
          </p>

          <div className="mt-10 grid gap-6 border-t border-panel-line/60 pt-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                Email
              </p>
              <a href="mailto:hello@devroots.in" className="mt-1 block text-ink hover:text-brand">
                hello@devroots.in
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                Phone
              </p>
              <a href="tel:+913300000000" className="mt-1 block text-ink hover:text-brand">
                +91 33 0000 0000
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                Studio
              </p>
              <p className="mt-1 text-ink">Kolkata, West Bengal, India</p>
            </div>
          </div>
        </div>

        <div className="facet border border-panel-line bg-panel/60 p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
