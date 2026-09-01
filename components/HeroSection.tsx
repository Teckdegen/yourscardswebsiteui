function makeHeroStars(count: number) {
  const stars = [];
  let seed = 42;
  function rand() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  }
  for (let i = 0; i < count; i += 1) {
    stars.push({
      top: `${3 + rand() * 90}%`,
      left: `${2 + rand() * 96}%`,
      size: rand() > 0.82 ? 2 + rand() : 1 + rand() * 0.8,
      opacity: 0.28 + rand() * 0.62,
      delay: `${rand() * 4}s`,
      duration: `${2.2 + rand() * 3.2}s`,
    });
  }
  return stars;
}

const HERO_STARS = makeHeroStars(72);

function StickerLine({
  text,
  as: Tag,
  className,
}: {
  text: string;
  as: "h1" | "p";
  className: string;
}) {
  return (
    <Tag className={`hero-sticker ${className}`} aria-label={text}>
      <span className="hero-sticker-stroke" aria-hidden>
        {text}
      </span>
      <span className="hero-sticker-fill">{text}</span>
    </Tag>
  );
}

export function HeroSection() {
  return (
    <section className="hero-atmosphere">
      <div className="hero-atmosphere-visual" aria-hidden>
        <img src="/hero-iphone.png" alt="" className="hero-atmosphere-phone" />
        <div className="hero-atmosphere-veil" />
        <div className="hero-atmosphere-grain" />
        <div className="hero-atmosphere-stars">
          {HERO_STARS.map((star, i) => (
            <span
              key={i}
              className="hero-star"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                ["--twinkle-delay" as string]: star.delay,
                ["--twinkle-duration" as string]: star.duration,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-atmosphere-copy">
        <StickerLine
          as="h1"
          className="hero-sticker-main"
          text="Your money stays Yours"
        />
        <StickerLine
          as="p"
          className="hero-sticker-sub"
          text="Earn on every swipe."
        />
      </div>
    </section>
  );
}
