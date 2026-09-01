"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#tap-in", label: "How it works" },
  { href: "#faq", label: "FAQ" },
  { href: "#top", label: "Get started" },
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
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="site-pill">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
