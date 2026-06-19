"use client";

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Technical leadership",
      description:
        "Engineering standards, mentoring, and architectural decisions that stand up in production.",
    },
    {
      title: "Solution architecture",
      description:
        "Systems that are secure, scalable, and maintainable when requirements are complicated.",
    },
    {
      title: "Full-stack delivery",
      description:
        "I write code as well as design systems — frontend, backend, and infrastructure.",
    },
    {
      title: "Enterprise operations",
      description:
        "Performance, security, compliance, and DevOps for platforms that run reliably every day.",
    },
  ];

  return (
    <section
      id="expertise"
      data-parallax-section
      className="relative overflow-hidden border-b border-border"
    >
      <div
        data-parallax-bg
        className="parallax-glow parallax-glow--centre"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="section-grid">
          <div data-parallax-sticky className="lg:sticky lg:top-24 lg:self-start">
            <span data-parallax-line className="parallax-line" aria-hidden="true" />
            <p className="section-label">Expertise</p>
            <h2 className="section-title">
              Leadership, architecture, and delivery.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Twenty years means knowing what works at scale — and what causes
              expensive problems later.
            </p>
          </div>

          <ol data-parallax-stagger className="divide-rows list-none p-0">
            {expertiseAreas.map((area, index) => (
              <li
                key={area.title}
                data-parallax-item
                className="grid gap-3 sm:grid-cols-[2rem_1fr]"
              >
                <span className="font-mono text-sm text-text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-medium">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {area.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
