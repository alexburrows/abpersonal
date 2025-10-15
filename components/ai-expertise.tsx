import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBrain,
  faRobot,
  faChartLine,
  faLightbulb,
  faMicrochip,
  faWandMagicSparkles
} from "@fortawesome/free-solid-svg-icons";

export default function AIExpertise() {
  const aiCapabilities = [
    {
      title: "AI Integration & LLM Development",
      description: "Implementing cutting-edge AI solutions using GPT, Claude, and other large language models to transform business processes and enhance user experiences.",
      icon: faBrain,
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50"
    },
    {
      title: "Intelligent Automation",
      description: "Building AI-powered automation systems that streamline workflows, reduce costs, and improve efficiency across enterprise operations.",
      icon: faRobot,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      title: "Data-Driven Solutions",
      description: "Leveraging machine learning and AI analytics to extract actionable insights from complex datasets and drive strategic decision-making.",
      icon: faChartLine,
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50"
    },
    {
      title: "AI Strategy & Consulting",
      description: "Providing expert guidance on AI adoption, technology selection, and implementation strategies tailored to your business objectives.",
      icon: faLightbulb,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Dark overlay for AI section */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-gray-900/95 to-slate-900/95 -z-10"></div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-600/20 to-slate-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-600/20 to-gray-700/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full mb-6">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-300">Future-Ready Technology</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            AI & LLM Expertise
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Harnessing the power of artificial intelligence and large language models to create 
            intelligent solutions that drive business transformation and competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {aiCapabilities.map((capability) => (
            <div
              key={capability.title}
              className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-gray-600/30 hover:border-gray-400/50 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${capability.color} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <FontAwesomeIcon icon={capability.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold mb-3 text-white">
                    {capability.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed font-medium">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-gray-600/30">
          <div className="flex items-center gap-3 mb-4">
            <FontAwesomeIcon icon={faMicrochip} className="w-8 h-8 text-gray-300" />
            <h3 className="text-2xl font-extrabold text-white">Technologies & Platforms</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {["OpenAI GPT", "Claude AI", "LangChain", "Vector Databases", "RAG Systems", "Fine-tuning", "Prompt Engineering", "AI APIs"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-gray-600/40 rounded-full text-sm font-bold text-gray-200 hover:bg-white/20 hover:border-gray-400/60 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

