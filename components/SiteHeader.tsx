"use client";

import { useEffect, useState } from "react";
import { ComingSoonBubble, showComingSoon } from "./ComingSoonBubble";

const NAV_LINKS = [
  { href: "#tap-in", label: "How it works" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hero = document.querySelector(".hero-atmosphere");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header${visible ? "" : " is-gone"}`}>
      <nav className="site-header-pills" aria-label="Primary">
        <a href="#top" className="site-header-logo" aria-label="Yours">
          <img src="/yours-logo.png" alt="" width={32} height={32} />
        </a>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="site-pill">
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className="site-pill"
          onClick={(event) => showComingSoon(event.currentTarget)}
        >
          Get started
        </button>
      </nav>
      <ComingSoonBubble />
    </header>
  );
}
