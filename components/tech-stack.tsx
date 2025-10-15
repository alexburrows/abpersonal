import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode,
  faMobileAlt,
  faServer,
  faCloud,
  faDatabase,
  faPalette
} from "@fortawesome/free-solid-svg-icons";

export default function TechStack() {
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
      techs: ["React", "Next.js", "React Native", "Nuxt.js", "Gatsby", "Astro", "SASS", "Tailwind CSS"]
    },
    "Backend": {
      icon: faServer,
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      techs: ["Node.js", "Express.js", "Drupal"]
    },
    "Cloud & DevOps": {
      icon: faCloud,
      color: "from-sky-500 to-blue-500",
      bgColor: "from-sky-50 to-blue-50",
      techs: ["AWS", "Google Cloud", "Firebase", "Vercel", "Heroku", "DigitalOcean", "Nginx", "Apache", "Jenkins", "GitLab CI", "GitHub Actions"]
    },
    "Databases": {
      icon: faDatabase,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      techs: ["MySQL", "MongoDB", "MariaDB", "Elasticsearch"]
    },
    "Tools & Design": {
      icon: faPalette,
      color: "from-slate-500 to-gray-600",
      bgColor: "from-slate-50 to-gray-50",
      techs: ["Figma", "Adobe Illustrator", "Adobe InDesign", "Adobe After Effects", "Yarn", "Git"]
    }
  };

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Tech Stack
        </h2>
        <p className="text-center text-[--foreground]/60 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, data]) => (
            <div 
              key={category} 
              className={`group relative bg-gradient-to-br ${data.bgColor} p-6 rounded-2xl border-2 border-white/50 hover:border-transparent hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl"></div>
              <div className="relative flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br ${data.color} rounded-xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-lg`}>
                  <FontAwesomeIcon icon={data.icon} className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-extrabold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-white/70 backdrop-blur-sm text-sm rounded-full font-semibold text-slate-700 hover:bg-white hover:shadow-md transition-all duration-200 cursor-default border border-slate-200"
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

