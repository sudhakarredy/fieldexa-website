import { useEffect, useState } from 'react'
import { PageSection } from '../components/PageSection'
import { advancedCapabilities } from '../content'

// Web App Screenshots - Direct imports from Images&Branding
import webHome from '../assets/koru/WebApp_Screenshots/Home.png'
import webHola from '../assets/koru/WebApp_Screenshots/Hola.png'
import webHarvestPrediction from '../assets/koru/WebApp_Screenshots/Harvest & Grade-Mix Predictions.png'
import webWeeklyHarvest from '../assets/koru/WebApp_Screenshots/Weekly Harvest Prediction.png'
import webWeeklyTransport from '../assets/koru/WebApp_Screenshots/Weekly Harvest Transport Planning.png'
import webGeoIntelligence from '../assets/koru/WebApp_Screenshots/Geo Performance Intelligence.png'
import webGradeGroups from '../assets/koru/WebApp_Screenshots/Grade Groups.png'
import webAiAlerts from '../assets/koru/WebApp_Screenshots/AI Alerts for Management.png'
import webTraceability from '../assets/koru/WebApp_Screenshots/Traceability Reports.png'
import webActionBoard from '../assets/koru/WebApp_Screenshots/My Action Board.png'
import webExcelReports from '../assets/koru/WebApp_Screenshots/Excel Reports.png'
import webSms from '../assets/koru/WebApp_Screenshots/SMS.png'
import webAiAgents from '../assets/koru/WebApp_Screenshots/AI Agents.png'

// Mobile Screenshots
import mobileHome from '../assets/koru/Mobile_Screenshots/Home-1.jpg'
import mobileFarmers from '../assets/koru/Mobile_Screenshots/Farmers-1.jpg'
import mobileFarms from '../assets/koru/Mobile_Screenshots/Farms-1.jpg'
import mobileAgreements from '../assets/koru/Mobile_Screenshots/Agreements-1.jpg'
import mobileHarvest from '../assets/koru/Mobile_Screenshots/Harvest-1.jpg'
import mobileAlerts from '../assets/koru/Mobile_Screenshots/Alerts-1.jpg'
import mobileFieldVisit from '../assets/koru/Mobile_Screenshots/FieldVisit-1.jpg'
import mobileInputs from '../assets/koru/Mobile_Screenshots/Input-1.jpg'
import mobileReports from '../assets/koru/Mobile_Screenshots/Reports-1.jpg'

interface Screenshot {
  label: string
  src: string
  platform: 'web' | 'mobile'
}

interface SelectedScreenshot {
  label: string
  src: string
  platform: 'web' | 'mobile'
  capabilityTitle: string
  capabilityDescription: string
  alt: string
}

interface Capability {
  title: string
  description: string
  category: string
  relatedScreens?: string[]
}

// Map screenshot names to actual image paths and metadata
const screenshotMap: Record<string, Screenshot> = {
  'Home': { label: 'Home Dashboard', src: webHome, platform: 'web' },
  'Hola': { label: 'AI Copilot (Hola)', src: webHola, platform: 'web' },
  'Harvest Prediction': { label: 'Harvest & Grade Mix Predictions', src: webHarvestPrediction, platform: 'web' },
  'Weekly Harvest': { label: 'Weekly Harvest Forecast', src: webWeeklyHarvest, platform: 'web' },
  'Transport Planning': { label: 'Transport Planning', src: webWeeklyTransport, platform: 'web' },
  'Geo Intelligence': { label: 'Geo-Scoped Analytics', src: webGeoIntelligence, platform: 'web' },
  'Grade Groups': { label: 'Grade Management', src: webGradeGroups, platform: 'web' },
  'AI Alerts': { label: 'AI Alert Management', src: webAiAlerts, platform: 'web' },
  'Traceability': { label: 'Traceability Reports', src: webTraceability, platform: 'web' },
  'Action Board': { label: 'Action Board', src: webActionBoard, platform: 'web' },
  'Excel Reports': { label: 'Excel Exports', src: webExcelReports, platform: 'web' },
  'SMS Notifications': { label: 'SMS & Messaging', src: webSms, platform: 'web' },
  'AI Agents': { label: 'AI Agents', src: webAiAgents, platform: 'web' },
  'Mobile Home': { label: 'Mobile Dashboard', src: mobileHome, platform: 'mobile' },
  'Mobile Farmers': { label: 'Farmer Management', src: mobileFarmers, platform: 'mobile' },
  'Mobile Farms': { label: 'Farm Records', src: mobileFarms, platform: 'mobile' },
  'Mobile Agreements': { label: 'Agreements', src: mobileAgreements, platform: 'mobile' },
  'Mobile Harvest': { label: 'Harvest Tracking', src: mobileHarvest, platform: 'mobile' },
  'Mobile Alerts': { label: 'Alert Response', src: mobileAlerts, platform: 'mobile' },
  'Mobile Field Visit': { label: 'Field Visits', src: mobileFieldVisit, platform: 'mobile' },
  'Mobile Inputs': { label: 'Input Distribution', src: mobileInputs, platform: 'mobile' },
  'Mobile Reports': { label: 'Reports & Analytics', src: mobileReports, platform: 'mobile' },
}

// Capability to screenshot mapping
const capabilityScreenshots: Record<string, string[]> = {
  'AI Operations Copilot (Hola)': ['Hola', 'Home'],
  'Predictive Harvest Intelligence': ['Harvest Prediction', 'Mobile Harvest'],
  'Grade-Mix Forecasting': ['Grade Groups', 'Harvest Prediction'],
  'Predicted vs Actual Harvest Tracking': ['Harvest Prediction', 'Mobile Harvest'],
  'Weekly Harvest Prediction for Transport Planning': ['Weekly Harvest', 'Transport Planning', 'Mobile Harvest'],
  'Configurable Week Logic Per Client': ['Weekly Harvest'],
  'Crop-Wise Distribution Engine': ['Weekly Harvest', 'Mobile Harvest'],
  'Geo-Scoped Planning and Analytics': ['Geo Intelligence', 'Mobile Farms'],
  'Executive Dashboard with Visual Planning Widgets': ['Home', 'Mobile Home'],
  'Large-Scale Report Performance': ['Excel Reports', 'Mobile Reports'],
  'Management Alerting and Prioritization': ['AI Alerts', 'Mobile Alerts'],
  'Traceability-Ready Reporting Suite': ['Traceability', 'Mobile Agreements'],
  'Fuzzy Duplicate Detection': ['Mobile Farmers'],
  'Multilingual Communication Framework': ['SMS Notifications', 'Mobile Alerts'],
  'Super Admin Domain Controls': []
}

export function ProductCapabilitiesPage() {
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null)
  const [selectedScreenshot, setSelectedScreenshot] = useState<SelectedScreenshot | null>(null)

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

  useEffect(() => {
    if (!selectedScreenshot) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedScreenshot(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedScreenshot])

  return (
    <>
      <PageSection
        eyebrow="Product Capabilities"
        title="15 Production-Ready Capabilities"
        subtitle="Every feature is built-in, tested, and deployed. Click any capability to see it live in our platform."
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
                  const screenshots = capabilityScreenshots[cap.title] || []
                  const hasScreenshots = screenshots.length > 0

                  return (
                    <div
                      key={cap.title}
                      className={`capability-card-wrapper ${isExpanded ? 'expanded' : ''}`}
                    >
                      {hasScreenshots ? (
                        <button
                          type="button"
                          className="capability-card clickable"
                          onClick={() => toggleExpanded(cap.title)}
                        >
                          <h3>{cap.title}</h3>
                          <p>{cap.description}</p>
                          <div className="capability-card-footer">
                            <span className="capability-badge">{cap.category}</span>
                            <span className="capability-link">
                              {isExpanded ? '▼ Hide' : '▶ See in Action'}
                            </span>
                          </div>
                        </button>
                      ) : (
                        <article className="capability-card">
                          <h3>{cap.title}</h3>
                          <p>{cap.description}</p>
                          <div className="capability-card-footer">
                            <span className="capability-badge">{cap.category}</span>
                          </div>
                        </article>
                      )}

                      {isExpanded && hasScreenshots && (
                        <div className="capability-screenshots">
                          <div className="screenshots-grid">
                            {screenshots.map((screenKey) => {
                              const screenshot = screenshotMap[screenKey]
                              return screenshot ? (
                                <figure key={screenKey} className="screenshot-preview">
                                  <button
                                    type="button"
                                    className="screenshot-preview-button"
                                    onClick={() =>
                                      setSelectedScreenshot({
                                        label: screenshot.label,
                                        src: screenshot.src,
                                        platform: screenshot.platform,
                                        capabilityTitle: cap.title,
                                        capabilityDescription: cap.description,
                                        alt: `${screenshot.label} preview for ${cap.title}`,
                                      })
                                    }
                                    aria-label={`Enlarge ${screenshot.label} for ${cap.title}`}
                                  >
                                    <img src={screenshot.src} alt={screenshot.label} loading="lazy" />
                                  </button>
                                  <figcaption>
                                    <strong>{screenshot.label}</strong>
                                    <span className="platform-badge">{screenshot.platform === 'web' ? '💻 Web' : '📱 Mobile'}</span>
                                    <span className="screenshot-hint">Click to zoom</span>
                                  </figcaption>
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
          <h2>Technical Foundation</h2>
          <ul className="bullet-list">
            <li>
              <strong>3-Generation Predictive Models:</strong> Rule-based GDD (Gen-1) → Random Forest (200+ actuals) → Ensemble (500+ seasons) for continuously improving accuracy.
            </li>
            <li>
              <strong>Real-Time Weather Integration:</strong> Open-Meteo daily ingestion for temperature, humidity, rainfall, and derived GDD calculations.
            </li>
            <li>
              <strong>Satellite Intelligence:</strong> Sentinel-2 NDVI week 5-6 ingestion with quality scoring and cloud fallback logic.
            </li>
            <li>
              <strong>Data Quality Automation:</strong> Fuzzy duplicate detection across phone, name, and village with approval workflows.
            </li>
            <li>
              <strong>Enterprise Security:</strong> Multi-tenant isolation, RBAC, sensitive data policies, and full audit trails at database level.
            </li>
          </ul>
        </div>
      </section>

      {selectedScreenshot ? (
        <div className="proof-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged capability screenshot">
          <div className="proof-lightbox-backdrop" onClick={() => setSelectedScreenshot(null)} aria-hidden="true" />
          <div className="proof-lightbox-panel">
            <button
              type="button"
              className="proof-lightbox-close"
              onClick={() => setSelectedScreenshot(null)}
              aria-label="Close enlarged screenshot"
            >
              Close
            </button>
            <p className="proof-lightbox-platform">{selectedScreenshot.platform === 'web' ? 'Web view' : 'Mobile view'}</p>
            <h3>{selectedScreenshot.label}</h3>
            <p>
              {selectedScreenshot.capabilityTitle}: {selectedScreenshot.capabilityDescription}
            </p>
            <img src={selectedScreenshot.src} alt={selectedScreenshot.alt} className="proof-lightbox-image" />
          </div>
        </div>
      ) : null}
    </>
  )
}
