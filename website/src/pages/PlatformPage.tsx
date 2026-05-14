import { PageSection } from '../components/PageSection'
import { platformModules } from '../content'
import architectureImage from '../assets/koru/koru_architecture.png'

export function PlatformPage() {
  return (
    <>
      <PageSection
        eyebrow="Platform"
        title="A Practical Platform for Distributed Field Operations"
        subtitle="FIELDexa is designed to connect operational records, field activity, and management visibility without forcing teams into disconnected tools."
      >
        <div className="platform-overview-layout">
          <div className="platform-module-column">
            <div className="module-grid platform-module-grid">
              {platformModules.map((module) => (
                <article key={module.title} className="info-card">
                  <h2>{module.title}</h2>
                  <p>{module.description}</p>
                </article>
              ))}
            </div>
          </div>
          <figure className="platform-architecture-card">
            <img
              src={architectureImage}
              alt="Koru architecture blueprint showing farmer, farm, agreement, operational tracking, web frontend, backend API, database, mobile sync, and security layers."
            />
          </figure>
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

    </>
  )
}
