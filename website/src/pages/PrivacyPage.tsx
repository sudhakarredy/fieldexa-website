import { PageSection } from '../components/PageSection'

export function PrivacyPage() {
  return (
    <PageSection
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      subtitle="How FIELDexa collects, uses, stores, and protects information submitted through this website."
    >
      <article className="info-card">
        <p>
          Last updated: April 26, 2026. This policy applies to the public FIELDexa website and
          explains how we handle personal information shared through our pages, forms, and related
          communications.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect information you provide directly, including your name, email address,
          company name, and any message you submit when requesting a demo or contacting FIELDexa.
          We may also receive limited technical data from hosting and security providers, such as IP
          address, browser type, and request metadata used to keep the website available and secure.
        </p>

        <h2>How We Use Information</h2>
        <p>We use submitted information to:</p>
        <ul>
          <li>Respond to demo requests and inbound questions.</li>
          <li>Operate, secure, and improve the website experience.</li>
          <li>Maintain records of business communications and support follow-up conversations.</li>
          <li>Comply with legal obligations or protect the rights, safety, and security of FIELDexa.</li>
        </ul>

        <h2>How We Share Information</h2>
        <p>
          FIELDexa does not sell personal information submitted through this website. We may share
          information with service providers that help us host the website, process form submissions,
          or support communications, but only for business purposes consistent with this policy.
          We may also disclose information when required by law or to protect FIELDexa, our users,
          or the public.
        </p>

        <h2>Retention and Security</h2>
        <p>
          We retain website inquiry information for as long as reasonably necessary to respond to your
          request, support business records, resolve disputes, and satisfy legal obligations. FIELDexa
          uses administrative, technical, and organizational safeguards designed to protect personal
          information, but no transmission or storage system can be guaranteed to be fully secure.
        </p>

        <h2>Your Choices</h2>
        <p>
          You may contact FIELDexa to request access to, correction of, or deletion of information you
          previously submitted through this website, subject to applicable law and legitimate business
          recordkeeping requirements. If you no longer want to receive follow-up outreach, you may ask
          us to stop using your contact information for that purpose.
        </p>

        <h2>Cookies and Similar Technologies</h2>
        <p>
          This website may use essential cookies or similar technologies required for security,
          routing, and core site operation. Additional details are available in the Cookie Policy.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions or requests related to this website, contact FIELDexa at
          {' '}
          <a href="mailto:sales@fieldexa.com">sales@fieldexa.com</a>.
        </p>
      </article>
    </PageSection>
  )
}
