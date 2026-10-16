import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { prefersReducedMotion } from "@/lib/motion";

let lenis: Lenis | null = null;

/** Ease-out expo: quick start, long soft settle. */
export function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function getLenis() {
  return lenis;
}

export function initSmoothScroll() {
  if (prefersReducedMotion() || lenis) {
    return lenis;
  }

  gsap.registerPlugin(ScrollTrigger);

  lenis = new Lenis({
    duration: 1.15,
    easing: easeOutExpo,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function destroySmoothScroll() {
  lenis?.destroy();
  lenis = null;
}

export function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const offset = -84;

  if (prefersReducedMotion() || !lenis) {
    const y = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "auto" });
    return;
  }

  lenis.scrollTo(target, {
    offset,
    duration: 1.05,
    easing: easeOutExpo,
  });
}
