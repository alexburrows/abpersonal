import Link from "next/link";
import { FooterEmailButton } from "./footer-email-button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Services", href: "#services" },
    { name: "Drupal", href: "#drupal" },
    { name: "Technology", href: "#tech-stack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-text-primary">Alex Burrows</p>
            <p className="mt-2 text-sm text-text-muted">
              CTO and Solution Architect · Hampshire, UK
            </p>
            <p className="mt-1 text-sm text-text-muted">
              <FooterEmailButton className="link text-sm" />
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="link-subtle text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://digidrop.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-subtle text-sm"
                >
                  Digidrop Ltd
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-border-subtle pt-6 text-xs text-text-muted">
          © {currentYear} Alex Burrows
        </p>
      </div>
    </footer>
  );
}
