"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section data-parallax-section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements with parallax */}
      <div data-parallax-blur className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div data-parallax-blur className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div data-parallax-blur className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-slate-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20 rounded-full mb-8 backdrop-blur-sm">
          <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-500 animate-spin-slow" />
          <span className="text-sm font-semibold text-blue-600">Available for Enterprise Projects</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
            Alex Burrows
          </span>
        </h1>
        
        <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          CTO & Solution Architect
        </p>
        
        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Delivering enterprise solutions with <span className="font-semibold text-blue-600">TypeScript</span>, <span className="font-semibold text-cyan-600">React</span>, <span className="font-semibold text-teal-600">Next.js</span>, and <span className="font-semibold text-emerald-600">Drupal</span>
        </p>
        
        <p className="text-base text-slate-500 mb-12 max-w-2xl mx-auto">
          Based in Hampshire, UK • Founder & CTO at{" "}
          <Link 
            href="https://digidrop.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-cyan-600 font-bold underline decoration-2 underline-offset-2 decoration-blue-400"
          >
            Digidrop Ltd
          </Link>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              const modal = document.querySelector('[data-book-me-modal]');
              if (modal) {
                (modal as HTMLElement).click();
              }
            }}
            className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faRocket} className="w-5 h-5" />
            Book a Consultation
          </button>
          <Link
            href="#contact"
            className="group px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

