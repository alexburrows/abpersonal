"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const progressFill = progressRef.current;
    if (!wrapper) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      gsap.set("[data-parallax-reveal], [data-parallax-item]", {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      /* Fixed depth layers — move at different speeds */
      wrapper.querySelectorAll("[data-parallax-layer]").forEach((layer) => {
        const speed = Number(
          (layer as HTMLElement).dataset.speed ?? "0.2"
        );
        gsap.to(layer, {
          y: () => window.innerHeight * speed * 2,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      });

      /* Scroll progress indicator */
      if (progressFill) {
        gsap.to(progressFill, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        });
      }

      /* Hero entrance */
      const hero = wrapper.querySelector("[data-parallax-hero]");
      if (hero) {
        const headline = hero.querySelector("[data-parallax-hero-headline]");
        const aside = hero.querySelector("[data-parallax-hero-aside]");
        const line = hero.querySelector("[data-parallax-line]");
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (line) {
          tl.from(line, { scaleX: 0, duration: 0.8, ease: "power2.inOut" });
        }
        if (headline) {
          tl.from(headline, { opacity: 0, y: 40, duration: 0.9 }, "-=0.4");
        }
        if (aside) {
          tl.from(aside, { opacity: 0, x: 24, duration: 0.8 }, "-=0.5");
        }
      }

      /* Section ambient backgrounds */
      wrapper.querySelectorAll("[data-parallax-section]").forEach((section) => {
        const bg = section.querySelector("[data-parallax-bg]");
        if (bg) {
          gsap.fromTo(
            bg,
            { y: "-8%" },
            {
              y: "18%",
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }

        /* Sticky label column — stays pinned via CSS on lg screens */
        const sticky = section.querySelector("[data-parallax-sticky]");
        if (sticky) {
          gsap.fromTo(
            sticky,
            { opacity: 0.6 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "top 20%",
                scrub: 1,
              },
            }
          );
        }
      });

      /* Section content reveal */
      wrapper.querySelectorAll("[data-parallax-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 56, immediateRender: false },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* Staggered list / row items */
      wrapper.querySelectorAll("[data-parallax-stagger]").forEach((group) => {
        const items = group.querySelectorAll("[data-parallax-item]");
        if (!items.length) return;

        gsap.fromTo(
          items,
          { opacity: 0, y: 32, immediateRender: false },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* Accent lines that draw in on scroll (skip hero — animated on load) */
      wrapper.querySelectorAll("[data-parallax-line]").forEach((line) => {
        if (line.closest("[data-parallax-hero]")) return;

        gsap.fromTo(
          line,
          { scaleX: 0, immediateRender: false },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.inOut",
            immediateRender: false,
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div ref={progressRef} className="scroll-progress__fill" />
      </div>
      <div ref={wrapperRef} className="relative">
        {/* Fixed atmospheric layers */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div
            data-parallax-layer
            data-speed="0.12"
            className="parallax-layer parallax-layer-a"
          />
          <div
            data-parallax-layer
            data-speed="0.22"
            className="parallax-layer parallax-layer-b"
          />
          <div
            data-parallax-layer
            data-speed="0.08"
            className="parallax-layer parallax-layer-c"
          />
        </div>
        {children}
      </div>
    </>
  );
}
