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

function IconDiscord() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
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
              <img src="/logo.png" alt="" width={28} height={28} />
              YOURS
            </a>
            <p className="site-footer-tag">
              Yours is crypto debit for everyday spend. Visa rails, Apple Pay
              and Google Pay, cash back on every swipe.
            </p>
          </div>

          <div className="site-footer-col">
            <p className="site-footer-heading">Product</p>
            <a href="#tap-in">How it works</a>
            <a href="#cashback">Cashback</a>
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

          <div className="site-footer-col">
            <p className="site-footer-heading">Developers</p>
            <a href="#docs">
              Docs
              <IconOut />
            </a>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>

        <div className="site-footer-meta">
          <div className="site-footer-social">
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <IconDiscord />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <IconTelegram />
            </a>
            <a
              href="https://x.com/"
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
