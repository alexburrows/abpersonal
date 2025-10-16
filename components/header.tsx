"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-white/10 backdrop-blur-sm"
      } ${
        isHovered || isMobileMenuOpen ? "opacity-100" : isScrolled ? "opacity-95" : "opacity-80"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link
            href="/"
            className={`text-2xl sm:text-3xl font-extrabold transition-all duration-300 ${
              isScrolled 
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent" 
                : "text-white drop-shadow-lg"
            }`}
          >
            Alex Burrows
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-300 font-bold text-base relative group ${
                  isScrolled 
                    ? "text-slate-700 hover:text-blue-600" 
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? "bg-blue-600" : "bg-cyan-300"
                }`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/alexburrows"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-all duration-300 ${
                isScrolled 
                  ? "text-slate-700 hover:text-blue-600" 
                  : "text-white hover:text-cyan-300"
              }`}
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-all duration-300 p-2 ${
                isScrolled 
                  ? "text-slate-700 hover:text-blue-600" 
                  : "text-white hover:text-cyan-300"
              }`}
              aria-label="Toggle mobile menu"
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-colors duration-300 ${
            isScrolled ? "border-slate-300" : "border-white/20"
          }`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`transition-all duration-300 font-bold py-2 ${
                    isScrolled 
                      ? "text-slate-700 hover:text-blue-600" 
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

