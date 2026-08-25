"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    id: "pay",
    title: "Pay anywhere in the world.",
    body: "50M+ merchants. Apple Pay & Google Pay.",
    image: "/flow/pay.jpg",
    alt: "Contactless tap to pay at checkout",
  },
  {
    id: "credit",
    title: "Buy Now, Pay Never.",
    body: "Go tap your card. Yours might cover it.",
    image: "/flow/credit.jpg",
    alt: "Phone wallet ready to tap",
  },
  {
    id: "cash",
    title: "Cash back on every swipe.",
    body: "Earn on every spend. Tracked in the app.",
    image: "/flow/cash.jpg",
    alt: "Mobile wallet payment at the counter",
  },
] as const;

export function TapInSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function scrollByCard(dir: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".flow-card");
    const amount = card ? (card as HTMLElement).offsetWidth + 16 : 320;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section
      id="tap-in"
      ref={sectionRef}
      className={`flow-band${active ? " is-in" : ""}`}
    >
      <div className="flow-shell">
        <button
          type="button"
          className="flow-nav flow-nav-prev"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
        >
          ‹
        </button>

        <div ref={trackRef} className="flow-track">
          {SLIDES.map((slide, i) => (
            <article
              key={slide.id}
              className={`flow-card flow-card-${slide.id} flow-rise`}
              style={{ ["--i" as string]: i }}
            >
              <div className="flow-card-top">
                <h2 className="flow-title">{slide.title}</h2>
                <p className="flow-body">{slide.body}</p>
              </div>
              <div className="flow-visual">
                <img
                  className="flow-photo"
                  src={slide.image}
                  alt={slide.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="flow-nav flow-nav-next"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
        >
          ›
        </button>
      </div>
    </section>
  );
}
