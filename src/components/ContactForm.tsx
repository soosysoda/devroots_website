"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="facet border border-panel-line bg-panel/60 p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
          Message sent
        </p>
        <p className="mt-4 font-display text-xl font-semibold text-ink">
          Thanks — we&apos;ll write back within a business day.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-dim">
          If it&apos;s urgent, reach us directly at{" "}
          <a href="mailto:hello@devroots.in" className="text-brand">
            hello@devroots.in
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-dim">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            className="facet-sm border border-panel-line bg-bg-deep px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-dim/60 focus:border-brand"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-dim">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            className="facet-sm border border-panel-line bg-bg-deep px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-dim/60 focus:border-brand"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-dim">
          Organization
        </span>
        <input
          name="organization"
          type="text"
          className="facet-sm border border-panel-line bg-bg-deep px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-dim/60 focus:border-brand"
          placeholder="Company or team name"
        />
      </label>

      <label className="grid gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-dim">
          What are you running, or trying to build?
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="facet-sm resize-none border border-panel-line bg-bg-deep px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-dim/60 focus:border-brand"
          placeholder="A line or two on the project, system, or problem"
        />
      </label>

      <button
        type="submit"
        className="facet-sm mt-2 w-fit bg-brand px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-bg-deep transition-colors hover:bg-lime"
      >
        Send message
      </button>
    </form>
  );
}
