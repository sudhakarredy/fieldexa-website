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
          <h2>Technology Foundation</h2>
          <p className="section-subtitle">
            Koru is built as an enterprise-ready agricultural system: AI-assisted operations on top of a
            cloud-native, offline-capable transaction backbone.
          </p>
          <div className="cards-grid platform-tech-grid">
            <article className="info-card">
              <h3>AI Copilot and Agents</h3>
              <p>
                Natural-language management queries, guided alert triage, and agent-style automation support
                supervisors who need answers and follow-up actions without digging through reports.
              </p>
            </article>
            <article className="info-card">
              <h3>Prediction Engine</h3>
              <p>
                Harvest forecasting, grade-mix prediction, and transport planning combine weather, field,
                seasonal, and operational signals into decision-ready forecasts.
              </p>
            </article>
            <article className="info-card">
              <h3>Cloud-Native API Core</h3>
              <p>
                FastAPI services expose JWT-secured workflows, integrate with enterprise systems, and keep the
                platform extensible for ERP sync, analytics, and future service boundaries.
              </p>
            </article>
            <article className="info-card">
              <h3>Spatial Data Backbone</h3>
              <p>
                PostgreSQL 15 with PostGIS underpins farmer, polygon, agreement, and operational records,
                supporting EUDR compliance, geo filters, and audit-grade lineage.
              </p>
            </article>
            <article className="info-card">
              <h3>Offline-First Mobile</h3>
              <p>
                Kotlin-based field workflows use local sync queues so teams can continue onboarding, field
                visits, harvest capture, and alerts even when connectivity is weak or unavailable.
              </p>
            </article>
            <article className="info-card">
              <h3>Secure Multi-Tenant Delivery</h3>
              <p>
                Role-based access, tenant isolation, token lifecycle controls, and policy-aware services make
                the same codebase safe to deploy across multiple clients and operating regions.
              </p>
            </article>
          </div>
        </div>
      </section>

    </>
  )
}
