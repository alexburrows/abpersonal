"use client";

import Link from "next/link";
import { FooterEmailButton } from "./footer-email-button";

export default function Contact() {
  const links = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/alexburrows/",
    },
    { label: "GitHub", url: "https://github.com/alexburrows" },
    { label: "Medium", url: "https://medium.com/@aburrows" },
    {
      label: "Drupal.org",
      url: "https://www.drupal.org/u/aburrows",
    },
  ];

  return (
    <section
      id="contact"
      data-parallax-section
      className="relative overflow-hidden border-b border-border"
    >
      <div
        data-parallax-bg
        className="parallax-glow parallax-glow--right"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="section-grid">
          <div data-parallax-sticky className="lg:sticky lg:top-24 lg:self-start">
            <span data-parallax-line className="parallax-line" aria-hidden="true" />
            <p className="section-label">Contact</p>
            <h2 className="section-title">Get in touch.</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Hampshire, United Kingdom
            </p>
          </div>

          <div data-parallax-reveal className="max-w-xl">
            <p className="text-sm leading-relaxed text-text-secondary">
              Open to enterprise projects, technical leadership, and consulting.
              If you have a platform problem and want someone who has been there
              before, drop me a line.
            </p>

            <p className="mt-8 text-sm">
              <FooterEmailButton className="link text-base font-semibold" />
            </p>

            <button
              type="button"
              onClick={() => {
                const modal = document.querySelector("[data-book-me-modal]");
                if (modal) {
                  (modal as HTMLElement).click();
                }
              }}
              className="btn btn-primary mt-4 link-arrow"
            >
              Send a message
            </button>

            <ul
              data-parallax-stagger
              className="mt-12 flex flex-wrap gap-3 border-t border-border pt-8"
            >
              {links.map((link) => (
                <li key={link.label} data-parallax-item>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
