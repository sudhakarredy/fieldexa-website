import { Link } from 'react-router-dom'
import { PageSection } from '../components/PageSection'

export function SolutionsHubPage() {
  return (
    <>
      <PageSection
        eyebrow="Solutions"
        title="FIELDexa Solutions"
        subtitle="FIELDexa will house multiple agriculture solutions over time. Today, Koru is the flagship operating system for contract farming, traceability, prediction, and field execution."
      >
        <div className="solutions-hub-grid">
          <article className="solution-hub-card solution-hub-card-primary">
            <p className="status-chip">Available Now</p>
            <h2>Koru Contract Farming OS</h2>
            <p>
              A unified operating system for farmer onboarding, geospatial farm records, seasonal agreements,
              inputs, harvests, AI-assisted alerts, prediction, and enterprise traceability.
            </p>
            <ul className="bullet-list">
              <li>Offline-first mobile workflows for field teams</li>
              <li>Prediction, AI copilots, and operational agents</li>
              <li>Traceability-ready records with enterprise controls</li>
            </ul>
            <div className="hero-actions">
              <Link to="/solutions/koru" className="cta-button">
                Explore Koru
              </Link>
              <Link to="/platform" className="cta-link">
                View Platform Architecture
              </Link>
            </div>
          </article>

          <article className="solution-hub-card">
            <p className="status-chip">Roadmap Ready</p>
            <h2>More Solution Families</h2>
            <p>
              The Solutions hub is structured to accommodate future FIELDexa offerings without mixing product,
              platform, and proof content into the same page.
            </p>
            <p className="muted">
              Future solution pages can be added here as dedicated experiences with their own positioning,
              outcomes, and proof.
            </p>
          </article>
        </div>
      </PageSection>
    </>
  )
}