import Link from "next/link";

export default function BookSection() {
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
            <p className="section-label">Writing</p>
            <h2 className="section-title">Drupal 8 Blueprints</h2>
          </div>

          <article data-parallax-reveal className="max-w-2xl">
            <p className="text-sm leading-relaxed text-text-secondary">
              Technical guide to building professional Drupal 8 applications —
              architecture, module development, API integration, and
              performance. Published by Packt.
            </p>
            <p className="mt-6 text-sm text-text-muted">
              Covers enterprise patterns, module development, API integration,
              performance optimisation, and real-world examples.
            </p>
            <Link
              href="https://www.amazon.co.uk/Drupal-Blueprints-along-creation-professional-grade-ebook/dp/B01AANEHPU"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mt-8 link-arrow"
            >
              View on Amazon
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
