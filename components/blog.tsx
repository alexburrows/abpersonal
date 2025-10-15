import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faNewspaper, 
  faCalendar, 
  faClock,
  faArrowRight,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

export default function Blog() {
  // Add your Medium articles here
  // You can manually curate your best posts or use Medium's RSS feed
  const articles = [
    {
      title: "Building Modern Web Applications with Next.js",
      excerpt: "Exploring the latest features and best practices for building performant web applications with Next.js and React.",
      date: "2024-03-15",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Web Development"],
      url: "https://medium.com/@aburrows" // Update with actual article URL
    },
    {
      title: "Drupal Development Best Practices",
      excerpt: "A comprehensive guide to modern Drupal development, covering modules, theming, and performance optimization.",
      date: "2024-02-20",
      readTime: "8 min read",
      tags: ["Drupal", "PHP", "CMS"],
      url: "https://medium.com/@aburrows" // Update with actual article URL
    },
    {
      title: "TypeScript Tips for Better Code Quality",
      excerpt: "Learn how to leverage TypeScript's type system to write more maintainable and error-free code.",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      url: "https://medium.com/@aburrows" // Update with actual article URL
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-[--foreground]/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Latest Articles
        </h2>
        <p className="text-center text-[--foreground]/60 mb-12 max-w-2xl mx-auto">
          Thoughts and insights on web development, Drupal, and modern JavaScript
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-cyan-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-0 group-hover:opacity-100 rounded-full blur-2xl transition-all duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-center gap-3 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 text-blue-500" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5 font-semibold">
                    <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-emerald-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-3">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                    <FontAwesomeIcon icon={faNewspaper} className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent line-clamp-2">
                    {article.title}
                  </h3>
                </div>

                <p className="text-slate-700 mb-4 line-clamp-3 leading-relaxed font-medium">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-cyan-100 text-cyan-700 rounded-full font-semibold"
                    >
                      <FontAwesomeIcon icon={faTag} className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-cyan-600 font-bold group-hover:gap-3 transition-all">
                  Read more
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="https://medium.com/@aburrows"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
          >
            <FontAwesomeIcon icon={faMedium} className="w-6 h-6" />
            View All Articles on Medium
          </Link>
        </div>
      </div>
    </section>
  );
}

