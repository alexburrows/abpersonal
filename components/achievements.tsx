import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBoxArchive,
  faUsers,
  faUserPlus,
  faCodeBranch,
  faTrophy,
  faMedal
} from "@fortawesome/free-solid-svg-icons";

export default function Achievements() {
  const stats = [
    { label: "Repositories", value: "32", icon: faBoxArchive, color: "from-blue-500 to-cyan-500" },
    { label: "Followers", value: "8", icon: faUsers, color: "from-indigo-500 to-blue-500" },
    { label: "Following", value: "4", icon: faUserPlus, color: "from-emerald-500 to-teal-500" },
    { label: "Contributions", value: "1000+", icon: faCodeBranch, color: "from-orange-500 to-amber-500" },
  ];

  const achievements = [
    {
      name: "Arctic Code Vault Contributor",
      description: "Contributed code to the 2020 GitHub Archive Program",
      icon: faTrophy,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50"
    },
    {
      name: "Pull Shark",
      description: "Opened pull requests that have been merged",
      icon: faMedal,
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          GitHub Activity
        </h2>
        <p className="text-center text-[--foreground]/60 mb-12 max-w-2xl mx-auto">
          My contributions and achievements on GitHub
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-white p-6 rounded-2xl text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-slate-200"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-10 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all"></div>
              <div className="relative">
                <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-xl mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <FontAwesomeIcon icon={stat.icon} className="w-7 h-7 text-white" />
                </div>
                <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.name}
              className={`group relative bg-gradient-to-br ${achievement.bgColor} border-2 border-white/50 p-8 rounded-2xl hover:border-transparent hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl"></div>
              <div className="relative flex items-start gap-4">
                <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${achievement.color} rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <FontAwesomeIcon icon={achievement.icon} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-extrabold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.name}
                  </h3>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

