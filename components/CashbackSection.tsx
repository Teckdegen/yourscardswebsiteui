"use client";

import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.18) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: [0.18, 0.3], rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
}

export function CashbackSection() {
  const { ref, active } = useInView();

  return (
    <section
      id="cashback"
      ref={ref}
      className={`soar-bento${active ? " is-in" : ""}`}
    >
      <div className="soar-bento-shell">
        <div className="soar-bento-grid">
          {/* 1 white — cashback copy */}
          <article
            className="soar-cell soar-cell-white soar-pop soar-pop-from-left"
            style={{ ["--i" as string]: 0 }}
          >
            <img
              className="soar-logo soar-logo-1"
              src="/logos/uber.svg"
              alt=""
              aria-hidden
            />
            <img
              className="soar-logo soar-logo-2"
              src="/logos/amazon-raw.svg"
              alt=""
              aria-hidden
            />
            <img
              className="soar-logo soar-logo-3"
              src="/logos/starbucks.svg"
              alt=""
              aria-hidden
            />
            <div className="soar-cell-foot">
              <h2 className="soar-cell-title">Cash back on every swipe.</h2>
              <p className="soar-cell-text">
                In store, online, or tap to pay. Every Yours spend earns. No
                hoops, no seasonal rates.
              </p>
            </div>
          </article>

          {/* 2 sky — cashback UI */}
          <div
            className="soar-cell soar-cell-sky soar-pop soar-pop-from-right"
            style={{ ["--i" as string]: 1 }}
            aria-hidden
          >
            <div className="soar-pill">
              <span className="soar-pill-check">✓</span>
              <span className="soar-pill-main">Cash back</span>
              <span className="soar-pill-tag">Uber</span>
              <span className="soar-pill-meta">+$1.24</span>
            </div>
          </div>

          {/* 3 sky — credit UI */}
          <div
            className="soar-cell soar-cell-sky soar-pop soar-pop-from-left"
            style={{ ["--i" as string]: 2 }}
            aria-hidden
          >
            <div className="soar-card">
              <div className="soar-card-top">
                <span className="soar-avatar" />
                <div>
                  <p className="soar-card-name">
                    Your line <span className="soar-verified">✓</span>
                  </p>
                  <p className="soar-card-sub">Reputation strong</p>
                </div>
                <span className="soar-money">$250</span>
              </div>
              <div className="soar-bar">
                <div className="soar-bar-fill" />
              </div>
              <p className="soar-card-body">
                Coverage unlocked. Next purchase may be covered.
              </p>
              <div className="soar-card-foot">
                <span>Buy Now Pay Never</span>
                <span className="soar-link">View →</span>
              </div>
            </div>
          </div>

          {/* 4 white — credit copy */}
          <article
            id="credit"
            className="soar-cell soar-cell-white soar-pop soar-pop-from-right"
            style={{ ["--i" as string]: 3 }}
          >
            <img
              className="soar-logo soar-logo-4"
              src="/logo.PNG"
              alt=""
              aria-hidden
            />
            <div className="soar-cell-foot">
              <h2 className="soar-cell-title">Buy Now. Pay Never.</h2>
              <p className="soar-cell-text">
                Reputation unlocks coverage. Strong members qualify for credit
                lines we pay. Spend without the bill when you earn it.
              </p>
            </div>
          </article>

          {/* 5 white — token copy */}
          <article
            id="token"
            className="soar-cell soar-cell-white soar-pop soar-pop-from-bottom"
            style={{ ["--i" as string]: 4 }}
          >
            <img
              className="soar-logo soar-logo-5"
              src="/logos/spotify.svg"
              alt=""
              aria-hidden
            />
            <img
              className="soar-logo soar-logo-6"
              src="/logos/netflix.svg"
              alt=""
              aria-hidden
            />
            <div className="soar-cell-foot">
              <h2 className="soar-cell-title">Own the network you spend on.</h2>
              <p className="soar-cell-text">
                Every YOURS transfer carries a 3% tax. That tax is airdropped as
                stock to holders.
              </p>
            </div>
          </article>

          {/* 6 sky — token UI */}
          <div
            className="soar-cell soar-cell-sky soar-pop soar-pop-from-top"
            style={{ ["--i" as string]: 5 }}
            aria-hidden
          >
            <div className="soar-profile">
              <p className="soar-profile-status">3% transfer tax live…</p>
              <div className="soar-profile-row">
                <span className="soar-avatar soar-avatar-lg" />
                <div>
                  <p className="soar-card-name">
                    YOURS <span className="soar-verified">✓</span>
                  </p>
                  <p className="soar-card-sub">Holders · airdrop</p>
                </div>
              </div>
              <div className="soar-tags">
                <span className="soar-tag soar-tag-green">Stock</span>
                <span className="soar-tag">100 YOURS</span>
                <span className="soar-tag">3% tax</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
