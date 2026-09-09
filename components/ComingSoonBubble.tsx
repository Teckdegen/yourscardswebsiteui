"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const COMING_SOON_EVENT = "yours:coming-soon";

type BubbleAnchor = {
  left: number;
  top: number;
  width: number;
};

export function showComingSoon(anchor?: HTMLElement | null) {
  const rect = anchor?.getBoundingClientRect();
  const detail: BubbleAnchor | null = rect
    ? {
        left: rect.left + rect.width / 2,
        top: rect.bottom,
        width: rect.width,
      }
    : null;
  window.dispatchEvent(new CustomEvent(COMING_SOON_EVENT, { detail }));
}

export function ComingSoonBubble() {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState<BubbleAnchor | null>(null);
  const [mounted, setMounted] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onShow(event: Event) {
      const detail = (event as CustomEvent<BubbleAnchor | null>).detail ?? null;
      setAnchor(detail);
      setOpen(false);
      window.requestAnimationFrame(() => setOpen(true));
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setOpen(false), 4200);
    }

    window.addEventListener(COMING_SOON_EVENT, onShow);
    return () => {
      window.removeEventListener(COMING_SOON_EVENT, onShow);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const style = anchor
    ? {
        left: anchor.left,
        top: anchor.top + 14,
      }
    : undefined;

  if (!mounted) return null;

  return createPortal(
    <div
      className={`cloud-bubble${open ? " is-on" : ""}`}
      style={style}
      role="status"
      aria-live="polite"
      aria-hidden={!open}
    >
      <div className="cloud-bubble-body">
        <span className="cloud-puff cloud-puff-a" aria-hidden />
        <span className="cloud-puff cloud-puff-b" aria-hidden />
        <span className="cloud-puff cloud-puff-c" aria-hidden />
        <span className="cloud-puff cloud-puff-d" aria-hidden />
        <span className="cloud-bubble-tail" aria-hidden />
        <p className="cloud-bubble-copy">The app is coming soon</p>
      </div>
    </div>,
    document.body,
  );
}
