function IconOut() {
  return (
    <svg className="site-footer-out" viewBox="0 0 12 12" aria-hidden>
      <path
        d="M4 2.5h5.5V8M9.5 2.5 2.5 9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.9 4.3c.3-.9-.5-1.6-1.3-1.3L2.7 9.6c-.9.3-.9 1.5.1 1.8l4.6 1.5 1.8 5.6c.3.9 1.4 1.1 2 .4l2.6-2.8 4.7 3.5c.8.6 1.9.1 2.1-.9L21.9 4.3zM9.3 13.2l8.2-5.1-6.4 6.8-.2 2.6-1.6-4.3z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <a href="#top" className="site-footer-logo">
              <img src="/yours-logo.png" alt="" width={28} height={28} />
              YOURS
            </a>
            <p className="site-footer-tag">
              YOURS is a Visa debit card. Spend today. Build Yours Score. Your
              payment today can fund tomorrow’s bills.
            </p>
          </div>

          <div className="site-footer-col">
            <p className="site-footer-heading">Product</p>
            <a href="#tap-in">How it works</a>
            <a href="#coverage">Coverage</a>
            <a href="#network">Merchants</a>
            <a href="#spend">Spend</a>
          </div>

          <div className="site-footer-col">
            <p className="site-footer-heading">Explore</p>
            <a href="#faq">FAQ</a>
            <a href="#dex">
              Dex
              <IconOut />
            </a>
          </div>
        </div>

        <div className="site-footer-meta">
          <div className="site-footer-social">
            <a
              href="https://t.me/yoursdotcards"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <IconTelegram />
            </a>
            <a
              href="https://x.com/yoursdotcards"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <IconX />
            </a>
          </div>
          <p className="site-footer-copy">
            © All rights reserved. Yours — {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
