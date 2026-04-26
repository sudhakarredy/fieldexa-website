import { NavLink, Outlet } from 'react-router-dom'
import { legalLinks, navItems } from '../content'

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <NavLink to="/" className="brand" aria-label="FIELDexa home">
            <img src="/brand/fieldexa-logo.png" alt="FIELDexa" className="brand-logo" />
          </NavLink>
          <nav aria-label="Main navigation" className="main-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <NavLink to="/contact" className="cta-button cta-button-small">
            Book a Demo
          </NavLink>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <img
              src="/brand/fieldexa-logo-lockup.png"
              alt="Fieldexa Technologies Private Limited"
              className="brand-lockup"
            />
            <p className="muted">
              Intelligence for every field. Public content is governed by documented
              claim and copyright controls.
            </p>
          </div>
          <div>
            <h3>Legal</h3>
            <ul className="link-list">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className="footer-link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p className="muted">FIELDexa Technologies Private Limited</p>
            <p className="muted">Use the Contact page to route demo requests.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}