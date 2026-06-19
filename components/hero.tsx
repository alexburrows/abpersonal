"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      data-parallax-section
      data-parallax-hero
      className="relative overflow-hidden border-b border-border"
    >
      <div
        data-parallax-bg
        className="parallax-glow parallax-glow--right"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_16rem] lg:gap-20">
          <div data-parallax-hero-headline>
            <span data-parallax-line className="parallax-line" aria-hidden="true" />
            <p className="section-label">Alex Burrows</p>
            <h1 className="mt-3 max-w-2xl text-[2rem] leading-[1.12] tracking-tight sm:text-5xl">
              Enterprise platforms built to last.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              CTO and Solution Architect. Over 20 years designing and building
              critical systems for large organisations — TypeScript, React,
              Next.js, Drupal, and Laravel.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const modal = document.querySelector("[data-book-me-modal]");
                  if (modal) {
                    (modal as HTMLElement).click();
                  }
                }}
                className="btn btn-primary link-arrow"
              >
                Book a call
              </button>
              <Link href="#contact" className="btn btn-secondary">
                Contact details
              </Link>
            </div>
          </div>

          <aside
            data-parallax-hero-aside
            className="lg:border-l lg:border-border lg:pl-8"
          >
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="section-label">Experience</dt>
                <dd className="mt-1 font-medium text-text-primary">
                  20+ years
                </dd>
              </div>
              <div>
                <dt className="section-label">Role</dt>
                <dd className="mt-1 font-medium text-text-primary">
                  Founder and CTO,{" "}
                  <Link
                    href="https://digidrop.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Digidrop Ltd
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="section-label">Based in</dt>
                <dd className="mt-1 font-medium text-text-primary">
                  Hampshire, UK
                </dd>
              </div>
              <div>
                <dt className="section-label">Also</dt>
                <dd className="mt-1 text-text-secondary">
                  Author · Open-source contributor
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
