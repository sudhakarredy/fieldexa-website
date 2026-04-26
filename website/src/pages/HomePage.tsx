import { Link } from 'react-router-dom'
import { PageSection } from '../components/PageSection'
import { corePillars, inRolloutFeatures } from '../content'

export function HomePage() {
  return (
    <>
      <PageSection
        eyebrow="FIELDexa Koru"
        title="Modern Agriculture Intelligence for Sustainable and Traceable Operations"
        subtitle="A conversion-ready scaffold based on approved FIELDexa messaging, brand assets, and public-content safety controls."
      >
        <div className="hero-actions">
          <Link to="/contact" className="cta-button">
            Book a Demo
          </Link>
          <Link to="/solutions" className="cta-link">
            Explore Solutions
          </Link>
        </div>
      </PageSection>

      <section className="page-section page-section-muted">
        <div className="container cards-grid">
          {corePillars.map((pillar) => (
            <article key={pillar.title} className="info-card">
              <h2>{pillar.title}</h2>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <p className="eyebrow">Koru In Rollout</p>
          <h2>Upcoming Intelligence Layer</h2>
          <div className="rollout-grid">
            {inRolloutFeatures.map((feature) => (
              <div key={feature} className="rollout-item">
                <span className="status-chip">In Rollout</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}