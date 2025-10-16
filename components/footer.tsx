import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub,
  faLinkedin,
  faMedium,
  faDrupal
} from "@fortawesome/free-brands-svg-icons";
import { 
  faHeart, 
  faLocationDot,
  faArrowRight,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/alexburrows", icon: faGithub, color: "hover:from-slate-600 hover:to-slate-700" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/alexburrows/", icon: faLinkedin, color: "hover:from-blue-500 hover:to-blue-600" },
    { name: "Medium", href: "https://medium.com/@aburrows", icon: faMedium, color: "hover:from-slate-600 hover:to-slate-700" },
    { name: "Drupal.org", href: "https://www.drupal.org/u/aburrows", icon: faDrupal, color: "hover:from-blue-500 hover:to-indigo-600" },
  ];

  return (
    <footer className="relative overflow-hidden border-t-2 border-cyan-500/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Alex Burrows
            </h3>
            <p className="text-cyan-100/80 leading-relaxed font-medium">
              CTO & Solution Architect specialising in enterprise solutions, AI integration, and Drupal development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-200 font-semibold">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-cyan-400" />
                <span>Hampshire, UK</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-200 font-semibold">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-cyan-400" />
                <a href="mailto:hello@digidrop.io" className="hover:text-cyan-300 transition-colors">
                  hello@digidrop.io
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-cyan-200 hover:text-cyan-300 transition-colors duration-200 font-semibold"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-cyan-400/30">
              <Link
                href="https://digidrop.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-200 hover:text-emerald-400 transition-colors font-bold"
              >
                <span>Digidrop Ltd</span>
                <span className="text-cyan-400">→</span>
              </Link>
              <p className="text-sm text-cyan-300/70 mt-1">Digital Solutions & Innovation</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Connect With Me</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border-2 border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105`}
                >
                  <div className={`p-2 bg-gradient-to-br ${link.color.replace('hover:', '')} rounded-lg group-hover:scale-110 transition-all duration-300 shadow-md`}>
                    <FontAwesomeIcon icon={link.icon} className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-cyan-200 group-hover:text-cyan-100 transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-cyan-400/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-sm text-cyan-200/80 font-medium">
              © {currentYear} Alex Burrows. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-cyan-200/80 font-medium">
              <span>Built with</span>
              <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-red-400 animate-pulse" />
              <span>using</span>
              <span className="font-bold text-cyan-300">Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
