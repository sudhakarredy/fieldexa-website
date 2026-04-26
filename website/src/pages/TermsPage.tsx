import { PageSection } from '../components/PageSection'

export function TermsPage() {
  return (
    <PageSection
      eyebrow="Terms of Use"
      title="Terms of Use"
      subtitle="Terms governing access to and use of the public FIELDexa website."
    >
      <article className="info-card">
        <p>
          Last updated: April 26, 2026. By accessing or using the FIELDexa website, you agree to
          these terms. If you do not agree, do not use the website.
        </p>

        <h2>Permitted Use</h2>
        <p>
          You may use this website to learn about FIELDexa, review our public materials, and contact
          us regarding legitimate business interest. You agree not to misuse the website, interfere
          with its operation, attempt unauthorized access, or use the site in violation of applicable
          law.
        </p>

        <h2>Website Content</h2>
        <p>
          Unless otherwise stated, website content, design, branding, text, and materials are owned
          by FIELDexa or used with permission. These materials are provided for informational and
          business evaluation purposes. No right, title, or license is granted except as necessary to
          view the website in the ordinary course of use.
        </p>

        <h2>Submissions</h2>
        <p>
          If you submit a form or send information through the website, you represent that the
          information is accurate and that you have the right to provide it. Do not submit confidential
          information unless FIELDexa has agreed in writing to receive and protect it.
        </p>

        <h2>Third-Party Services and Links</h2>
        <p>
          The website may rely on third-party services for hosting, performance, or communication
          delivery. Links to third-party websites are provided for convenience only. FIELDexa is not
          responsible for the content, privacy practices, or availability of third-party properties.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The website is provided on an "as is" and "as available" basis. FIELDexa makes no warranty,
          express or implied, regarding uninterrupted availability, accuracy, completeness, or fitness
          for a particular purpose. Public website content does not create contractual commitments
          unless expressly included in a signed written agreement.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, FIELDexa will not be liable for indirect,
          incidental, special, consequential, or punitive damages arising out of or related to your use
          of the website. If applicable law does not allow certain limitations, those limitations apply
          only to the extent permitted.
        </p>

        <h2>Changes and Contact</h2>
        <p>
          FIELDexa may update these terms from time to time by posting a revised version on this
          page. For questions about these terms, contact
          {' '}
          <a href="mailto:sales@fieldexa.com">sales@fieldexa.com</a>.
        </p>
      </article>
    </PageSection>
  )
}
