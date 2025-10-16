"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar,
  faBriefcase,
  faCreditCard,
  faTv,
  faPills,
  faCar,
  faHotel,
  faShield,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const clients = [
    { name: "PwC", industry: "Professional Services", icon: faBriefcase, color: "from-blue-500 to-blue-600" },
    { name: "Worldpay", industry: "Financial Technology", icon: faCreditCard, color: "from-emerald-500 to-teal-600" },
    { name: "BBC", industry: "Media & Broadcasting", icon: faTv, color: "from-red-500 to-orange-600" },
    { name: "Pfizer", industry: "Pharmaceutical", icon: faPills, color: "from-cyan-500 to-blue-600" },
    { name: "Toyota", industry: "Automotive", icon: faCar, color: "from-slate-600 to-slate-700" },
    { name: "IHG", industry: "Hospitality", icon: faHotel, color: "from-indigo-500 to-blue-600" },
    { name: "Met Police", industry: "Public Sector", icon: faShield, color: "from-indigo-500 to-blue-600" },
    { name: "National Grid", industry: "Energy & Utilities", icon: faBolt, color: "from-yellow-500 to-orange-600" },
  ];

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.client-card');
    
    gsap.fromTo(cards,
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
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
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
    <section data-parallax-section className="py-20 px-4 sm:px-6 lg:px-8 relative text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">
          Trusted by Leading Organisations
        </h2>
        <p className="text-center text-cyan-200/80 mb-12 max-w-2xl mx-auto">
          Delivering enterprise solutions and technical leadership for global brands
        </p>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="client-card group relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 text-center overflow-hidden"
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400" />
              </div>
              <div className={`inline-flex p-4 bg-gradient-to-br ${client.color} rounded-xl mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                <FontAwesomeIcon icon={client.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-extrabold mb-2 text-white">
                {client.name}
              </h3>
              <p className="text-sm text-cyan-200/70 font-medium">{client.industry}</p>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="mt-12 relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 p-10 rounded-3xl shadow-2xl overflow-hidden">
          <div data-parallax-blur className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div data-parallax-blur className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="relative max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-extrabold mb-4 text-white">
              Enterprise Solutions & Technical Leadership
            </h3>
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              As a CTO and Solution Architect, I bring deep technical expertise and strategic vision 
              to complex enterprise projects. From architecting scalable solutions to leading development 
              teams, I&apos;ve helped major organisations transform their digital capabilities and deliver 
              mission-critical applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

