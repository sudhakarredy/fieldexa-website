import type { PropsWithChildren } from 'react'

type PageSectionProps = PropsWithChildren<{
  eyebrow?: string
  title: string
  subtitle?: string
}>

export function PageSection({
  eyebrow,
  title,
  subtitle,
  children,
}: PageSectionProps) {
  return (
    <section className="page-section">
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  )
}