"use client";

import { useEffect, useRef, useState } from "react";
import { showComingSoon } from "./ComingSoonBubble";
import { YoursCard } from "./YoursCard";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function CardSpinReveal({ progress }: { progress: number }) {
  const t = easeOutCubic(clamp(progress));

  const rotateY = lerp(-95, 0, t);
  const rotateX = lerp(22, 0, t);
  const translateY = lerp(80, 0, t);
  const translateZ = lerp(-320, 0, t);
  const scale = lerp(0.35, 1, t);
  const opacity = lerp(0.25, 1, clamp(progress * 1.35));

  return (
    <div className="card-spin-stage" aria-hidden>
      <div
        className="card-spin-single"
        style={{
          opacity,
          transform: `translate3d(0, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
        }}
      >
        <YoursCard className="mx-auto w-full max-w-[400px] sm:max-w-[440px]" />
      </div>
    </div>
  );
}

export function HeroScrollSection() {
  const trackRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    function update() {
      frame = 0;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(1);
        return;
      }
      setProgress(clamp(-rect.top / total));
    }

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const CARD_END = 0.85;
  const cardProgress = clamp(progress / CARD_END);
  const textFade = clamp(1 - cardProgress * 1.4);
  const textLift = cardProgress * 28;

  return (
    <section ref={trackRef} className="hero-scroll-track">
      <div className="hero-scroll-sticky">
        <div
          className="hero-copy"
          style={{
            opacity: Math.max(0, textFade),
            pointerEvents: textFade < 0.12 ? "none" : "auto",
            transform: `translate3d(0, ${-textLift}px, 0)`,
          }}
        >
          <h1
            className="hero-wrap hero-wrap-top"
            aria-label="Your money stays Yours"
          >
            <span className="hero-wrap-stroke" aria-hidden>
              Your money stays Yours
            </span>
            <span className="hero-wrap-fill">Your money stays Yours</span>
          </h1>

          <p className="hero-title">
            <span className="hero-title-line">Earn on every swipe.</span>
          </p>

          <p className="hero-sub">
            Crypto debit with Apple Pay, Google Pay, and cash back on every
            transaction. Card for $10. Works at 50M+ merchants.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="btn-start"
              onClick={(event) => showComingSoon(event.currentTarget)}
            >
              <span className="btn-start-label">Get started</span>
              <span className="btn-start-arrow" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h11M12 7l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <a href="#tap-in" className="btn-watch">
              How it works
            </a>
          </div>
        </div>

        <div className="hero-card-slot">
          <CardSpinReveal progress={cardProgress} />
        </div>
      </div>
    </section>
  );
}
