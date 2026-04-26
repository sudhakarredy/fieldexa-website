import { PageSection } from '../components/PageSection'

export function CookiePolicyPage() {
  return (
    <PageSection
      eyebrow="Cookie Policy"
      title="Cookie Policy"
      subtitle="How FIELDexa uses cookies and similar technologies on the public website."
    >
      <article className="info-card">
        <p>
          Last updated: April 26, 2026. This Cookie Policy explains the technologies FIELDexa may use
          to operate, secure, and improve the public website.
        </p>

        <h2>What Cookies Are</h2>
        <p>
          Cookies are small data files stored on your device when you visit a website. Similar
          technologies can include local storage, pixels, and server-side identifiers that help a site
          remember session details or understand technical behavior.
        </p>

        <h2>How FIELDexa Uses Cookies</h2>
        <p>FIELDexa may use essential technologies to:</p>
        <ul>
          <li>Support secure website delivery and request routing.</li>
          <li>Maintain core functionality such as form submission handling.</li>
          <li>Detect abuse, spam, or operational issues affecting availability.</li>
        </ul>

        <h2>Analytics and Optional Technologies</h2>
        <p>
          At launch, FIELDexa primarily relies on technologies needed for core website operation. If
          analytics, personalization, or marketing technologies are introduced later, this policy will
          be updated to describe them and any required consent choices.
        </p>

        <h2>Your Browser Choices</h2>
        <p>
          Most browsers allow you to review, block, or delete cookies through browser settings. If you
          disable essential cookies or similar technologies, some website functions may not work as
          expected.
        </p>

        <h2>Updates and Contact</h2>
        <p>
          FIELDexa may update this policy as our website evolves. For questions about cookie use on
          this website, contact
          {' '}
          <a href="mailto:sales@fieldexa.com">sales@fieldexa.com</a>.
        </p>
      </article>
    </PageSection>
  )
}
