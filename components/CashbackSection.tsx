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
      id="coverage"
      ref={ref}
      className={`soar-bento${active ? " is-in" : ""}`}
    >
      <div className="soar-bento-shell">
        <div className="soar-bento-grid">
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
              <h2 className="soar-cell-title">Your spend builds Yours Score.</h2>
              <p className="soar-cell-text">
                Card spend, onchain history, trading, fees paid, and social
                standing become rank. Rank is not cash. It decides how much can
                be covered and which bills qualify.
              </p>
            </div>
          </article>

          <div
            className="soar-cell soar-cell-sky soar-pop soar-pop-from-right"
            style={{ ["--i" as string]: 1 }}
            aria-hidden
          >
            <div className="soar-pill">
              <span className="soar-pill-check">✓</span>
              <span className="soar-pill-main">Covered by Yours</span>
              <span className="soar-pill-tag">Score</span>
              <span className="soar-pill-meta">+$48</span>
            </div>
          </div>

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
                    Yours Score <span className="soar-verified">✓</span>
                  </p>
                  <p className="soar-card-sub">Rank unlocked coverage</p>
                </div>
                <span className="soar-money">720</span>
              </div>
              <div className="soar-bar">
                <div className="soar-bar-fill" />
              </div>
              <p className="soar-card-body">
                After checkout clears, YOURS can cover the purchase and send it
                back to your wallet.
              </p>
              <div className="soar-card-foot">
                <span>Buy Now. Pay Never.</span>
                <span className="soar-link">View →</span>
              </div>
            </div>
          </div>

          <article
            id="credit"
            className="soar-cell soar-cell-white soar-pop soar-pop-from-right"
            style={{ ["--i" as string]: 3 }}
          >
            <img
              className="soar-logo soar-logo-4"
              src="/yours-logo.png"
              alt=""
              aria-hidden
            />
            <div className="soar-cell-foot">
              <h2 className="soar-cell-title">Buy Now. Pay Never.</h2>
              <p className="soar-cell-text">
                Your payment today can fund tomorrow’s bills. Checkout stays
                normal. If you qualify, YOURS covers it. No loan. No repayment.
              </p>
            </div>
          </article>

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
              <h2 className="soar-cell-title">The reserve funds the cover.</h2>
              <p className="soar-cell-text">
                A 3% tax on token trading goes into the bill coverage reserve.
                Card and network fees sit beside it. Your Score decides who can
                use it.
              </p>
            </div>
          </article>

          <div
            className="soar-cell soar-cell-sky soar-pop soar-pop-from-top"
            style={{ ["--i" as string]: 5 }}
            aria-hidden
          >
            <div className="soar-profile">
              <p className="soar-profile-status">3% tax → coverage reserve…</p>
              <div className="soar-profile-row">
                <span className="soar-avatar soar-avatar-lg" />
                <div>
                  <p className="soar-card-name">
                    YOURS <span className="soar-verified">✓</span>
                  </p>
                  <p className="soar-card-sub">Reserve · coverage</p>
                </div>
              </div>
              <div className="soar-tags">
                <span className="soar-tag soar-tag-green">Covered</span>
                <span className="soar-tag">Yours Score</span>
                <span className="soar-tag">3% tax</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
