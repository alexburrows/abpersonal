"use client";

export default function Clients() {
  const clients = [
    { name: "PwC", industry: "Professional services" },
    { name: "Worldpay", industry: "Financial technology" },
    { name: "BBC", industry: "Media and broadcasting" },
    { name: "Pfizer", industry: "Pharmaceutical" },
    { name: "Toyota", industry: "Automotive" },
    { name: "IHG", industry: "Hospitality" },
    { name: "Met Police", industry: "Public sector" },
    { name: "National Grid", industry: "Energy and utilities" },
    { name: "Coty", industry: "Cosmetics" },
    { name: "Travelopia", industry: "Travel" },
  ];

  return (
    <section
      data-parallax-section
      className="relative overflow-hidden border-b border-border bg-surface/80 backdrop-blur-sm"
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
            <p className="section-label">Clients</p>
            <h2 className="section-title">
              Organisations that need to get it right.
            </h2>
          </div>

          <div data-parallax-reveal>
            <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
              Architecture and delivery for regulated industries and
              high-traffic public platforms — often where downtime or security
              failures are not an option.
            </p>

            <dl
              data-parallax-stagger
              className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2"
            >
              {clients.map((client) => (
                <div
                  key={client.name}
                  data-parallax-item
                  className="flex gap-4 sm:block"
                >
                  <dt className="w-28 shrink-0 text-sm font-medium text-text-primary sm:w-auto">
                    {client.name}
                  </dt>
                  <dd className="text-sm text-text-muted">{client.industry}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
