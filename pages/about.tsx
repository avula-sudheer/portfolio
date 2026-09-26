import resume from '../data/resume'

export default function About() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">About Sudheer Avula</h1>
      <p className="mt-3 text-lg secondary-text">{resume.headline} · {resume.location}</p>
      <p className="mt-5 secondary-text leading-relaxed">{resume.summary}</p>

      <section className="mt-10" aria-labelledby="background-heading">
        <h2 id="background-heading" className="text-2xl font-semibold">Engineering background</h2>
        <p className="mt-4 secondary-text leading-relaxed">My experience spans enterprise applications, endpoint management, data protection, and cloud platforms. My recent work includes Java service modernization, Kubernetes deployments, encryption workflows, secure cloud integrations, and tokenization services.</p>
        <p className="mt-4 secondary-text leading-relaxed">Earlier in my career, I worked on software distribution, endpoint agent updates, enterprise portals, and business systems. That progression shaped my focus on reliable distributed systems and practical engineering decisions.</p>
      </section>

      <section className="mt-10" aria-labelledby="leadership-heading">
        <h2 id="leadership-heading" className="text-2xl font-semibold">Technical leadership</h2>
        <p className="mt-4 secondary-text leading-relaxed">I lead through architecture reviews, performance tuning, threat modeling, and mentoring. I value clear technical direction, curiosity, and giving engineers room to ask questions, explore solutions, and build confidence.</p>
      </section>

    </section>
  )
}
