import { PageSection } from '../components/PageSection'
import { caseStudyStories } from '../content'

export function CaseStudiesPage() {
  return (
    <PageSection
      eyebrow="Case Studies"
      title="Anonymized Workflow Stories"
      subtitle="Illustrative scenarios show how FIELDexa can support operations without disclosing customer identity, confidential data, or unapproved performance claims."
    >
      <div className="cards-grid">
        {caseStudyStories.map((story) => (
          <article key={story.title} className="info-card">
            <h2>{story.title}</h2>
            <p>{story.summary}</p>
          </article>
        ))}
      </div>
    </PageSection>
  )
}
