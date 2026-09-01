export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-links">
        <div className="site-footer-col">
          <a href="#docs">Docs</a>
          <a href="#faq">Support</a>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </div>
        <div className="site-footer-col">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a href="#dex">Dex</a>
        </div>
      </div>
      <p className="site-footer-mark" aria-hidden>
        YOURS
      </p>
    </footer>
  );
}
