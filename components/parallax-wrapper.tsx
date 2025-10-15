"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Parallax effect for all decorative blur elements
    const blurs = wrapperRef.current.querySelectorAll('[data-parallax-blur]');
    blurs.forEach((blur, index) => {
      gsap.to(blur, {
        y: index % 2 === 0 ? -100 : 100,
        x: index % 2 === 0 ? 50 : -50,
        scrollTrigger: {
          trigger: blur,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      });
    });

    // Parallax effect for section backgrounds
    const sections = wrapperRef.current.querySelectorAll('[data-parallax-section]');
    sections.forEach((section) => {
      const bg = section.querySelector('[data-parallax-bg]');
      if (bg) {
        gsap.to(bg, {
          y: -80,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}

