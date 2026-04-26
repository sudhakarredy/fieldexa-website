import { PageSection } from '../components/PageSection'
import { corePillars, inRolloutFeatures } from '../content'

export function SolutionsPage() {
  return (
    <>
      <PageSection
        eyebrow="Solutions"
        title="Integrated Solutions for Farm Services, Traceability, and Analytics"
        subtitle="Structured for agri enterprises, contract farming companies, and FPO-led operations."
      >
        <div className="cards-grid">
          {corePillars.map((pillar) => (
            <article key={pillar.title} className="info-card">
              <h2>{pillar.title}</h2>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <section className="page-section page-section-muted">
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
