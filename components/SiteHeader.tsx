export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="header-bar">
          <a href="#top" className="header-logo">
            <img
              src="/logo.PNG"
              alt=""
              width={56}
              height={40}
              className="header-logo-mark"
            />
            YOURS
          </a>

          <nav className="header-nav" aria-label="Primary">
            <a href="#tap-in" className="header-nav-link is-active">
              For You
            </a>
          </nav>

          <a href="#get-card" className="header-signup">
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
