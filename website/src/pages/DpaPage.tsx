import { PageSection } from '../components/PageSection'

export function DpaPage() {
  return (
    <PageSection
      eyebrow="Data Processing Addendum"
      title="Data Processing Addendum"
      subtitle="Overview of FIELDexa's approach to data processing terms for customers and partners."
    >
      <article className="info-card">
        <p>
          Last updated: April 26, 2026. FIELDexa can provide a contractual Data Processing Addendum
          where required for customer or partner relationships involving regulated personal data. This
          page is a public summary only and does not by itself create a binding agreement.
        </p>

        <h2>When a DPA Applies</h2>
        <p>
          A DPA is typically used when FIELDexa processes personal data on behalf of a customer or
          partner under an underlying commercial agreement. The signed agreement and any applicable DPA
          define the parties' roles, instructions, and responsibilities.
        </p>

        <h2>Processing Scope</h2>
        <p>
          Depending on the services in use, processing may include business contact information,
          operational records, support communications, and other customer-controlled data required to
          deliver agreed services. Specific categories and purposes are documented in the governing
          contract.
        </p>

        <h2>Security and Subprocessors</h2>
        <p>
          FIELDexa uses technical and organizational measures designed to protect personal data and may
          engage trusted subprocessors for hosting, infrastructure, communications, or support.
          Subprocessor use is governed by contractual controls and reasonable security expectations.
        </p>

        <h2>Data Subject Requests and Assistance</h2>
        <p>
          Where required by law and contract, FIELDexa will provide reasonable assistance to customers
          responding to valid data subject requests, security reviews, and incident-related inquiries,
          taking into account the nature of the processing and the information available to FIELDexa.
        </p>

        <h2>Request a DPA</h2>
        <p>
          To request FIELDexa's current DPA form or begin a privacy review, contact
          {' '}
          <a href="mailto:sales@fieldexa.com">sales@fieldexa.com</a>.
        </p>
      </article>
    </PageSection>
  )
}
