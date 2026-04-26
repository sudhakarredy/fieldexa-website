import { PageSection } from '../components/PageSection'
import { corePillars, inRolloutFeatures, solutionTracks } from '../content'
import farmersImage from '../assets/koru/farmers.jpg'
import agreementsImage from '../assets/koru/agreements.jpg'

export function SolutionsPage() {
  return (
    <>
      <PageSection
        eyebrow="Solutions"
        title="Integrated Solutions for Farm Services, Traceability, and Analytics"
        subtitle="Structured for agriculture enterprises that need one operating layer across farmer records, field execution, and traceability workflows."
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
        <div className="container cards-grid">
          {solutionTracks.map((track) => (
            <article key={track.title} className="info-card">
              <h2>{track.title}</h2>
              <p>{track.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2>Koru Workflow Snapshots</h2>
          <p className="section-subtitle">
            Representative application screens from current FIELDexa workflows, selected to support the
            published operating-record and agreement-management claims.
          </p>
          <div className="screenshot-grid">
            <figure className="screenshot-card">
              <img src={farmersImage} alt="Koru farmers list with searchable grower records." />
              <figcaption>
                Farmer records remain searchable and structured so teams can move from onboarding into
                downstream operations without disconnected lists.
              </figcaption>
            </figure>
            <figure className="screenshot-card">
              <img src={agreementsImage} alt="Koru farm agreements screen showing active agreement records." />
              <figcaption>
                Agreement workflows connect seasonal terms, status, and linked operating context in one
                operational view.
              </figcaption>
            </figure>
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
