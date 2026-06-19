"use client";

export default function TechStack() {
  const technologies: [string, string][] = [
    [
      "Languages",
      "TypeScript, JavaScript, PHP, GraphQL, HTML, CSS, Bash",
    ],
    [
      "Frontend",
      "React, Next.js, React Native, Nuxt.js, Tailwind CSS, SASS, Astro",
    ],
    ["Backend", "Drupal, Laravel, Node.js, Strapi"],
    [
      "Cloud and DevOps",
      "Upsun, AWS, Google Cloud, Firebase, Vercel, DigitalOcean, Nginx, Apache, Jenkins, GitLab CI, GitHub Actions",
    ],
    ["Databases", "MySQL, PostgreSQL, MongoDB, MariaDB, Elasticsearch"],
    ["Tools", "Figma, Adobe Creative Suite, Yarn, Git"],
  ];

  return (
    <section
      id="tech-stack"
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
            <p className="section-label">Technology</p>
            <h2 className="section-title">Stack.</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              What I use on client work and internal products. Chosen for the
              project, not preference.
            </p>
          </div>

          <dl data-parallax-stagger className="divide-rows font-mono text-sm">
            {technologies.map(([category, items]) => (
              <div
                key={category}
                data-parallax-item
                className="grid gap-2 lg:grid-cols-[8rem_1fr]"
              >
                <dt className="text-text-muted">{category}</dt>
                <dd className="leading-relaxed text-text-secondary">{items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
