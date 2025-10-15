"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DynamicGradientBg() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    // Define color stops for each major section
    const gradients = [
      { 
        position: 0,
        gradient: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 50%, #f1f5f9 100%)" // Hero - blue/cyan
      },
      { 
        position: 0.15,
        gradient: "linear-gradient(135deg, #e0f2fe 0%, #ccfbf1 50%, #d1fae5 100%)" // Expertise - cyan/teal
      },
      { 
        position: 0.25,
        gradient: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 50%, #bfdbfe 100%)" // Clients - blues
      },
      { 
        position: 0.35,
        gradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)" // AI - dark
      },
      { 
        position: 0.45,
        gradient: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #6ee7b7 100%)" // Hire Me - emerald
      },
      { 
        position: 0.55,
        gradient: "linear-gradient(135deg, #0c4a6e 0%, #1e3a8a 50%, #1e293b 100%)" // Drupal - cosmic blue
      },
      { 
        position: 0.65,
        gradient: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)" // Book - blues
      },
      { 
        position: 0.75,
        gradient: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)" // Tech - light blue
      },
      { 
        position: 0.9,
        gradient: "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 50%, #f1f5f9 100%)" // Contact - blue/slate
      }
    ];

    // Create smooth color transitions
    gradients.forEach((grad, index) => {
      if (index === 0) {
        // Set initial gradient
        gsap.set(bgRef.current, { 
          background: grad.gradient 
        });
      }
      
      if (index < gradients.length - 1) {
        gsap.to(bgRef.current, {
          background: gradients[index + 1].gradient,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: document.body,
            start: `${grad.position * 100}% top`,
            end: `${gradients[index + 1].position * 100}% top`,
            scrub: 3, // Even smoother scrubbing (higher = smoother)
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-50"
      style={{ 
        background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 50%, #f1f5f9 100%)',
        willChange: 'background'
      }}
    />
  );
}

