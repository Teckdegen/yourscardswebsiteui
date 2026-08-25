import type { ReactNode } from "react";

/** Custom Yours marks — not icon-pack glyphs */

type IconProps = { className?: string };

function frame(children: ReactNode, className = "") {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      {children}
    </svg>
  );
}

export function IconCard({ className }: IconProps) {
  return frame(
    <>
      <rect
        x="4"
        y="8"
        width="24"
        height="16"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="7"
        y="12"
        width="5"
        height="3.5"
        rx="0.8"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M8 20.5h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 20.5h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>,
    className,
  );
}

export function IconNfc({ className }: IconProps) {
  return frame(
    <>
      <path
        d="M11 10.5c3.2 3.2 3.2 7.8 0 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.5 8c4.6 4.6 4.6 12.4 0 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M18 5.5c6 6 6 15 0 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="8.5" cy="16" r="1.6" fill="currentColor" />
    </>,
    className,
  );
}

export function IconCashback({ className }: IconProps) {
  return frame(
    <>
      <circle cx="16" cy="16" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16 10.5v11M13 13.2c.6-.9 1.5-1.3 2.7-1.3 1.7 0 2.8.9 2.8 2.2 0 1.4-1 2.1-2.8 2.6-1.7.5-2.6 1.1-2.6 2.4 0 1.2 1 2.1 2.7 2.1 1.3 0 2.3-.5 2.9-1.4"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>,
    className,
  );
}

export function IconSpark({ className }: IconProps) {
  return frame(
    <>
      <path
        d="M16 5.5 17.8 13 25 14.5 17.8 16.2 16 23.5 14.2 16.2 7 14.5 14.2 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="23.5" cy="8" r="1.2" fill="currentColor" />
      <circle cx="9" cy="22" r="1" fill="currentColor" opacity="0.7" />
    </>,
    className,
  );
}

export function IconGlobe({ className }: IconProps) {
  return frame(
    <>
      <circle cx="16" cy="16" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <ellipse
        cx="16"
        cy="16"
        rx="4.2"
        ry="9.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M6.5 16h19M7.5 11.5h17M7.5 20.5h17"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </>,
    className,
  );
}

export function IconGrid({ className }: IconProps) {
  return frame(
    <>
      <rect
        x="6"
        y="6"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="18"
        y="6"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="6"
        y="18"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="18"
        y="18"
        width="8"
        height="8"
        rx="1.5"
        fill="currentColor"
        opacity="0.85"
      />
    </>,
    className,
  );
}

export function IconPhone({ className }: IconProps) {
  return frame(
    <>
      <rect
        x="10"
        y="5"
        width="12"
        height="22"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M14 8h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="23" r="1.1" fill="currentColor" />
    </>,
    className,
  );
}

export function IconCart({ className }: IconProps) {
  return frame(
    <>
      <path
        d="M6 8h2.2l1.4 11h12.2l2-8.5H10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="24" r="1.4" fill="currentColor" />
      <circle cx="21" cy="24" r="1.4" fill="currentColor" />
    </>,
    className,
  );
}

export function IconChart({ className }: IconProps) {
  return frame(
    <>
      <path
        d="M6 24V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 24h20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 18v6M15 13v11M20 9v15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </>,
    className,
  );
}

export function IconBadge({ className }: IconProps) {
  return frame(
    <>
      <path
        d="M16 5.5 19.2 8l3.8.4-2.6 3.1.8 3.8L16 13.8l-4.2 1.5.8-3.8-2.6-3.1 3.8-.4L16 5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 17.5 11 26l5-2.5L21 26l-1.5-8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </>,
    className,
  );
}

export function IconShield({ className }: IconProps) {
  return frame(
    <>
      <path
        d="M16 5.5c3.5 1.5 6.5 2 9 2.2v7.3c0 5.2-3.6 8.8-9 11.5-5.4-2.7-9-6.3-9-11.5V7.7c2.5-.2 5.5-.7 9-2.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 15.5 15 18l5-5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>,
    className,
  );
}

export function IconGift({ className }: IconProps) {
  return frame(
    <>
      <rect
        x="6"
        y="13"
        width="20"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 13h22v-3.5H5V13Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16 9.5V25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16 9.5c-2.2-3-4.8-3.2-5.8-1.6-1 1.5.2 3.2 2.8 3.6M16 9.5c2.2-3 4.8-3.2 5.8-1.6 1 1.5-.2 3.2-2.8 3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>,
    className,
  );
}

export function IconLock({ className }: IconProps) {
  return frame(
    <>
      <rect
        x="8"
        y="14"
        width="16"
        height="11"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M11.5 14V11a4.5 4.5 0 0 1 9 0v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="19.5" r="1.4" fill="currentColor" />
    </>,
    className,
  );
}

export function IconPercent({ className }: IconProps) {
  return frame(
    <>
      <circle cx="11" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="21" cy="21" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 23 23 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </>,
    className,
  );
}

export function IconAirdrop({ className }: IconProps) {
  return frame(
    <>
      <path
        d="M16 6v8M12.5 9.5 16 6l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16c0 4 3.1 7 7 7s7-3 7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M11.5 19h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </>,
    className,
  );
}

export function IconHold({ className }: IconProps) {
  return frame(
    <>
      <path
        d="M16 7v9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      <circle cx="16" cy="16" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16 6.5V4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>,
    className,
  );
}

export function IconNodes({ className }: IconProps) {
  return frame(
    <>
      <circle cx="8" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="22" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 11.2 14.2 20M22 11.2 17.8 20M10.3 10h11.4"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </>,
    className,
  );
}
