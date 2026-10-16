import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import { destroySmoothScroll, initSmoothScroll } from "@/lib/smooth-scroll";

export default function PageAnimations() {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    initSmoothScroll();

    const ctx = gsap.context(() => {
      const ease = "expo.out";

      gsap
        .timeline({ defaults: { ease } })
        .from(".studio-hero__title", { autoAlpha: 0, y: 20, duration: 0.95 })
        .from(
          ".studio-hero__aside",
          { autoAlpha: 0, y: 14, duration: 0.85 },
          "-=0.62"
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal], [data-reveal-x]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 18,
          duration: 0.9,
          ease,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((parent) => {
        gsap.from(parent.children, {
          autoAlpha: 0,
          y: 14,
          duration: 0.8,
          stagger: 0.07,
          ease,
          scrollTrigger: {
            trigger: parent,
            start: "top 86%",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("load", onResize);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("load", onResize);
      window.removeEventListener("resize", onResize);
      ctx.revert();
      destroySmoothScroll();
    };
  }, []);

  return null;
}
