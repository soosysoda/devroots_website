import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-panel-line/60 bg-bg-deep/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/mark.png"
            alt="DevRoots"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <Image
            src="/brand/mark-transparent.png"
            alt="DevRoots"
            width={128}
            height={32}
            className=""
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] uppercase tracking-wider text-ink-dim transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="facet-sm hidden bg-brand px-5 py-2.5 font-mono text-[13px] font-medium uppercase tracking-wider text-bg-deep transition-colors hover:bg-lime sm:inline-block"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
