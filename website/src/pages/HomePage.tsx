import { Link } from 'react-router-dom'
import { PageSection } from '../components/PageSection'
import { businessProblems, corePillars, outcomesAndImpact, solutionTracks } from '../content'

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <PageSection
        eyebrow="FIELDexa Koru"
        title="From Unpredictability to Prosperity"
        subtitle="Help farmers thrive and export houses scale. Connect field operations, predict harvests, and unlock revenue—all in one platform built for distributed agricultural networks."
      >
        <div className="hero-actions">
          <Link to="/contact" className="cta-button">
            Book a Demo
          </Link>
          <Link to="/solutions/koru" className="cta-link">
            Explore Full Capabilities
          </Link>
        </div>
      </PageSection>

      {/* The Problems Section */}
      <section className="page-section page-section-muted">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">The Challenge</p>
            <h2>Agriculture Operations Are Fragmented, Invisible, and Unsustainable</h2>
            <p className="section-subtitle">
              Export houses struggle with unpredictable supply, fragmented data, and compliance complexity. Farmers lack visibility into their own data and fair pricing. The result: missed revenue, poor decisions, and unsustainable growth.
            </p>
          </div>

          <div className="problems-grid">
            {businessProblems.map((problem) => (
              <article key={problem.title} className="problem-card">
                <div className="problem-icon">{problem.icon}</div>
                <h3>{problem.title}</h3>
                <div className="problem-content">
                  <p className="problem-text">
                    <strong>The Problem:</strong> {problem.problem}
                  </p>
                  <p className="solution-text">
                    <strong>Koru's Answer:</strong> {problem.solution}
                  </p>
                  <p className="impact-metric">{problem.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">How Koru Works</p>
            <h2>Three Core Pillars</h2>
          </div>
          <div className="cards-grid">
            {corePillars.map((pillar) => (
              <article key={pillar.title} className="info-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Tracks */}
      <section className="page-section page-section-muted">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Solution Tracks</p>
            <h2>Built for Three Operating Models</h2>
          </div>
          <div className="cards-grid">
            {solutionTracks.map((track) => (
              <article key={track.title} className="info-card">
                <h2>{track.title}</h2>
                <p>{track.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Impact */}
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">The Results</p>
            <h2>Revenue, Sustainability, and Farmer Empowerment</h2>
            <p className="section-subtitle">
              Koru delivers measurable outcomes across three dimensions: higher revenue for export houses, genuine empowerment for farmers, and sustainable scaling.
            </p>
          </div>

          <div className="outcomes-grid">
            {outcomesAndImpact.map((outcome) => (
              <article key={outcome.title} className="outcome-card">
                <div className="outcome-focus">{outcome.focus}</div>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
                <div className="outcome-metric">{outcome.metric}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Koru Section */}
      <section className="page-section page-section-muted">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Why Koru</p>
            <h2>Purpose-Built for Agricultural Networks</h2>
          </div>

          <div className="why-koru-grid">
            <article className="why-card">
              <h3>📱 Offline-First Mobile</h3>
              <p>Field teams work without connectivity. Sync when online. No more lost data or frustration.</p>
            </article>
            <article className="why-card">
              <h3>🔐 Multi-Tenant Enterprise Grade</h3>
              <p>Manage thousands of contract farmers with bank-level data isolation and compliance controls.</p>
            </article>
            <article className="why-card">
              <h3>🌍 EUDR & Sustainability Ready</h3>
              <p>Traceability data is captured automatically. Compliance becomes competitive advantage.</p>
            </article>
            <article className="why-card">
              <h3>⚡ Real-Time Alerts</h3>
              <p>Issues surface automatically and route to the right teams before they become crises.</p>
            </article>
            <article className="why-card">
              <h3>📊 Predictive Intelligence</h3>
              <p>Forecast harvests, grades, and yields 7-14 days ahead. Plan logistics and procurement with confidence.</p>
            </article>
            <article className="why-card">
              <h3>🌱 Farmer-Centric Design</h3>
              <p>Farmers see their own data in real-time. Fair pricing. Direct communication. Digital inclusion.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section">
        <div className="container">
          <div className="home-cta-center">
            <h2>Ready to Bridge the Gap?</h2>
            <p className="section-subtitle home-cta-subtitle">
              See how Koru transforms fragmented operations into connected, predictable, sustainable networks.
            </p>
            <div className="hero-actions home-cta-actions">
              <Link to="/contact" className="cta-button">
                Schedule a 30-Min Demo
              </Link>
              <Link to="/solutions/koru" className="cta-link">
                Explore All 15 Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
