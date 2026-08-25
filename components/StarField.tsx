const STARS = [
  { top: "8%", left: "12%", size: 2, delay: "0s", duration: "3.2s" },
  { top: "14%", left: "78%", size: 1.5, delay: "0.4s", duration: "2.8s" },
  { top: "22%", left: "45%", size: 2, delay: "1.1s", duration: "4s" },
  { top: "28%", left: "88%", size: 1, delay: "0.2s", duration: "3.5s" },
  { top: "35%", left: "18%", size: 1.5, delay: "1.8s", duration: "2.6s" },
  { top: "42%", left: "62%", size: 2, delay: "0.7s", duration: "3.8s" },
  { top: "48%", left: "8%", size: 1, delay: "2.1s", duration: "2.9s" },
  { top: "55%", left: "92%", size: 1.5, delay: "0.9s", duration: "3.1s" },
  { top: "62%", left: "34%", size: 1, delay: "1.4s", duration: "4.2s" },
  { top: "70%", left: "72%", size: 2, delay: "0.3s", duration: "2.7s" },
  { top: "76%", left: "22%", size: 1.5, delay: "1.6s", duration: "3.4s" },
  { top: "82%", left: "55%", size: 1, delay: "2.4s", duration: "3s" },
  { top: "18%", left: "30%", size: 1, delay: "0.5s", duration: "3.6s" },
  { top: "88%", left: "40%", size: 1.5, delay: "1.2s", duration: "2.5s" },
  { top: "10%", left: "58%", size: 1, delay: "1.9s", duration: "3.3s" },
  { top: "66%", left: "48%", size: 1, delay: "0.6s", duration: "4.1s" },
];

export function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {STARS.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            ["--twinkle-delay" as string]: star.delay,
            ["--twinkle-duration" as string]: star.duration,
          }}
        />
      ))}
    </div>
  );
}
