import { useCallback, useEffect, useState } from "react";
import { primaryNavLinks, sectionIds } from "@/lib/nav-links";
import { scrollToSection } from "@/lib/smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState("top");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
    setActiveSection(sectionId);
    closeMenu();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = intersecting[0]?.target.id;
        if (top && sectionIds.includes(top)) {
          setActiveSection(top);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.08, 0.2, 0.35, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={isScrolled ? "site-header site-header--inverted" : "site-header"}>
      <div className="shell site-header__bar">
        <a href="/" className="site-logo font-heading" onClick={closeMenu}>
          Alex Burrows
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.sectionId)}
                    className={
                      isActive
                        ? "site-nav__link site-nav__link--active"
                        : "site-nav__link"
                    }
                    aria-current={isActive ? "location" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="btn btn-primary site-header__cta link-arrow"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("open-consultation-modal"));
            closeMenu();
          }}
        >
          Start a project
        </button>

        <button
          type="button"
          className="site-header__menu"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-4 w-4" />
        </button>
      </div>

      {isOpen && (
        <nav className="site-header__drawer" aria-label="Mobile">
          <ul className="site-header__drawer-list">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.sectionId)}
                    className={
                      isActive
                        ? "site-header__drawer-link site-header__drawer-link--active"
                        : "site-header__drawer-link"
                    }
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      <div
        className="site-header__progress"
        role="progressbar"
        aria-label="Page progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress * 100)}
      >
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
    </header>
  );
}
