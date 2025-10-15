import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsersGear,
  faDiagramProject,
  faCode,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";

export default function Expertise() {
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
      description: "Delivering mission-critical solutions for global organizations, ensuring security, scalability, and performance.",
      icon: faBuilding,
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      skills: ["Enterprise Integration", "Security", "Performance", "DevOps"]
    }
  ];

  return (
    <section data-parallax-section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Expertise & Leadership
        </h2>
        <p className="text-center text-[--foreground]/60 mb-12 max-w-2xl mx-auto">
          Combining technical expertise with strategic vision to deliver enterprise solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className={`group relative bg-gradient-to-br ${area.bgColor} p-8 rounded-2xl border-2 border-white/50 hover:border-transparent hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl"></div>
              <div className="relative flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${area.color} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <FontAwesomeIcon icon={area.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-extrabold mb-3 bg-gradient-to-r ${area.color} bg-clip-text text-transparent`}>
                    {area.title}
                  </h3>
                  <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 bg-white/80 backdrop-blur-sm text-sm rounded-full font-semibold hover:bg-gradient-to-r hover:${area.color} hover:text-white transition-all duration-300 cursor-default shadow-sm border border-slate-200`}
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

