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
        </div>

        <div className="site-footer-meta">
          <div className="site-footer-social">
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
