"use client";

export default function HireMe() {
  const handleBookMe = () => {
    const modal = document.querySelector("[data-book-me-modal]");
    if (modal) {
      (modal as HTMLElement).click();
    }
  };

  const services = [
    {
      title: "CTO as a service",
      description:
        "Interim or ongoing technical leadership — roadmaps, team structure, vendor choices, board communication.",
    },
    {
      title: "Solution architecture",
      description:
        "System design for platforms that scale, fit existing estates, and meet security requirements.",
    },
    {
      title: "Enterprise development",
      description:
        "Full-stack delivery for complex applications, new builds, and legacy modernisation.",
      detail: "Drupal · Laravel · React · Next.js",
    },
    {
      title: "AI and automation",
      description:
        "Language models, internal tooling, and automation where it saves time or improves outcomes.",
    },
  ];

  return (
    <section
      id="services"
      data-parallax-section
      className="relative overflow-hidden border-b border-border bg-surface/80 backdrop-blur-sm"
    >
      <div
        data-parallax-bg
        className="parallax-glow parallax-glow--right"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="section-grid">
          <div data-parallax-sticky className="lg:sticky lg:top-24 lg:self-start">
            <span data-parallax-line className="parallax-line" aria-hidden="true" />
            <p className="section-label">Services</p>
            <h2 className="section-title">How I work with clients.</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              I advise at leadership level and I build things. Usually on
              projects where the stakes are high.
            </p>
          </div>

          <div data-parallax-reveal>
            <dl data-parallax-stagger className="divide-rows">
              {services.map((service) => (
                <div
                  key={service.title}
                  data-parallax-item
                  className="grid gap-2 sm:grid-cols-[11rem_1fr]"
                >
                  <dt className="text-sm font-medium text-text-primary">
                    {service.title}
                  </dt>
                  <dd className="text-sm leading-relaxed text-text-secondary">
                    {service.description}
                    {service.detail && (
                      <span className="mt-2 block font-mono text-xs text-text-muted">
                        {service.detail}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm text-text-secondary">
                Available for consulting, contract leadership, and selective
                development. Happy to have a straight conversation.
              </p>
              <button
                type="button"
                onClick={handleBookMe}
                className="btn btn-primary shrink-0 link-arrow"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
