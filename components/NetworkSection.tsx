import type { SimpleIcon } from "simple-icons";
import {
  siAdidas,
  siAirbnb,
  siApple,
  siBmw,
  siDiscord,
  siDoordash,
  siEbay,
  siGoogle,
  siHonda,
  siIkea,
  siInstacart,
  siLyft,
  siMcdonalds,
  siNetflix,
  siNike,
  siPaypal,
  siPlaystation,
  siSamsung,
  siShopify,
  siSpotify,
  siStarbucks,
  siSteam,
  siStripe,
  siTarget,
  siTesla,
  siTiktok,
  siTwitch,
  siUber,
  siUbereats,
  siUniqlo,
  siVenmo,
  siVisa,
  siYoutube,
  siZara,
} from "simple-icons";

const RINGS: {
  radius: string;
  size: number;
  duration: string;
  reverse: boolean;
  offset: number;
  icons: SimpleIcon[];
}[] = [
  {
    radius: "max(13rem, 29vmin)",
    size: 24,
    duration: "48s",
    reverse: false,
    offset: 0,
    icons: [
      siNike,
      siStarbucks,
      siUber,
      siNetflix,
      siSpotify,
      siApple,
      siGoogle,
      siTarget,
    ],
  },
  {
    radius: "max(18.5rem, 41vmin)",
    size: 22,
    duration: "68s",
    reverse: true,
    offset: 12,
    icons: [
      siMcdonalds,
      siAirbnb,
      siDoordash,
      siLyft,
      siTesla,
      siIkea,
      siAdidas,
      siPlaystation,
      siYoutube,
      siTiktok,
      siPaypal,
      siVisa,
    ],
  },
  {
    radius: "max(24rem, 53vmin)",
    size: 20,
    duration: "88s",
    reverse: false,
    offset: 7,
    icons: [
      siEbay,
      siShopify,
      siInstacart,
      siUbereats,
      siSteam,
      siTwitch,
      siUniqlo,
      siZara,
      siStripe,
      siVenmo,
      siBmw,
      siHonda,
      siSamsung,
      siDiscord,
    ],
  },
];

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeStars(count: number) {
  const rand = mulberry32(91);
  return Array.from({ length: count }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    s: 0.45 + rand() * 1.7,
    o: 0.12 + rand() * 0.78,
    d: rand() * 5,
    dur: 2.2 + rand() * 3.6,
  }));
}

const STARS = makeStars(340);

function isLightHex(hex: string) {
  const n = Number.parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 158;
}

function MerchantOrb({
  icon,
  size,
  onWhite,
}: {
  icon: SimpleIcon;
  size: number;
  onWhite: boolean;
}) {
  const light = isLightHex(icon.hex);

  return (
    <span
      className={`merchant-orb${onWhite ? " is-white" : ""}`}
      style={{
        width: size,
        height: size,
        background: onWhite ? "#fff" : `#${icon.hex}`,
        color: onWhite ? `#${icon.hex}` : light ? "#111318" : "#fff",
      }}
      title={icon.title}
    >
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d={icon.path} fill="currentColor" />
      </svg>
    </span>
  );
}

function MerchantRing({
  icons,
  radius,
  size,
  duration,
  reverse,
  offset,
}: {
  icons: SimpleIcon[];
  radius: string;
  size: number;
  duration: string;
  reverse: boolean;
  offset: number;
}) {
  const count = icons.length;

  return (
    <div
      className={`merchant-ring${reverse ? " is-ccw" : " is-cw"}`}
      style={
        {
          ["--radius" as string]: radius,
          ["--dur" as string]: duration,
        }
      }
    >
      {icons.map((icon, i) => (
        <div
          key={icon.slug}
          className="merchant-slot"
          style={{
            ["--a" as string]: `${offset + (360 / count) * i}deg`,
          }}
        >
          <div className="merchant-push">
            <div className="merchant-untilt">
              <div className="merchant-unspin">
                <MerchantOrb icon={icon} size={size} onWhite={i % 3 === 1} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function NetworkSection() {
  return (
    <section
      id="network"
      className="merchant-galaxy"
      aria-label="Visa debit accepted at 50 million plus merchants"
    >
      <div className="merchant-galaxy-stars" aria-hidden>
        {STARS.map((star, i) => (
          <span
            key={i}
            className="merchant-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.s,
              height: star.s,
              opacity: star.o,
              animationDelay: `${star.d}s`,
              animationDuration: `${star.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="merchant-galaxy-field" aria-hidden>
        {RINGS.map((ring) => (
          <MerchantRing key={ring.radius} {...ring} />
        ))}
      </div>

      <div className="merchant-galaxy-core">
        <h2 className="merchant-galaxy-stat">50M+</h2>
        <p className="merchant-galaxy-sub">
          <span className="merchant-galaxy-gems" aria-hidden>
            <i />
            <i />
            <i />
            <i />
          </span>
          Visa debit. Spend at merchants worldwide.
        </p>
      </div>
    </section>
  );
}
