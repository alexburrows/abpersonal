"use client";

import Link from "next/link";

export default function DrupalSection() {
  const services = [
    {
      title: "Custom development",
      text: "Modules, themes, integrations, and workflows.",
    },
    {
      title: "Maintenance and support",
      text: "Security updates, performance, monitoring for live sites.",
    },
    {
      title: "Migration services",
      text: "Upgrades from Drupal 5–11 and other CMS platforms.",
    },
    {
      title: "Architecture and audit",
      text: "Technical reviews and design for large Drupal estates.",
    },
  ];

  return (
    <section
      id="drupal"
      data-parallax-section
      className="relative overflow-hidden border-b border-border"
    >
      <div
        data-parallax-bg
        className="parallax-glow parallax-glow--left"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="section-grid">
          <div data-parallax-sticky className="lg:sticky lg:top-24 lg:self-start">
            <span data-parallax-line className="parallax-line" aria-hidden="true" />
            <p className="section-label">Drupal</p>
            <h2 className="section-title">Specialist since 2007.</h2>
            <ul className="mt-6 space-y-2 text-sm text-text-secondary">
              <li>Module contributor</li>
              <li>Drupal 8 Blueprints author</li>
              <li>DrupalCamp organiser</li>
            </ul>
            <p className="mt-8 font-mono text-xs leading-relaxed text-text-muted">
              17+ yrs · 100+ projects
            </p>
          </div>

          <div data-parallax-reveal className="space-y-12">
            <p className="text-sm leading-relaxed text-text-secondary">
              Drupal has been central to my work for nearly 20 years — module
              development, migrations, and architecture for busy public-facing
              sites.
            </p>

            <div>
              <h3 className="text-sm font-medium">Services</h3>
              <dl data-parallax-stagger className="mt-5 divide-rows">
                {services.map((service) => (
                  <div
                    key={service.title}
                    data-parallax-item
                    className="grid gap-1 sm:grid-cols-[10rem_1fr]"
                  >
                    <dt className="text-sm text-text-primary">{service.title}</dt>
                    <dd className="text-sm text-text-secondary">{service.text}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-sm font-medium">
                Community
              </h3>
              <ul
                data-parallax-stagger
                className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary"
              >
                <li data-parallax-item>
                  <span className="text-text-primary">DrupalCamp London</span>
                  {" — "}organised and led the community&apos;s main event (400+
                  attendees)
                </li>
                <li data-parallax-item>
                  <span className="text-text-primary">Contrib modules</span>
                  {" — "}15+ modules focused on APIs and performance
                </li>
                <li data-parallax-item>
                  <span className="text-text-primary">Drupal CWG</span>
                  {" — "}5+ years on community governance
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8">
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
                Discuss a Drupal project
              </button>
              <Link
                href="https://www.drupal.org/u/aburrows"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary self-center"
              >
                Drupal.org profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
