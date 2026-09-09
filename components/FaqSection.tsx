"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is Yours?",
    a: "YOURS is a Visa debit card with a different end state. You spend today. That spend, plus the activity you already have onchain, becomes the reputation that can cover a bill tomorrow.",
  },
  {
    q: "What is Buy Now. Pay Never?",
    a: "You use the YOURS Visa debit card like any other debit card. The merchant gets paid normally. After the payment clears, YOURS can cover the purchase if you qualify and send the money back to your wallet. Covered by Yours. No loan. No repayment. No credit balance waiting for you.",
  },
  {
    q: "What is Yours Score?",
    a: "Your Yours Score is your reputation with YOURS. Card spend, previous onchain transactions, trading activity, fees you already paid onchain, and social standing all sit in the same model. It is not money and it is not points you redeem. Rank changes two things at once: how much can be covered, and which expenses qualify.",
  },
  {
    q: "Where does coverage money come from?",
    a: "A 3% tax on token trading goes into the bill coverage reserve. Other fees sit beside it: card activity, network fees, and the rest of the economic surface YOURS touches. The reserve funds coverage. Your Score decides who can use it.",
  },
  {
    q: "Is this cashback or credit?",
    a: "Neither. Cashback rewards a transaction. Credit finances a transaction and then collects. YOURS turns the activity you already create, onchain and on the Visa debit card, into access to future coverage. Spending today, trading today, and fees paid today are what make tomorrow’s bills coverable.",
  },
  {
    q: "Does it work with Apple Pay and Google Pay?",
    a: "Yes. Add YOURS to Apple Pay or Google Pay and tap to pay anywhere those wallets are accepted. Checkout does not change. The merchant is paid normally.",
  },
  {
    q: "How much does the card cost?",
    a: "We charge $10 to create a virtual card. Card top-up fee is 2.5%.",
  },
  {
    q: "Where can I spend?",
    a: "Anywhere Visa debit is accepted. Online, in store, and abroad. Over 50 million merchants.",
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
