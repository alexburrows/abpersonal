"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLocationDot,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { 
  faGithub,
  faLinkedin,
  faMedium,
  faDrupal
} from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const socialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/alexburrows",
      icon: faGithub,
      color: "from-slate-700 to-slate-900",
      hoverColor: "hover:from-slate-600 hover:to-slate-800"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alexburrows/",
      icon: faLinkedin,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600"
    },
    {
      name: "Medium",
      url: "https://medium.com/@aburrows",
      icon: faMedium,
      color: "from-slate-800 to-slate-900",
      hoverColor: "hover:from-slate-700 hover:to-slate-800"
    },
    {
      name: "Drupal.org",
      url: "https://www.drupal.org/u/aburrows",
      icon: faDrupal,
      color: "from-blue-500 to-indigo-600",
      hoverColor: "hover:from-blue-400 hover:to-indigo-500"
    }
  ];

  useEffect(() => {
    if (socialRef.current) {
      const socialCards = socialRef.current.querySelectorAll('.social-card');
      gsap.fromTo(socialCards,
        {
          opacity: 0,
          y: 40,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="contact" data-parallax-section className="py-20 px-4 sm:px-6 lg:px-8 relative text-white">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-blue-200/90 mb-4 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            As a CTO and Solution Architect, I&apos;m open to discussing enterprise projects, technical leadership opportunities, 
            and strategic partnerships. Let&apos;s build something exceptional together.
          </p>
          <div className="flex items-center justify-center gap-2 text-cyan-200 font-semibold">
            <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-cyan-400" />
            <span>Based in Hampshire, UK</span>
          </div>
        </div>
        
        <div ref={socialRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card group relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className={`relative inline-flex p-4 bg-gradient-to-br ${link.color} rounded-xl mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                <FontAwesomeIcon icon={link.icon} className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-white">{link.name}</h3>
            </Link>
          ))}
        </div>

        <div ref={ctaRef} className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 p-10 rounded-3xl shadow-2xl overflow-hidden">
          <div data-parallax-blur className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div data-parallax-blur className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="relative text-center">
            <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <FontAwesomeIcon icon={faPaperPlane} className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-3">
              Ready to Start a Project?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto font-medium">
              I&apos;m currently available for new opportunities. Whether you need technical leadership, solution architecture, 
              or full-stack development expertise, let&apos;s discuss how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://www.linkedin.com/in/alexburrows/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto"
              >
                Connect on LinkedIn
              </Link>
              <Link
                href="https://github.com/alexburrows"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto"
              >
                View GitHub Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
