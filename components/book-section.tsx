import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

export default function BookSection() {
  return (
    <section data-parallax-section className="py-20 px-4 sm:px-6 lg:px-8 relative text-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Book Cover/Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-2 border-blue-400/40">
              <div className="flex items-center justify-center mb-6">
                <div className="p-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl">
                  <FontAwesomeIcon icon={faBook} className="w-32 h-32 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-extrabold mb-2 text-white">
                  Drupal 8 Blueprints
                </h3>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-200 font-medium">
                  Author • Technical Guide
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border-2 border-blue-400/40 rounded-full mb-4">
              <FontAwesomeIcon icon={faBook} className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-bold text-blue-200">Published Author</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
              Drupal 8 Blueprints
            </h2>
            <p className="text-xl text-blue-200 mb-6 font-semibold">
              A comprehensive guide to building modern web applications with Drupal 8
            </p>
            <p className="text-blue-100/80 mb-6 leading-relaxed">
              This book provides in-depth technical guidance on architecting and developing enterprise-grade 
              Drupal 8 applications. Covering everything from module development to site building best practices, 
              it&apos;s a go-to resource for developers looking to master Drupal 8.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-blue-100 font-medium">Enterprise-level Drupal development patterns</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-blue-100 font-medium">Module development and API integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-blue-100 font-medium">Performance optimisation strategies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-blue-100 font-medium">Real-world implementation examples</span>
              </div>
            </div>
            <Link
              href="https://www.amazon.co.uk/Drupal-Blueprints-along-creation-professional-grade-ebook/dp/B01AANEHPU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
            >
              <FontAwesomeIcon icon={faAmazon} className="w-6 h-6" />
              View on Amazon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

