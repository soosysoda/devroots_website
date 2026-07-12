import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-panel-line/60 bg-bg-deep">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/brand/mark-transparent.png"
                alt="DevRoots"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="font-display text-base font-semibold text-ink">
                DevRoots
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-dim">
              A systems operations studio rooted in Kolkata — we design,
              build, and run the digital infrastructure organizations
              stand on.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-dim">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/" className="text-ink hover:text-brand">Home</Link></li>
              <li><Link href="/services" className="text-ink hover:text-brand">Services</Link></li>
              <li><Link href="/about" className="text-ink hover:text-brand">About</Link></li>
              <li><Link href="/contact" className="text-ink hover:text-brand">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-dim">
              Systems
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-dim">
              <li>Web platforms</li>
              <li>Infrastructure &amp; DevOps</li>
              <li>Managed operations</li>
              <li>Monitoring &amp; on-call</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-dim">
              Reach us
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-dim">
              <li>Kolkata, West Bengal, India</li>
              <li>
                <a href="mailto:hello@devroots.in" className="text-ink hover:text-brand">
                  hello@devroots.in
                </a>
              </li>
              <li>
                <a href="tel:+913300000000" className="text-ink hover:text-brand">
                  +91 33 0000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-panel-line/60 pt-6 font-mono text-xs uppercase tracking-wider text-ink-dim sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DevRoots. All rights reserved.</span>
          <span className="text-brand">// rooted in Kolkata, deployed everywhere</span>
        </div>
      </div>
    </footer>
  );
}
