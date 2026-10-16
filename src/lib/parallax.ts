import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initParallax(root: HTMLElement | Document = document) {
  gsap.utils.toArray<HTMLElement>("[data-parallax]", root).forEach((el) => {
    const amount = parseFloat(el.getAttribute("data-parallax") || "24");
    const triggerSelector = el.getAttribute("data-parallax-trigger");
    const trigger =
      (triggerSelector
        ? document.querySelector<HTMLElement>(triggerSelector)
        : null) ?? el.closest("section");

    if (!trigger) return;

    gsap.fromTo(
      el,
      { y: -amount * 0.4 },
      {
        y: amount * 0.6,
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.85,
        },
      }
    );
  });
}
