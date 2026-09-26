import resume from '../data/resume'
import Timeline from '../components/Timeline'
import Head from 'next/head'

const personLD = (r: typeof resume) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: r.name,
  email: `mailto:${r.email}`,
  jobTitle: r.headline,
  url: r.linkedin,
  address: {
    "@type": "PostalAddress",
    addressLocality: r.location
  },
  alumniOf: r.education.school,
  sameAs: [r.linkedin]
})

export default function Resume() {
  const items = resume.experience.map((e) => ({
    title: `${e.role} — ${e.company}`,
    date: `${e.start} — ${e.end}`,
    details: e.bullets && e.bullets[0],
  }))

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLD(resume)) }} />
      </Head>
    <section>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{resume.name}</h1>
          <div className="mt-1 secondary-text">{resume.headline}</div>
          <div className="mt-2 text-sm secondary-text break-words">{resume.location} · <a href={`mailto:${resume.email}`} className="underline">{resume.email}</a></div>
        </div>
        <div className="text-sm">
          <a
            href="/Sudheer-Avula.pdf"
            className="button-secondary"
            download
          >
            Download PDF
          </a>
        </div>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Timeline</h2>
      <Timeline items={items} />

      <h2 className="mt-8 text-2xl font-semibold">Experience</h2>
      <div className="mt-4 space-y-6">
        {resume.experience.map((exp) => (
          <div key={exp.company}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <div className="font-semibold">{exp.role} — {exp.company}</div>
                <div className="text-sm secondary-text">{exp.location}</div>
              </div>
              <div className="text-sm secondary-text">{exp.start} — {exp.end}</div>
            </div>
            <ul className="mt-2 list-disc list-inside secondary-text">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Education</h2>
      <div className="mt-2 secondary-text">
        <div className="font-semibold">{resume.education.school}</div>
        <div className="text-sm">{resume.education.degree} · {resume.education.start} — {resume.education.end}</div>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Awards & Recognitions</h2>
      <div className="mt-2 space-y-3 secondary-text">
        {resume.awards.map((a) => (
          <div key={a.title}>
            <div className="font-semibold">{a.title}</div>
            <div className="text-sm">{a.description}</div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
