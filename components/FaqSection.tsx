"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is Yours?",
    a: "Yours is a crypto debit card. Spend at 50M+ merchants with Apple Pay, Google Pay, or the physical Visa card. Cash back on every transaction.",
  },
  {
    q: "How much does the card cost?",
    a: "We charge $10 to create a virtual card. Card top-up fee is 2.5%.",
  },
  {
    q: "Does it work with Apple Pay and Google Pay?",
    a: "Yes. Add Yours to Apple Pay or Google Pay and tap to pay anywhere those wallets are accepted.",
  },
  {
    q: "What is Buy Now Pay Never?",
    a: "Reputation on Yours can unlock credit lines. When you qualify, we cover the spend. No bill.",
  },
  {
    q: "How does the YOURS token work?",
    a: "Every YOURS transfer carries a 3% tax. That tax is airdropped as stock to token holders.",
  },
  {
    q: "Where can I spend?",
    a: "Anywhere Visa debit is accepted. Online, in-store, and abroad. Over 50 million merchants.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="feature-band faq-band">
      <div className="feature-shell feature-shell-narrow">
        <h2 className="feature-heading">Still got questions?</h2>
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? <p className="faq-answer">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
