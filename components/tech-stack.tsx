"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode,
  faMobileAlt,
  faServer,
  faCloud,
  faDatabase,
  faPalette
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const gridRef = useRef<HTMLDivElement>(null);

  const technologies = {
    "Languages": {
      icon: faCode,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      techs: ["TypeScript", "JavaScript", "PHP", "GraphQL", "HTML5", "CSS3", "Bash"]
    },
    "Frontend": {
      icon: faMobileAlt,
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50",
      techs: ["React", "Next.js", "React Native", "Nuxt.js", "Bootstrap", "Astro", "SASS", "Tailwind CSS"]
    },
    "Backend": {
      icon: faServer,
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      techs: ["Drupal", "strapi", "Node.js", "Laravel"]
    },
    "Cloud & DevOps": {
      icon: faCloud,
      color: "from-sky-500 to-blue-500",
      bgColor: "from-sky-50 to-blue-50",
      techs: ["upsun", "AWS", "Google Cloud", "Firebase", "Vercel", "DigitalOcean", "Nginx", "Apache", "Jenkins", "GitLab CI", "GitHub Actions"]
    },
    "Databases": {
      icon: faDatabase,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      techs: ["MySQL", "PostgreSQL", "MongoDB", "MariaDB", "Elasticsearch"]
    },
    "Tools & Design": {
      icon: faPalette,
      color: "from-slate-500 to-gray-600",
      bgColor: "from-slate-50 to-gray-50",
      techs: ["Figma", "Adobe Illustrator", "Adobe InDesign", "Adobe After Effects", "Yarn", "Git"]
    }
  };

  useEffect(() => {
    if (!gridRef.current) return;

    const categories = gridRef.current.querySelectorAll('.tech-category');
    
    categories.forEach((category, index) => {
      const badges = category.querySelectorAll('.tech-badge');
      
      // Animate category card
      gsap.fromTo(category,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: category,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate tech badges with stagger
      gsap.fromTo(badges,
        {
          opacity: 0,
          scale: 0.8,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: category,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 relative text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">
          Tech Stack
        </h2>
        <p className="text-center text-cyan-200/80 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, data]) => (
            <div 
              key={category} 
              className="tech-category group relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl"></div>
              <div className="relative flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br ${data.color} rounded-xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-lg`}>
                  <FontAwesomeIcon icon={data.icon} className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.techs.map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge px-3 py-2 bg-white/10 backdrop-blur-sm text-sm rounded-full font-semibold text-cyan-200 hover:bg-white/20 hover:text-white transition-all duration-200 cursor-default border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
