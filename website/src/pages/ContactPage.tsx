import { useState } from 'react'
import type { FormEvent } from 'react'
import { PageSection } from '../components/PageSection'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(false)
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      honeypot: String(formData.get('website') ?? '').trim(),
    }

    if (payload.honeypot) {
      return
    }

    if (!payload.name || !payload.email || !payload.company || !payload.message) {
      setError('Please complete all required fields before submitting.')
      return
    }

    const endpoint = import.meta.env.VITE_DEMO_FORM_ENDPOINT || '/api/demo'

    try {
      setSubmitting(true)
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => ({
          error: 'Unable to submit right now. Please try again in a few minutes.',
        }))
        setError(result.error ?? 'Unable to submit your request right now.')
        return
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError('Network error while submitting your request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageSection
      eyebrow="Book a Demo"
      title="Talk to the FIELDexa Team"
      subtitle="Demo requests are routed through a secure endpoint and delivered to the approved company inbox."
    >
      <form className="demo-form" onSubmit={handleSubmit}>
        <label className="sr-only" aria-hidden="true">
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Full Name
          <input type="text" name="name" required />
        </label>
        <label>
          Work Email
          <input type="email" name="email" required />
        </label>
        <label>
          Company
          <input type="text" name="company" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit" className="cta-button" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Demo Request'}
        </button>
      </form>
      {error ? <p className="form-error">{error}</p> : null}
      {submitted ? (
        <p className="form-success">
          Request submitted successfully. Our team will contact you shortly.
        </p>
      ) : null}
    </PageSection>
  )
}
