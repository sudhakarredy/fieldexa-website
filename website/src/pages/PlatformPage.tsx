import { PageSection } from '../components/PageSection'

const modules = [
  'Farmer and farm onboarding',
  'Agreement, input, and harvest workflows',
  'Field visit alerts and action tracking',
  'Role-based reporting and export readiness',
  'Mobile-assisted field operations',
]

export function PlatformPage() {
  return (
    <PageSection
      eyebrow="Platform"
      title="A Practical Platform for Field Operations at Scale"
      subtitle="This scaffold highlights module categories and will be expanded with screenshots and role-based journeys."
    >
      <div className="module-grid">
        {modules.map((module) => (
          <article key={module} className="info-card">
            <h2>{module}</h2>
            <p>Configured for multi-tenant workflows and operational accountability.</p>
          </article>
        ))}
      </div>
    </PageSection>
  )
}
