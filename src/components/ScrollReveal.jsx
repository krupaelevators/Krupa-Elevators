import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect warns during the build-time prerender; there is no layout there anyway.
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * ScrollReveal Component
 * Provides subtle, hardware-accelerated scroll-triggered reveals using IntersectionObserver.
 * Designed to feel smooth, refined, and professional without over-animating ("not too much").
 *
 * Content is rendered visible (in the prerendered HTML too), so what is on screen at load
 * paints immediately instead of waiting for JavaScript — that wait was the page's LCP.
 * Only elements that start below the fold are hidden (before paint) and revealed on scroll.
 */
export default function ScrollReveal({
  children,
  className = "",
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'fade'
  delay = 0,
  duration = 550,
  distance = 20,
  threshold = 0.12,
  once = true,
  as: Component = "div",
  style = {},
  ...rest
}) {
  // "static": shown, never animated · "hidden": waiting below the fold · "shown": revealed
  const [phase, setPhase] = useState("static");
  const isVisible = phase !== "hidden";
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen (or above it): leave it alone.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setPhase("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("shown");
          if (once) observer.unobserve(el);
        } else if (!once) {
          setPhase("hidden");
        }
      },
      {
        // Trigger on the first visible pixel: a ratio threshold makes tall elements (common
        // on phones, where cards stack) wait until a large part is on screen, leaving gaps.
        threshold: 0,
        // The detection area extends far above the screen, so anything already scrolled
        // past — e.g. after jumping to a #section — counts as seen and is shown, instead
        // of staying invisible because it never "entered" the viewport.
        rootMargin: "100000px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "fade":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(phase !== "static" && {
          opacity: isVisible ? 1 : 0,
          transform: getTransform(),
          transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          willChange: isVisible ? "auto" : "opacity, transform",
        }),
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
