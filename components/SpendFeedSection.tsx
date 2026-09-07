"use client";

import { useEffect, useRef, useState } from "react";

type SpendEvent = {
  name: string;
  paid: string;
  logo: string;
  brand: "x" | "netflix" | "spotify" | "uber";
};

/** Real US web prices — debits (money out) */
const EVENTS: SpendEvent[] = [
  {
    name: "X",
    paid: "-$8.00",
    logo: "/logos/x.svg",
    brand: "x",
  },
  {
    name: "Netflix",
    paid: "-$15.49",
    logo: "/logos/netflix.svg",
    brand: "netflix",
  },
  {
    name: "Spotify",
    paid: "-$12.99",
    logo: "/logos/spotify.svg",
    brand: "spotify",
  },
  {
    name: "Uber",
    paid: "-$18.40",
    logo: "/logos/uber.svg",
    brand: "uber",
  },
];

function NetflixMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="spend-netflix-n">
      <path
        fill="#E50914"
        d="M5 2h5.1l5.4 15.2V2H21v20h-5.1L10.5 6.8V22H5V2z"
      />
    </svg>
  );
}

export function SpendFeedSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const target = node.querySelector(".spend-feed-inner");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fire only when the content is meaningfully in view (not during hero overlap)
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: [0.45, 0.6, 0.75],
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="spend" ref={ref} className="spend-feed">
      <div className="spend-panel">
        <div className="spend-feed-bg" aria-hidden>
          <img src="/spend-sky.jpg" alt="" />
          <div className="spend-feed-bg-fade" />
        </div>

        <div className={`spend-feed-inner${active ? " is-in" : ""}`}>
          <h2
            className="spend-feed-title spend-slide"
            style={{ ["--i" as string]: 0 }}
          >
            Spend where you
            <br />
            already pay.
          </h2>

          <div className="spend-stack">
            <div
              className="spend-slide spend-ask"
              style={{ ["--i" as string]: 1 }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="spend-ask-icon">
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M16.2 16.2 20 20"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <span>Yours, where did you spend?</span>
            </div>

            {EVENTS.map((event, i) => (
              <article
                key={event.name}
                className={`spend-slide spend-card spend-card-${event.brand}`}
                style={{ ["--i" as string]: i + 2 }}
              >
                <div className="spend-card-left">
                  <span className={`spend-logo spend-logo-${event.brand}`}>
                    {event.brand === "netflix" ? (
                      <NetflixMark />
                    ) : (
                      <img src={event.logo} alt="" width={16} height={16} />
                    )}
                  </span>
                  <p className="spend-card-name">{event.name}</p>
                </div>
                <div className="spend-card-right">
                  <span className="spend-card-label">Paid</span>
                  <span className="spend-card-paid">{event.paid}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
