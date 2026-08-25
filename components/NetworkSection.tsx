import { BrandMark, type BrandKey } from "./BrandMarks";

type Merchant = {
  name: string;
  brand: BrandKey;
  tag: string;
  href: string;
  wide?: boolean;
};

const MERCHANTS: Merchant[] = [
  {
    name: "Apple Pay",
    brand: "apple",
    tag: "Wallet",
    href: "https://www.apple.com/apple-pay/",
  },
  {
    name: "Google Pay",
    brand: "google",
    tag: "Wallet",
    href: "https://pay.google.com/",
  },
  {
    name: "Amazon",
    brand: "amazon",
    tag: "Consumer",
    href: "https://www.amazon.com/",
    wide: true,
  },
  {
    name: "Uber",
    brand: "uber",
    tag: "Consumer",
    href: "https://www.uber.com/",
    wide: true,
  },
  {
    name: "Starbucks",
    brand: "starbucks",
    tag: "Consumer",
    href: "https://www.starbucks.com/",
  },
  {
    name: "Netflix",
    brand: "netflix",
    tag: "Consumer",
    href: "https://www.netflix.com/",
  },
  {
    name: "Spotify",
    brand: "spotify",
    tag: "Consumer",
    href: "https://www.spotify.com/",
  },
  {
    name: "Airbnb",
    brand: "airbnb",
    tag: "Consumer",
    href: "https://www.airbnb.com/",
  },
];

function MerchantCell({ merchant }: { merchant: Merchant }) {
  return (
    <a
      href={merchant.href}
      target="_blank"
      rel="noopener noreferrer"
      className="merchant-card"
      aria-label={`${merchant.name}, ${merchant.tag}`}
    >
      <span className="merchant-idle">{merchant.name}</span>
      <span className="merchant-active">
        <BrandMark
          name={merchant.brand}
          className={
            merchant.wide ? "brand-mark brand-mark-wide" : "brand-mark"
          }
        />
      </span>
      <span className="merchant-tag">{merchant.tag}</span>
      <span className="merchant-arrow" aria-hidden>
        ›
      </span>
    </a>
  );
}

export function NetworkSection() {
  return (
    <section id="network" className="feature-band">
      <div className="feature-shell">
        <div className="feature-intro">
          <h2 className="feature-heading">
            Visa debit.
            <br />
            50M+ merchants.
          </h2>
        </div>

        <div className="merchant-grid">
          {MERCHANTS.map((m) => (
            <MerchantCell key={m.name} merchant={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
