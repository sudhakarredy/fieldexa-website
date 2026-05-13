import { useState } from 'react'
import { PageSection } from '../components/PageSection'
import { advancedCapabilities } from '../content'

// Import screenshot images
import homeImg from '../assets/koru/Mobile_Screenshots/Home-1.jpg'
import farmersImg from '../assets/koru/farmers.jpg'
import farmsImg from '../assets/koru/Mobile_Screenshots/Farms-1.jpg'
import agreementsImg from '../assets/koru/agreements.jpg'
import harvestImg from '../assets/koru/Mobile_Screenshots/Harvest-1.jpg'
import alertsImg from '../assets/koru/alerts.jpg'
import fieldVisitImg from '../assets/koru/Mobile_Screenshots/FieldVisit-1.jpg'

const screenImages: Record<string, string> = {
  Home: homeImg,
  Farmers: farmersImg,
  Farms: farmsImg,
  Agreements: agreementsImg,
  Harvest: harvestImg,
  Alerts: alertsImg,
  FieldVisit: fieldVisitImg,
}

interface Capability {
  title: string
  description: string
  category: string
  relatedScreens?: string[]
}

export function ProductCapabilitiesPage() {
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null)

  // Group capabilities by category
  const capsByCategory = advancedCapabilities.reduce((acc, cap) => {
    const category = cap.category || 'Other'
    if (!acc[category]) acc[category] = []
    acc[category].push(cap)
    return acc
  }, {} as Record<string, Capability[]>)

  const categoryOrder = [
    'Intelligence',
    'Forecasting',
    'Planning',
    'Analytics',
    'Operations',
    'Compliance',
    'Data Quality',
    'Configuration',
    'Administration',
    'Infrastructure',
  ]

  const toggleExpanded = (title: string) => {
    setExpandedCapability(expandedCapability === title ? null : title)
  }

  return (
    <>
      <PageSection
        eyebrow="Product Capabilities"
        title="Enterprise-Grade Agricultural Operations Platform"
        subtitle="FIELDexa Koru delivers 15+ advanced capabilities spanning predictive intelligence, compliance-ready operations, and distributed team coordination. All built-in and production-ready. Click any capability to see it in action."
      />

      {categoryOrder.map((category) => {
        const caps = capsByCategory[category]
        if (!caps || caps.length === 0) return null

        return (
          <section key={category} className="page-section">
            <div className="container">
              <h2>{category}</h2>
              <div className="capabilities-grid">
                {caps.map((cap: Capability) => {
                  const isExpanded = expandedCapability === cap.title
                  const hasScreenshots = cap.relatedScreens && cap.relatedScreens.length > 0

                  return (
                    <div
                      key={cap.title}
                      className={`capability-card-wrapper ${isExpanded ? 'expanded' : ''}`}
                    >
                      <article
                        className={`capability-card ${hasScreenshots ? 'clickable' : ''}`}
                        onClick={() => hasScreenshots && toggleExpanded(cap.title)}
                        role={hasScreenshots ? 'button' : undefined}
                        tabIndex={hasScreenshots ? 0 : undefined}
                        onKeyDown={(e) => {
                          if (hasScreenshots && (e.key === 'Enter' || e.key === ' ')) {
                            toggleExpanded(cap.title)
                          }
                        }}
                      >
                        <h3>{cap.title}</h3>
                        <p>{cap.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.8rem' }}>
                          <span className="capability-badge">{cap.category}</span>
                          {hasScreenshots && (
                            <span className="capability-link">
                              {isExpanded ? '▼ Hide' : '▶ See in Action'}
                            </span>
                          )}
                        </div>
                      </article>

                      {isExpanded && hasScreenshots && (
                        <div className="capability-screenshots">
                          <div className="screenshots-grid">
                            {cap.relatedScreens?.map((screenName) => {
                              const imgPath = screenImages[screenName]
                              return imgPath ? (
                                <figure key={screenName} className="screenshot-preview">
                                  <img src={imgPath} alt={`${cap.title} - ${screenName}`} />
                                  <figcaption>{screenName}</figcaption>
                                </figure>
                              ) : null
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      <section className="page-section page-section-muted">
        <div className="container">
          <h2>Integration & Architecture</h2>
          <ul className="bullet-list">
            <li>
              <strong>Predictive Model Evolution:</strong> Rule-based GDD model (Gen-1) →
              Random Forest (after 200+ plot actuals) → Ensemble methods (after 500+ plot-seasons) for
              continuously improving accuracy.
            </li>
            <li>
              <strong>Weather Intelligence:</strong> Open-Meteo daily ingestion for temperature,
              humidity, rainfall, and derived GDD calculations.
            </li>
            <li>
              <strong>Satellite Integration:</strong> Sentinel-2 NDVI week 5-6 ingestion with cloud
              fallback and quality scoring.
            </li>
            <li>
              <strong>Data Quality Automation:</strong> Fuzzy duplicate detection across phone, name,
              and village for clean farmer records.
            </li>
            <li>
              <strong>Enterprise Governance:</strong> Role-based access control, tenant isolation,
              sensitive data policies, and full audit trails.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
