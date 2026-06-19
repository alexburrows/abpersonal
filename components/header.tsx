"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#expertise", label: "Expertise" },
    { href: "#services", label: "Services" },
    { href: "#drupal", label: "Drupal" },
    { href: "#tech-stack", label: "Technology" },
    { href: "#contact", label: "Contact" },
  ];

  const openContact = () => {
    const modal = document.querySelector("[data-book-me-modal]");
    if (modal) {
      (modal as HTMLElement).click();
    }
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-sm font-semibold">
          Alex Burrows
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-nav text-sm">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openContact}
            className="btn btn-primary hidden md:inline-flex"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 text-text-muted md:hidden"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="h-4 w-4"
            />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleNavClick}
                  className="link-nav block py-2.5 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => {
                  handleNavClick();
                  openContact();
                }}
                className="btn btn-primary w-full"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
