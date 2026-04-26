import { PageSection } from '../components/PageSection'

const impactAreas = [
  'Farmer livelihood and market readiness',
  'Actionable field visibility for management teams',
  'Traceability confidence for downstream stakeholders',
  'Operational efficiency across distributed teams',
]

export function ImpactPage() {
  return (
    <PageSection
      eyebrow="Impact"
      title="Operational Impact You Can Validate"
      subtitle="All public impact statements should be tied to evidence in the claims matrix before release."
    >
      <div className="cards-grid">
        {impactAreas.map((item) => (
          <article key={item} className="info-card">
            <h2>{item}</h2>
            <p>Publish quantified results only after internal review and formal approval.</p>
          </article>
        ))}
      </div>
    </PageSection>
  )
}
