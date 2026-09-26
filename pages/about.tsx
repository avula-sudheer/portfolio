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

      <section className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8" aria-labelledby="values-heading">
        <h2 id="values-heading" className="text-2xl font-semibold">Personal values</h2>
        <p className="mt-4 secondary-text leading-relaxed">My interest in engineering began with a love of math and problem solving. As a parent and mentor, patience, empathy, and responsibility shape how I collaborate and support other people’s growth.</p>
      </section>

      <section className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8" aria-labelledby="personal-heading">
        <h2 id="personal-heading" className="text-2xl font-semibold">A little more about me</h2>
        <p className="mt-4 secondary-text leading-relaxed">Growing up as the eldest child taught me responsibility, resilience, and independence. Early setbacks—including losing my baggage and passport on the day of my GRE exam and being denied entry to a technical entrance exam—strengthened my accountability and self-motivation.</p>
        <p className="mt-4 secondary-text leading-relaxed">Those experiences, along with my curiosity about math, logic, and the real-world impact of engineering, led me toward computer science. Today, the roles I hold as a parent, mentor, and engineer continue to shape how I work with patience, empathy, and purpose.</p>
      </section>
    </section>
  )
}
