"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsersGear,
  faDiagramProject,
  faCode,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const expertiseAreas = [
    {
      title: "Technical Leadership",
      description: "Leading development teams, establishing technical standards, and driving architectural decisions for enterprise-scale applications.",
      icon: faUsersGear,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      skills: ["Team Leadership", "Technical Strategy", "Mentoring", "Agile Management"]
    },
    {
      title: "Solution Architecture",
      description: "Designing scalable, secure, and maintainable solutions for complex business requirements across diverse industries.",
      icon: faDiagramProject,
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
      skills: ["System Design", "Cloud Architecture", "Microservices", "API Design"]
    },
    {
      title: "Full-Stack Development",
      description: "Building modern web applications with cutting-edge technologies, from frontend to backend and cloud infrastructure.",
      icon: faCode,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      skills: ["React/Next.js", "Node.js", "TypeScript", "Drupal", "Cloud Platforms"]
    },
    {
      title: "Enterprise Solutions",
      description: "Delivering mission-critical solutions for global organisations, ensuring security, scalability, and performance.",
      icon: faBuilding,
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      skills: ["Enterprise Integration", "Security", "Performance", "DevOps"]
    }
  ];

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.expertise-card');
    
    gsap.fromTo(cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} data-parallax-section className="py-20 px-4 sm:px-6 lg:px-8 relative text-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">
          Expertise & Leadership
        </h2>
        <p className="text-center text-cyan-200/80 mb-12 max-w-2xl mx-auto">
          Combining technical expertise with strategic vision to deliver enterprise solutions
        </p>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="expertise-card group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl"></div>
              <div className="relative flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${area.color} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <FontAwesomeIcon icon={area.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold mb-3 text-white">
                    {area.title}
                  </h3>
                  <p className="text-cyan-100/80 mb-4 leading-relaxed font-medium">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm text-sm rounded-full font-semibold text-cyan-200 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default border border-cyan-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

