type DemoPayload = {
  name?: string
  email?: string
  company?: string
  message?: string
  honeypot?: string
}

type Env = {
  RESEND_API_KEY?: string
  CONTACT_TO_EMAIL?: string
  CONTACT_FROM_EMAIL?: string
}

function badRequest(error: string, status = 400) {
  return new Response(JSON.stringify({ error }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const onRequestPost = async (context: {
  request: Request
  env: Env
}) => {
  const { request, env } = context

  let payload: DemoPayload
  try {
    payload = await request.json<DemoPayload>()
  } catch {
    return badRequest('Invalid request payload.')
  }

  const name = (payload.name ?? '').trim()
  const email = (payload.email ?? '').trim()
  const company = (payload.company ?? '').trim()
  const message = (payload.message ?? '').trim()
  const honeypot = (payload.honeypot ?? '').trim()

  if (honeypot) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  if (!name || !email || !company || !message) {
    return badRequest('All required fields must be provided.')
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return badRequest('Mail service is not configured.', 500)
  }

  const fromAddress = env.CONTACT_FROM_EMAIL || 'noreply@fieldexa.com'
  const subject = `FIELDexa Demo Request from ${name}`

  const text = [
    'New demo request from fieldexa.com',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    '',
    'Message:',
    message,
  ].join('\n')

  const html = `
    <h2>New demo request from fieldexa.com</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      text,
      html,
    }),
  })

  if (!resendResponse.ok) {
    const detail = await resendResponse.text()
    return badRequest(`Email delivery failed. ${detail}`, 502)
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
