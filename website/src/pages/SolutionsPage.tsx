import { PageSection } from '../components/PageSection'
import { inRolloutFeatures } from '../content'

type ProofImage = {
  src: string
  label: string
  platform: 'Mobile' | 'Web'
}

type CapabilitySection = {
  id: string
  title: string
  outcome: string
  description: string
  differentiators: string[]
  heroProof: ProofImage[]
  expandedProof: ProofImage[]
}

const mobileImages = import.meta.glob('../assets/koru/Mobile_Screenshots/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const webImages = import.meta.glob('../assets/koru/WebApp_Screenshots/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function fileLabel(path: string) {
  return path
    .split('/')
    .pop()
    ?.replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function pickByName(source: Record<string, string>, names: string[], platform: 'Mobile' | 'Web') {
  return names
    .map((name) => {
      const key = Object.keys(source).find((path) => path.endsWith(`/${name}`))
      if (!key) {
        return null
      }
      return {
        src: source[key],
        label: fileLabel(key) ?? name,
        platform,
      }
    })
    .filter((item): item is ProofImage => Boolean(item))
}

function chunkProof(source: Record<string, string>, from: number, to: number) {
  return Object.entries(source)
    .sort(([a], [b]) => (fileLabel(a) ?? '').localeCompare(fileLabel(b) ?? ''))
    .slice(from, to)
    .map(([path, src]) => ({
      src,
      label: fileLabel(path) ?? 'Koru console screen',
      platform: 'Web' as const,
    }))
}

const onboardingProof = [
  ...pickByName(
    mobileImages,
    ['Farmers-1.jpg', 'Farmer-2.jpg', 'Farmer-3.jpg', 'Farmer-4.jpg', 'Farms-1.jpg', 'Farm-2.jpg', 'Farm-3.jpg', 'Farm-4.jpg', 'Farm-5.jpg'],
    'Mobile',
  ),
  ...chunkProof(webImages, 0, 4),
]

const seasonalOpsProof = [
  ...pickByName(
    mobileImages,
    ['Agreements-1.jpg', 'Agreements-2.jpg', 'Input-1.jpg', 'Input-2.jpg', 'Return-1.jpg', 'Return-2.jpg'],
    'Mobile',
  ),
  ...chunkProof(webImages, 4, 8),
]

const fieldIntelProof = [
  ...pickByName(
    mobileImages,
    ['FieldVisit-1.jpg', 'FieldVisit-2.jpg', 'FieldVisit-3.jpg', 'FieldVisit-4.jpg', 'FieldVisit-5.jpg', 'Alerts-1.jpg', 'Alerts-2.jpg', 'Alert-3.jpg'],
    'Mobile',
  ),
  ...chunkProof(webImages, 8, 14),
]

const harvestProof = [
  ...pickByName(
    mobileImages,
    ['Harvest-1.jpg', 'Harvest-2.jpg', 'Harvest-3.jpg', 'Manifest.jpg', 'Reports-1.jpg', 'Reports-2.jpg', 'Reports-3.jpg', 'Reports-4.jpg'],
    'Mobile',
  ),
  ...chunkProof(webImages, 14, 19),
]

const adoptionProof = [
  ...pickByName(
    mobileImages,
    ['Login.jpg', 'Login-Ka.jpg', 'Home-1.jpg', 'Home-1-Ka.jpg', 'Home-2.jpg', 'Home-2-Ka.jpg', 'Settings-1.jpg', 'Settings-2.jpg'],
    'Mobile',
  ),
  ...chunkProof(webImages, 19, 24),
]

const sections: CapabilitySection[] = [
  {
    id: 'onboarding',
    title: 'Farmer and Farm Digital Foundation',
    outcome: 'Create a single trusted grower and farm master record from day one of each season.',
    description:
      'Koru captures farmer identity, preferred language, communication readiness, Aadhaar reference, and bank evidence with finance-only visibility controls. Farm onboarding supports multi-farm relationships, GPS and polygon capture through open maps, and acre computation with both automatic and manual methods.',
    differentiators: [
      'GPS-driven village selection and geospatial farm context captured at source',
      'Structured verification workflow for sensitive finance fields with access restrictions',
      'Multiple farms per farmer with polygon, water, soil, and cropping metadata in one model',
    ],
    heroProof: onboardingProof.slice(0, 3),
    expandedProof: onboardingProof.slice(3),
  },
  {
    id: 'seasonal-ops',
    title: 'Seasonal Agreement and Input Control',
    outcome: 'Maintain commercial discipline from agreement setup to input issue and return reconciliation.',
    description:
      'Per-farm, per-season agreements include grade-wise rates, validity windows, and sowing date capture to improve harvest planning. Input issuance supports item master governance, batch scanning, and returns traceability to reduce leakages and improve auditability.',
    differentiators: [
      'Season-aware commercial terms linked to each farm record',
      'Input flow supports issue and return loops with operational traceability',
      'Sowing date captured as an operational signal for downstream harvest planning',
    ],
    heroProof: seasonalOpsProof.slice(0, 3),
    expandedProof: seasonalOpsProof.slice(3),
  },
  {
    id: 'field-intelligence',
    title: 'Field Intelligence, Alerts, and Cluster Intervention',
    outcome: 'Convert field observations into actionable, trackable interventions for rapid response.',
    description:
      'Field visits capture GPS, image evidence, crop-stage markers such as first female flower, and pollination checkpoints to refine output expectations. Critical issues can be escalated as alerts and tickets for disease, pest, or climate events, with farmer notification and management-level cluster response visibility.',
    differentiators: [
      'First female flower and pollination markers integrated with harvest refinement signals',
      'Issue escalation from field app to ticketed management workflow in one chain',
      'Cluster-level visibility that supports coordinated mass action playbooks',
    ],
    heroProof: fieldIntelProof.slice(0, 3),
    expandedProof: fieldIntelProof.slice(3),
  },
  {
    id: 'harvest-traceability',
    title: 'Harvest Operations and Farm-to-Shelf Traceability',
    outcome: 'Run grade-wise harvest capture and traceability workflows without disconnected systems.',
    description:
      'Koru records harvest quantity by grade with crate-level scanning, supports cluster reconciliation, and enables transfer manifests via QR code or CSV. Blockchain-backed traceability capabilities strengthen chain-of-custody confidence from farm to shelf.',
    differentiators: [
      'Grade-wise harvest capture tied to crate-level tracking controls',
      'Manifest generation supports both QR and CSV transfer workflows',
      'Traceability architecture extends from field capture to downstream chain records',
    ],
    heroProof: harvestProof.slice(0, 3),
    expandedProof: harvestProof.slice(3),
  },
  {
    id: 'enterprise-controls',
    title: 'Enterprise Controls, Adoption, and Integration',
    outcome: 'Scale operations with strong access control, usability, analytics, and integration readiness.',
    description:
      'The platform is designed offline-first for field realities, with multilingual support, role-based access, and low-typing interaction patterns that reduce data-entry errors. Koru also supports Excel export, analytical reporting, multi-crop program structures, action playbooks for known critical events, and fast APIs for ERP bi-directional synchronization.',
    differentiators: [
      'Offline-first execution model for low-connectivity operating regions',
      'Multilingual, sunlight-ready UI options including theme and font-size controls',
      'Fast API layer for ERP integration and reduced manual reconciliation effort',
    ],
    heroProof: adoptionProof.slice(0, 3),
    expandedProof: adoptionProof.slice(3),
  },
]

export function SolutionsPage() {
  return (
    <>
      <PageSection
        eyebrow="Solutions"
        title="Koru Contract Farming OS for Scalable Field Execution"
        subtitle="Koru unifies grower onboarding, seasonal commercial controls, field intelligence, harvest traceability, and enterprise integration in one operations-grade system."
      >
        <div className="koru-origin-card">
          <p>
            <strong>Koru</strong> is inspired by the Maori symbol of the unfurling fern, representing growth,
            renewal, and forward momentum. In contract farming, this aligns with how high-performing programs
            scale: each season compounds trusted data, sharper interventions, and stronger operating outcomes.
          </p>
          <p>
            FIELDexa Koru is built to turn that growth into repeatable system behavior across field teams,
            supervisors, and enterprise management.
          </p>
        </div>

        <div className="solution-highlight-grid">
          <article className="info-card">
            <h2>Compelling Differentiators</h2>
            <ul className="bullet-list">
              <li>Offline-first mobile workflows with geo-tagged operational capture.</li>
              <li>Season-linked agreements and input controls integrated with harvest readiness signals.</li>
              <li>Field issue escalation into managed tickets with cluster-level intervention visibility.</li>
              <li>Traceability-ready operations model with blockchain support and transfer manifests.</li>
            </ul>
          </article>
          <article className="info-card">
            <h2>Built for Enterprise Delivery</h2>
            <ul className="bullet-list">
              <li>Role-based access controls for sensitive data and team-specific workflows.</li>
              <li>Selection-first interactions to reduce typing errors and duplicate records.</li>
              <li>Multi-crop operational support beyond single-program deployments.</li>
              <li>Fast API integration model for ERP bi-directional synchronization.</li>
            </ul>
          </article>
        </div>
      </PageSection>

      <section className="page-section page-section-muted">
        <div className="container">
          <h2>Capability Architecture and Proof</h2>
          <p className="section-subtitle">
            Each capability block below presents core technical behavior, operational differentiators, and
            validated product evidence from mobile and web workflows.
          </p>

          <div className="capability-stack">
            {sections.map((section) => (
              <article key={section.id} className="capability-card">
                <header className="capability-header">
                  <h3>{section.title}</h3>
                  <p className="capability-outcome">{section.outcome}</p>
                </header>

                <p>{section.description}</p>

                <h4>Koru Differentiators</h4>
                <ul className="bullet-list">
                  {section.differentiators.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="proof-grid proof-grid-primary">
                  {section.heroProof.map((proof) => (
                    <figure key={`${section.id}-${proof.label}`} className="screenshot-card evidence-card">
                      <img
                        src={proof.src}
                        alt={`${proof.platform} evidence screen: ${proof.label}.`}
                        className={proof.platform === 'Mobile' ? 'evidence-image-mobile' : 'evidence-image-web'}
                        loading="lazy"
                      />
                      <figcaption>{proof.platform} proof: {proof.label}</figcaption>
                    </figure>
                  ))}
                </div>

                <details className="proof-expander">
                  <summary>View complete evidence set ({section.expandedProof.length} additional screens)</summary>
                  <div className="proof-grid proof-grid-expanded">
                    {section.expandedProof.map((proof) => (
                      <figure key={`${section.id}-expanded-${proof.label}`} className="screenshot-card evidence-card">
                        <img
                          src={proof.src}
                          alt={`${proof.platform} evidence screen: ${proof.label}.`}
                          className={proof.platform === 'Mobile' ? 'evidence-image-mobile' : 'evidence-image-web'}
                          loading="lazy"
                        />
                        <figcaption>{proof.platform} evidence: {proof.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2>In Rollout Capabilities</h2>
          <ul className="bullet-list">
            {inRolloutFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
