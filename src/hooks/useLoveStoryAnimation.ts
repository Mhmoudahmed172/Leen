import { useCallback, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export function useLoveStoryAnimation(rootRef: React.RefObject<HTMLElement | null>) {
  const [isComplete, setIsComplete] = useState(false);
  const reducedMotionRef = useRef(false);

  const burstHearts = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const shapes = root.querySelectorAll(".float-shape");
    gsap.killTweensOf(shapes);
    gsap.set(shapes, { opacity: 0, y: 0, x: 0, scale: 0.35, rotate: 0 });
    gsap.to(shapes, {
      opacity: 1,
      scale: 1,
      y: (index, target) => {
        const side = target instanceof HTMLElement && target.offsetLeft > root.clientWidth / 2 ? 1 : -1;
        return -72 - (index % 6) * 14 - Math.abs(side) * 4;
      },
      x: (index) => (index % 2 === 0 ? -18 - index * 2.2 : 20 + index * 1.9),
      rotate: (index) => (index % 2 === 0 ? -22 - index : 18 + index),
      duration: 2.45,
      ease: "power2.out",
      stagger: 0.045,
    });
    gsap.to(shapes, {
      opacity: 0,
      delay: 1.45,
      duration: 1.15,
      ease: "sine.in",
      stagger: 0.035,
    });
  }, [rootRef]);

  const waveBear = useCallback(() => {
    const root = rootRef.current;
    if (!root || !isComplete || reducedMotionRef.current) return;
    const q = gsap.utils.selector(root);
    const tl = gsap.timeline();
    tl.to(q(".arm-right-front .arm-right-pose"), { rotate: -8, duration: 0.22, ease: "sine.out" })
      .to(q(".arm-right-front .arm-right-pose"), { rotate: 5, duration: 0.22, yoyo: true, repeat: 3, ease: "sine.inOut" })
      .to(q(".bouquet-front"), { scale: 1.05, rotate: 2, duration: 0.32, yoyo: true, repeat: 1, ease: "back.out(1.7)" }, "<")
      .call(burstHearts)
      .to(q(".arm-right-front .arm-right-pose"), { rotate: 0, duration: 0.28, ease: "sine.out" });
  }, [burstHearts, isComplete, rootRef]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    setIsComplete(false);
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        reducedMotionRef.current = true;
        gsap.set(q(".night-sky, .pink-aura, .star, .bear-character, .love-word"), { opacity: 1 });
        gsap.set(q(".bear-character"), { x: 0, y: 0, scale: 1 });
        gsap.set(q(".bouquet-back, .arm-left-back, .arm-right-back"), { opacity: 0 });
        gsap.set(q(".bouquet-front, .arm-left-front, .arm-right-front, .ambient-shape"), { opacity: 1 });
        gsap.set(q(".bouquet-front"), { scale: 1 });
        gsap.set(q(".love-word"), { filter: "blur(0px)", y: 0 });
        root.dataset.storyPhase = "message";
        setIsComplete(true);
        return;
      }

      reducedMotionRef.current = false;
      root.dataset.storyPhase = "start";
      gsap.set(q(".night-sky"), { opacity: 0 });
      gsap.set(q(".star, .pink-aura, .love-word, .float-shape, .ambient-shape"), { opacity: 0 });
      gsap.set(q(".love-word"), { y: 16, filter: "blur(8px)" });
      gsap.set(q(".bear-character"), { opacity: 0, x: -54, y: 108, scale: 0.94, transformOrigin: "50% 90%" });
      gsap.set(q(".bear-body"), { y: 0, transformOrigin: "center bottom" });
      gsap.set(q(".bear-ear"), { transformOrigin: "center center" });
      gsap.set(q(".bear-eye"), { scaleY: 1, transformOrigin: "center center" });
      gsap.set(q(".bouquet-front"), { opacity: 0, scale: 0.75, y: 18, transformOrigin: "50% 100%" });
      gsap.set(q(".bouquet-back"), { opacity: 0, scale: 0.75, y: 0, transformOrigin: "50% 100%" });
      gsap.set(q(".arm-left-front, .arm-right-front"), { opacity: 0 });
      gsap.set(q(".arm-left-back, .arm-right-back"), { opacity: 1 });
      gsap.set(q(".arm-left-back .arm-left-pose"), { rotate: 7 });
      gsap.set(q(".arm-right-back .arm-right-pose"), { rotate: -7 });
      gsap.set(q(".arm-left-front .arm-left-pose"), { rotate: -9 });
      gsap.set(q(".arm-right-front .arm-right-pose"), { rotate: 9 });

      const walk = gsap.timeline({ repeat: 5, yoyo: true });
      walk
        .to(q(".bear-body, .bear-head, .bear-arm, .bouquet-back-position"), { y: -6, duration: 0.22, ease: "sine.inOut" }, 0)
        .to(q(".leg-left"), { y: -3, rotate: -4, duration: 0.22, ease: "sine.inOut" }, 0)
        .to(q(".leg-right"), { y: 3, rotate: 4, duration: 0.22, ease: "sine.inOut" }, 0)
        .to(q(".bear-ear"), { rotate: 3, duration: 0.22, ease: "sine.inOut" }, 0);

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => setIsComplete(true),
      });

      tl.to(q(".night-sky"), { opacity: 1, duration: 1 })
        .to(q(".star"), { opacity: 0.85, duration: 1.1, stagger: 0.025 }, "-=.45")
        .to(q(".pink-aura"), { opacity: 0.68, scale: 1.05, duration: 1.2, ease: "sine.out" }, "-=.85")
        .to(q(".bear-character"), { opacity: 1, x: 0, y: 0, scale: 1, duration: 2.15, ease: "power2.out" }, "-=.25")
        .add(walk, "<")
        .call(() => {
          root.dataset.storyPhase = "bear-ready";
        })
        .to(q(".bear-character"), { y: -4, duration: 0.35, ease: "sine.out" })
        .to(q(".bear-character"), { y: 0, duration: 0.35, ease: "sine.in" })
        .to(q(".bear-eye"), { scaleY: 0.08, duration: 0.08, stagger: 0.02, ease: "sine.in" })
        .to(q(".bear-eye"), { scaleY: 1, duration: 0.13, stagger: 0.02, ease: "sine.out" })
        .to(q(".bear-eye"), { scaleY: 0.08, duration: 0.08, stagger: 0.02, ease: "sine.in" }, "+=.45")
        .to(q(".bear-eye"), { scaleY: 1, duration: 0.13, stagger: 0.02, ease: "sine.out" })
        .to(q(".bear-character"), { y: 0, duration: 0.65 })
        .call(() => {
          root.dataset.storyPhase = "presenting";
        })
        .to(q(".arm-left-front, .arm-right-front"), { opacity: 1, duration: 0.18, ease: "sine.out" })
        .to(q(".arm-left-back, .arm-right-back"), { opacity: 0, duration: 0.18, ease: "sine.out" }, "<")
        .to(q(".arm-left-front .arm-left-pose"), { rotate: 0, duration: 0.82, ease: "power2.inOut" }, "<")
        .to(q(".arm-right-front .arm-right-pose"), { rotate: 0, duration: 0.82, ease: "power2.inOut" }, "<")
        .to(q(".bouquet-back"), { opacity: 0, duration: 0.01 }, "<")
        .to(q(".bouquet-front"), { opacity: 1, scale: 1, y: 0, duration: 1.02, ease: "back.out(1.45)" }, "<+.08")
        .call(burstHearts, undefined, ">-.2")
        .call(() => {
          root.dataset.storyPhase = "message";
        }, undefined, "+=.18")
        .to(q(".love-word"), { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" })
        .to(q(".ambient-shape"), { opacity: 0.72, y: -46, x: (index) => (index - 1) * 18, scale: 1, duration: 2.8, repeat: -1, repeatDelay: 1.8, stagger: 1.15, ease: "sine.out" }, "<+.25")
        .to(q(".ambient-shape"), { opacity: 0, duration: 1.1, repeat: -1, repeatDelay: 3.5, stagger: 1.15, ease: "sine.in" }, "<+1.45")
        .to(q(".bear-character"), { y: -5, duration: 1.65, repeat: -1, yoyo: true, ease: "sine.inOut" }, "+=.05")
        .to(q(".bear-eye"), { scaleY: 0.08, duration: 0.08, repeat: -1, repeatDelay: 3.4, yoyo: true, ease: "sine.inOut" }, "<+.5");

      gsap.to(q(".star"), {
        scale: 1.7,
        opacity: 0.36,
        duration: 1.9,
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.08, from: "random" },
        ease: "sine.inOut",
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [burstHearts, rootRef]);

  return { isComplete, waveBear, burstHearts };
}
