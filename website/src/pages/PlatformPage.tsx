import { PageSection } from '../components/PageSection'
import { platformModules } from '../content'
import alertsImage from '../assets/koru/alerts.jpg'

export function PlatformPage() {
  return (
    <>
      <PageSection
        eyebrow="Platform"
        title="A Practical Platform for Distributed Field Operations"
        subtitle="FIELDexa is designed to connect operational records, field activity, and management visibility without forcing teams into disconnected tools."
      >
        <div className="module-grid">
          {platformModules.map((module) => (
            <article key={module.title} className="info-card">
              <h2>{module.title}</h2>
              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <section className="page-section page-section-muted">
        <div className="container">
          <h2>How the Platform Is Used</h2>
          <ul className="bullet-list">
            <li>Maintain one operational record across farmer, farm, agreement, input, and harvest workflows.</li>
            <li>Support field teams with mobile-assisted execution and visible follow-up paths.</li>
            <li>Give management teams role-based visibility into ongoing operations and exceptions.</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2>Visible Action Tracking</h2>
          <p className="section-subtitle">
            The platform is built to keep exceptions, follow-up status, and field-level coordination in
            view for the teams responsible for response.
          </p>
          <div className="screenshot-grid screenshot-grid-single">
            <figure className="screenshot-card">
              <img src={alertsImage} alt="Koru alerts view showing issue status and farmer-linked alert records." />
              <figcaption>
                Alert workflows help operating teams see new, in-progress, and closed issues with linked
                farmer and farm context.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
