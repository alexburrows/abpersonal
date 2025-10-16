"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faStar, faFire } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

export default function Hero() {
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (nameRef.current && titleRef.current) {
      // Animate name entrance
      gsap.from(nameRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
      });

      // Animate title entrance
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
    }
  }, []);

  return (
    <section data-parallax-section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced decorative elements with parallax */}
      <div data-parallax-blur className="absolute top-20 -right-10 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div data-parallax-blur className="absolute bottom-20 -left-10 sm:left-10 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-gradient-to-br from-blue-500/40 to-teal-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div data-parallax-blur className="absolute top-1/3 right-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-2xl"></div>
      
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50"></div>
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/60 rounded-full mb-10 backdrop-blur-md shadow-lg shadow-cyan-500/20">
          <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-300 animate-spin-slow drop-shadow-lg" />
          <span className="text-base font-bold text-cyan-100">Available for Enterprise Projects</span>
          <FontAwesomeIcon icon={faFire} className="w-4 h-4 text-cyan-300" />
        </div>
        
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-white drop-shadow-2xl">
          Hi, I&apos;m{" "}
          <span 
            ref={nameRef}
            className="block mt-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 50px rgba(6,182,212,0.5))'
            }}
          >
            Alex Burrows
          </span>
        </h1>
        
        <p 
          ref={titleRef}
          className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-200 via-blue-200 to-teal-200 bg-clip-text"
        >
          CTO & Solution Architect
        </p>
        
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-xl sm:text-2xl text-slate-100 mb-6 leading-relaxed font-medium">
            Delivering enterprise solutions with{" "}
            <span className="font-bold text-cyan-300 border-b-2 border-cyan-400/50">TypeScript</span>,{" "}
            <span className="font-bold text-blue-300 border-b-2 border-blue-400/50">React</span>,{" "}
            <span className="font-bold text-teal-300 border-b-2 border-teal-400/50">Next.js</span>, and{" "}
            <span className="font-bold text-emerald-300 border-b-2 border-emerald-400/50">Drupal</span>
          </p>
          
          <div className="inline-flex items-center gap-2 text-base text-cyan-200 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/30">
            <FontAwesomeIcon icon={faFire} className="w-4 h-4 text-cyan-300" />
            <span>16+ Years Experience • Author • Open Source Contributor</span>
          </div>
        </div>
        
        <p className="text-base text-slate-300 mb-12">
          Based in Hampshire, UK • Founder & CTO at{" "}
          <Link 
            href="https://digidrop.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-blue-300 font-bold underline decoration-2 underline-offset-2 decoration-cyan-400 hover:decoration-blue-400 transition-colors"
          >
            Digidrop Ltd
          </Link>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            onClick={() => {
              const modal = document.querySelector('[data-book-me-modal]');
              if (modal) {
                (modal as HTMLElement).click();
              }
            }}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/60 hover:scale-110 transition-all duration-300 font-bold w-full sm:w-auto flex items-center justify-center gap-3 text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <FontAwesomeIcon icon={faRocket} className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10">Book Consultation</span>
          </button>
          <Link
            href="#contact"
            className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-cyan-400/60 text-white rounded-2xl hover:bg-white/20 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 font-bold w-full sm:w-auto text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
