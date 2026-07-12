export default function RootGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 560"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* root lines */}
      <path
        d="M260 120 L260 220 L120 340 L120 430 M260 220 L400 340 L400 460 M120 340 L60 400 M400 340 L460 400"
        stroke="var(--panel-line)"
        strokeWidth="2"
      />
      <path
        d="M260 120 L260 220 L120 340 L120 430"
        stroke="var(--brand-dim)"
        strokeWidth="2"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />
      <path
        d="M260 220 L400 340 L400 460"
        stroke="var(--brand-dim)"
        strokeWidth="2"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />

      {/* trunk node — the mark's kite shape, echoed */}
      <polygon
        points="260,70 320,130 260,190 200,130"
        fill="var(--brand)"
      />

      {/* mid node */}
      <polygon points="260,196 292,228 260,260 228,228" fill="var(--brand)" />

      {/* leaf facets, colours pulled from the mark */}
      <polygon points="120,412 120,460 168,460" fill="var(--coral)" opacity="0.9" />
      <polygon points="60,382 60,418 96,418" fill="var(--lime)" opacity="0.9" />
      <polygon points="400,442 400,478 436,478" fill="var(--magenta)" opacity="0.9" />
      <polygon points="460,382 460,418 424,418" fill="var(--brand)" opacity="0.6" />

      <circle cx="120" cy="340" r="5" fill="var(--ink)" opacity="0.8" />
      <circle cx="400" cy="340" r="5" fill="var(--ink)" opacity="0.8" />
    </svg>
  );
}
