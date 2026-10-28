"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative live landscape laid over the hero's logo poster. three.js loads after idle, only with WebGL
 * and without reduced motion; on any failure (or with JS off) this stays an empty layer and the logo shows.
 */
export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current!;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let dispose: (() => void) | undefined;
    let cancelIdle: (() => void) | undefined;
    let run = 0; // bumps on every start/stop so a late import never mounts a stale scene

    const stop = () => {
      run++;
      cancelIdle?.();
      dispose?.();
      dispose = undefined;
      delete host.dataset.ready;
    };
    const start = () => {
      const mine = ++run;
      const load = async () => {
        // Probe first, so devices without WebGL never download three.js or log its context error.
        const probe = document.createElement("canvas");
        const gl = probe.getContext("webgl2") ?? probe.getContext("webgl");
        if (!gl) return;
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        try {
          const { mountLandscape } = await import("./hero-landscape");
          if (mine === run) dispose = mountLandscape(host, () => (host.dataset.ready = ""));
        } catch {
          // The chunk failed to load or the scene threw: the logo stays.
        }
      };
      if ("requestIdleCallback" in window) {
        const id = requestIdleCallback(load, { timeout: 2500 });
        cancelIdle = () => cancelIdleCallback(id);
      } else {
        const id = setTimeout(load, 600);
        cancelIdle = () => clearTimeout(id);
      }
    };
    const sync = () => {
      stop();
      if (!motion.matches) start();
    };

    sync();
    motion.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 opacity-0 transition-opacity duration-[1600ms] ease-out data-ready:opacity-100 [&>canvas]:block [&>canvas]:size-full"
    />
  );
}
