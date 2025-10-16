"use client";

import { useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode,
  faWrench,
  faArrowsRotate,
  faDiagramProject,
  faCheckCircle,
  faRocket,
  faUserGroup,
  faHandshake,
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import { faDrupal } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DrupalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Custom Drupal Development",
      description: "Bespoke Drupal solutions tailored to your business needs. From custom modules to complex integrations.",
      icon: faCode,
      color: "from-blue-500 to-indigo-600",
      features: [
        "Custom Module Development",
        "Theme Development",
        "API Integrations",
        "Complex Workflows"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, security updates, and performance optimisation to keep your Drupal site running smoothly.",
      icon: faWrench,
      color: "from-emerald-500 to-teal-600",
      features: [
        "Security Updates",
        "Performance Tuning",
        "Bug Fixes",
        "24/7 Monitoring"
      ]
    },
    {
      title: "Migration Services",
      description: "Seamless migration from legacy systems to Drupal or upgrading to the latest version with zero downtime.",
      icon: faArrowsRotate,
      color: "from-cyan-500 to-blue-600",
      features: [
        "Drupal 5 to 11 Migration",
        "Legacy System Migration",
        "Content Migration",
        "Zero Downtime Upgrades"
      ]
    },
    {
      title: "Drupal Architecture",
      description: "Enterprise-grade architecture design and review ensuring scalability and best practices.",
      icon: faDiagramProject,
      color: "from-slate-500 to-blue-600",
      features: [
        "System Architecture",
        "Technical Audits",
        "Performance Planning",
        "Scalability Design"
      ]
    }
  ];

  const contributions = [
    {
      name: "DrupalCamp London",
      description: "Organised and led one of the worlds premier Drupal community events.",
      icon: faUserGroup,
      color: "from-cyan-500 to-teal-500",
      stats: { attendees: "400+", years: "Multiple" }
    },
    {
      name: "Modules & Patches",
      description: "Developed numerous modules focusing on API integrations and performance.",
      icon: faRocket,
      color: "from-blue-500 to-cyan-500",
      stats: { 'contrib modules': "15+"}
    },
    {
      name: "Drupal CWG",
      description: "Working resolve conflcit within the Drupal community.",
      icon: faHandshake,
      color: "from-indigo-500 to-blue-500",
      stats: { years: "5+"}
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      
      {/* Large Drupal logo - positioned to show half, extending off left edge */}
      <div className="absolute left-0 top-0 h-full flex items-center opacity-40 pointer-events-none z-0">
        <FontAwesomeIcon icon={faDrupal} className="h-full w-auto text-cyan-400/50 -translate-x-1/2" style={{ height: '100%', width: 'auto' }} />
      </div>
      
      {/* Space-like background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Stars */}
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400/40 rounded-full mb-6">
            <FontAwesomeIcon icon={faDrupal} className="w-6 h-6 text-cyan-300" />
            <span className="text-sm font-bold text-cyan-100">Drupal Expert Since 2007</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white">
            Drupal Excellence
          </h2>
          <p className="text-xl text-cyan-100/90 max-w-3xl mx-auto leading-relaxed font-medium mb-6">
            Over 16 years delivering enterprise Drupal solutions. 
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
            <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border-2 border-cyan-400/50 text-cyan-200 shadow-lg">
              Drupal Module Contributions
            </span>
            <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border-2 border-blue-400/50 text-blue-200 shadow-lg">
              Drupal 8 Blueprints Author
            </span>
            <span className="px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border-2 border-teal-400/50 text-teal-200 shadow-lg">
              DrupalCamp Organiser
            </span>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-extrabold text-center mb-8 text-white">Drupal Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${service.color} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <FontAwesomeIcon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-cyan-100/80 leading-relaxed font-medium mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm text-cyan-100 font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contributions Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-extrabold text-center mb-8 text-white">Community Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributions.map((contribution) => (
              <div
                key={contribution.name}
                className="group relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${contribution.color} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-cyan-500/20`}>
                      <FontAwesomeIcon icon={contribution.icon} className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 text-white">
                    {contribution.name}
                  </h3>
                  <p className="text-cyan-100/80 mb-3 leading-relaxed text-sm font-medium">
                    {contribution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(contribution.stats).map(([key, value]) => (
                      <span
                        key={key}
                        className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs font-bold text-cyan-200 border border-cyan-400/30"
                      >
                        {value} {key}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats and CTA */}
        <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md p-10 rounded-3xl border-2 border-cyan-400/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl"></div>
          <div className="relative text-center">
            <h3 className="text-3xl font-extrabold mb-6 text-white">
              Why Choose My Drupal Expertise?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-cyan-400/30">
                <div className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text mb-2">16+</div>
                <div className="text-cyan-100 font-semibold">Years Experience</div>
              </div>
              <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-400/30">
                <div className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text mb-2">100+</div>
                <div className="text-cyan-100 font-semibold">Projects Delivered</div>
              </div>
              <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-teal-400/30">
                <div className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text mb-2">50+</div>
                <div className="text-cyan-100 font-semibold">Modules & Patches</div>
              </div>
            </div>
            <p className="text-cyan-100 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              From small business websites to enterprise-scale applications serving millions of users, 
              I deliver Drupal solutions that are robust, maintainable, and built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const modal = document.querySelector('[data-book-me-modal]');
                  if (modal) {
                    (modal as HTMLElement).click();
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 font-bold"
              >
                <FontAwesomeIcon icon={faDrupal} className="w-6 h-6" />
                Discuss Your Drupal Project
              </button>
              <Link
                href="https://www.drupal.org/u/aburrows"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-400/50 text-white rounded-xl hover:bg-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
              >
                Visit Drupal.org Profile
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

