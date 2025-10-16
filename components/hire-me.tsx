"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCheckCircle,
  faRocket,
  faBrain,
  faCode,
  faUsers,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";

export default function HireMe() {
  const handleBookMe = () => {
    const modal = document.querySelector('[data-book-me-modal]');
    if (modal) {
      (modal as HTMLElement).click();
    }
  };

  const services = [
    {
      title: "CTO as a Service",
      description: "Strategic technical leadership for your organisation. I provide hands-on CTO expertise to guide technology decisions, build teams, and drive innovation.",
      icon: faUsers,
      points: ["Technical Strategy", "Team Building", "Architecture Review", "Technology Roadmap"]
    },
    {
      title: "AI & LLM Integration",
      description: "Transform your business with cutting-edge AI solutions. From ChatGPT integrations to custom LLM implementations, I help you leverage AI effectively.",
      icon: faBrain,
      points: ["GPT Integration", "Custom AI Solutions", "Workflow Automation", "AI Strategy Consulting"]
    },
    {
      title: "Enterprise Development",
      description: "Full-stack development services for complex enterprise applications. Specialising in TypeScript, React, Next.js, Node.js, and Drupal.",
      icon: faCode,
      points: ["Custom Web Apps", "API Development", "Drupal Solutions", "Performance Optimisation"]
    },
    {
      title: "Solution Architecture",
      description: "End-to-end architecture design for scalable, secure systems. I ensure your technology stack aligns with business goals and industry best practices.",
      icon: faRocket,
      points: ["System Design", "Cloud Architecture", "Security Review", "Scalability Planning"]
    }
  ];

  return (
    <section data-parallax-section className="py-20 px-4 sm:px-6 lg:px-8 relative text-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            Why Work With Me?
          </h2>
          <p className="text-emerald-200/90 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            I bring a unique combination of technical depth, strategic vision, and hands-on experience 
            delivering solutions for enterprise clients. Whether you need a CTO, solution architect, or 
            full-stack developer, I&apos;m ready to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-emerald-400/30 hover:border-emerald-400/60 hover:bg-white/15 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <FontAwesomeIcon icon={service.icon} className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-emerald-100/80 mb-4 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                      <span className="text-sm text-emerald-100 font-semibold">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="relative bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-md p-10 rounded-3xl border-2 border-emerald-400/30 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
          <div className="relative text-center">
            <h3 className="text-3xl font-extrabold text-white mb-3">
              Ready to Transform Your Business?
            </h3>
            <p className="text-emerald-100/90 text-lg mb-6 max-w-2xl mx-auto font-medium">
              With proven experience delivering for PwC, BBC, Pfizer, and other global brands, 
              I bring enterprise-grade expertise to every project. Let&apos;s discuss how I can help you achieve your goals.
            </p>
            <button
              onClick={handleBookMe}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 font-bold"
            >
              <FontAwesomeIcon icon={faCalendar} className="w-5 h-5" />
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

