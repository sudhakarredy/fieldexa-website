import { PageSection } from '../components/PageSection'
import { impactStories } from '../content'

export function ImpactPage() {
  return (
    <>
      <PageSection
        eyebrow="Impact"
        title="Operational Impact Grounded in Better Execution"
        subtitle="FIELDexa focuses on the workflow foundation teams need before they make stronger performance claims, forecast outcomes, or expand program scale."
      >
        <div className="cards-grid">
          {impactStories.map((story) => (
            <article key={story.title} className="info-card">
              <h2>{story.title}</h2>
              <p>{story.description}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <section className="page-section page-section-muted">
        <div className="container">
          <h2>Evidence Discipline</h2>
          <p className="section-subtitle">
            FIELDexa does not publish impact percentages, yield claims, or customer-specific outcomes on
            the public site unless they are documented, reviewed, and approved for release.
          </p>
        </div>
      </section>
    </>
  )
}
