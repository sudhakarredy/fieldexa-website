import { PageSection } from '../components/PageSection'

export function CaseStudiesPage() {
  return (
    <PageSection
      eyebrow="Case Studies"
      title="Anonymized Workflow Stories"
      subtitle="Customer-identifying details are intentionally withheld until publishing approvals are complete."
    >
      <div className="cards-grid">
        <article className="info-card">
          <h2>Cluster Alert Response Workflow</h2>
          <p>From field issue capture to coordinated mass action management.</p>
        </article>
        <article className="info-card">
          <h2>Traceability Record Preparation</h2>
          <p>Data pathways that support verifiable operational records.</p>
        </article>
        <article className="info-card">
          <h2>Input to Harvest Visibility</h2>
          <p>Linked operational events to improve season-level planning confidence.</p>
        </article>
      </div>
    </PageSection>
  )
}
