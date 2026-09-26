import Link from 'next/link'
import Hero from '../components/Hero'

const destinations = [
  { href: '/projects', label: 'Projects', description: 'Selected engineering work and responsibilities.' },
  { href: '/tech-stack', label: 'Expertise', description: 'Technologies, security domains, and certifications.' },
  { href: '/background', label: 'Personal Story', description: 'Personal background, values, and leadership approach.' },
]

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <section className="border-t border-slate-200 dark:border-slate-700 py-5 sm:py-6" aria-labelledby="focus-heading">
        <h2 id="focus-heading" className="text-sm uppercase tracking-widest font-semibold">What I work on</h2>
        <p className="mt-3 max-w-3xl text-lg sm:text-xl leading-relaxed">Enterprise data security, secure cloud integrations, and distributed systems.</p>
      </section>
      <section className="border-t border-slate-200 dark:border-slate-700 py-5 sm:py-6" aria-labelledby="explore-heading">
        <h2 id="explore-heading" className="text-sm uppercase tracking-widest font-semibold">Explore</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {destinations.map((destination) => (
            <Link key={destination.href} href={destination.href} className="group rounded-lg border border-slate-200 dark:border-slate-700 p-4 hover:border-teal-600 dark:hover:border-teal-300 transition-colors">
              <h3 className="text-base font-semibold group-hover:text-teal-700 dark:group-hover:text-teal-300">{destination.label} <span aria-hidden="true">→</span></h3>
              <p className="mt-1 text-sm secondary-text leading-snug">{destination.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-t border-slate-200 dark:border-slate-700 py-4 sm:py-5" aria-labelledby="publication-heading">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="publication-heading" className="text-base font-semibold">Journal publications</h2>
          <Link href="/publications" className="text-link text-sm">View publications →</Link>
        </div>
        <p className="mt-1 text-sm secondary-text leading-relaxed">Research on MFA containment and accountable disclosure of sensitive data.</p>
      </section>
    </div>
  )
}
