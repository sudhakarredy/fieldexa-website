import { PageSection } from '../components/PageSection'

export function AboutPage() {
  return (
    <PageSection
      eyebrow="About FIELDexa"
      title="Grounded Intelligence for Agriculture"
      subtitle="FIELDexa combines field execution context with enterprise-grade data workflows for scalable agricultural operations."
    >
      <div className="info-card">
        <h2>Public Website Guardrails</h2>
        <p>
          This implementation uses first-party branding assets and documented product
          references from internal project documentation.
        </p>
      </div>
    </PageSection>
  )
}
