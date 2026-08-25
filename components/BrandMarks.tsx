type MarkProps = {
  className?: string;
};

export function AppleMark({ className = "" }: MarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      fill="currentColor"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function GoogleGMark({ className = "" }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      />
    </svg>
  );
}

/** Amazon wordmark + smile (brand orange) */
export function AmazonMark({ className = "" }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 80 28" aria-hidden>
      <text
        x="4"
        y="16"
        fill="#131921"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="-0.6"
      >
        amazon
      </text>
      <path
        fill="none"
        stroke="#FF9900"
        strokeWidth="2.2"
        strokeLinecap="round"
        d="M18 20c8 5 22 5 32-1"
      />
      <path fill="#FF9900" d="M48.5 16.5 52 20.2l-4.2.8z" />
    </svg>
  );
}

export function UberMark({ className = "" }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 72 28" aria-hidden>
      <rect x="0" y="2" width="24" height="24" rx="5" fill="#000" />
      <path
        fill="#fff"
        d="M7 8.2h10v2.2h-3.4v9.4H11V10.4H7V8.2z"
      />
      <text
        x="30"
        y="19"
        fill="#000"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="-0.4"
      >
        Uber
      </text>
    </svg>
  );
}

export function StarbucksMark({ className = "" }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" aria-hidden>
      <circle cx="14" cy="14" r="14" fill="#00704A" />
      <circle
        cx="14"
        cy="14"
        r="10.8"
        fill="none"
        stroke="#fff"
        strokeWidth="0.85"
      />
      <path
        fill="#fff"
        d="M14 6.2c1.1 0 1.95.35 2.55.95.5.5.75 1.1.75 1.8 0 .85-.35 1.55-.95 2 .75.35 1.2 1.05 1.2 1.9 0 .95-.55 1.7-1.45 2 .6.6.95 1.4.95 2.35 0 1.9-1.3 3.2-3.05 3.2S10 19.2 10 17.3c0-.95.35-1.75.95-2.35-.9-.3-1.45-1.05-1.45-2 0-.85.45-1.55 1.2-1.9-.6-.45-.95-1.15-.95-2 0-.7.25-1.3.75-1.8.6-.6 1.45-.95 2.55-.95zm0 1.65c-.85 0-1.45.55-1.45 1.3S13.15 11.1 14 11.1s1.45-.55 1.45-1.3-.6-1.3-1.45-1.3zm0 4.85c-.85 0-1.45.55-1.45 1.35S13.15 15.4 14 15.4s1.45-.55 1.45-1.35S14.85 12.7 14 12.7zm0 5.2c-.7 0-1.2.55-1.2 1.3s.5 1.3 1.2 1.3 1.2-.55 1.2-1.3-.5-1.3-1.2-1.3z"
      />
    </svg>
  );
}

export function NetflixMark({ className = "" }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 24 28" aria-hidden>
      <path
        fill="#E50914"
        d="M4.5 1h5.2l6.8 17.5V1H22v26h-5.1L9.8 9.2V27H4.5V1z"
      />
      <path
        fill="#B20710"
        d="M9.7 1h5.2v26H9.7z"
        opacity="0.35"
      />
    </svg>
  );
}

export function SpotifyMark({ className = "" }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" aria-hidden>
      <circle cx="14" cy="14" r="14" fill="#1DB954" />
      <path
        fill="#191414"
        d="M19.9 12.6c-3.3-2-8.6-2.15-11.7-1.2-.45.15-.75-.15-.6-.55.15-.4.6-.6 1.05-.45 3.5 1.05 9.25 1.2 13 2.4.4.15.55.6.35.95-.2.35-.65.45-1.1.25zm.25 3.05c-.25.4-.75.55-1.1.3-2.75-1.7-6.95-2.2-10.2-1.2-.45.15-.9-.15-.75-.55.1-.4.55-.7 1-.55 3.65 1.1 8.2 1.65 11.3 3.35.4.2.55.7.25 1.05-.05 0-.05 0-.05 0zm-1.25 2.95c-.2.3-.6.4-.9.2-2.4-1.45-5.4-1.8-8.95-1-.35.1-.75-.15-.65-.5.1-.4.45-.65.85-.5 3.9.85 7.2 1.25 9.9 2.85.35.2.45.6.25.9-.15.05-.3.05-.5.05z"
      />
    </svg>
  );
}

export function AirbnbMark({ className = "" }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" aria-hidden>
      <path
        fill="#FF5A5F"
        d="M14.05 24.2c-.5.7-1.1 1.3-1.9 1.75-.8.45-1.65.7-2.55.7-1.3 0-2.45-.45-3.4-1.3-.9-.9-1.4-2-1.4-3.25 0-1.3.6-2.7 1.75-4.2L14 8.2l6.9 9.7c1.05 1.4 1.65 2.8 1.65 4.1 0 1.25-.5 2.4-1.4 3.25-.95.85-2.1 1.3-3.4 1.3-.9 0-1.75-.25-2.55-.7-.8-.45-1.4-1.05-1.85-1.75h.7zM14 5.2c.7 0 1.3.25 1.75.7.45.45.7 1 .7 1.7s-.25 1.25-.7 1.7c-.45.45-1 .7-1.75.7s-1.3-.25-1.75-.7c-.45-.45-.7-1-.7-1.7s.25-1.25.7-1.7c.45-.45 1.05-.7 1.75-.7z"
      />
    </svg>
  );
}

export type BrandKey =
  | "amazon"
  | "uber"
  | "starbucks"
  | "netflix"
  | "spotify"
  | "airbnb"
  | "apple"
  | "google";

export function BrandMark({
  name,
  className = "",
}: {
  name: BrandKey;
  className?: string;
}) {
  switch (name) {
    case "amazon":
      return <AmazonMark className={className} />;
    case "uber":
      return <UberMark className={className} />;
    case "starbucks":
      return <StarbucksMark className={className} />;
    case "netflix":
      return <NetflixMark className={className} />;
    case "spotify":
      return <SpotifyMark className={className} />;
    case "airbnb":
      return <AirbnbMark className={className} />;
    case "apple":
      return <AppleMark className={className} />;
    case "google":
      return <GoogleGMark className={className} />;
  }
}
