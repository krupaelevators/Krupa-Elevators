import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Provides subtle, hardware-accelerated scroll-triggered reveals using IntersectionObserver.
 * Designed to feel smooth, refined, and professional without over-animating ("not too much").
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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if user prefers reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
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
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
