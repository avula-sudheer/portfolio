import Link from 'next/link'
import Image from 'next/image'
import resume from '../data/resume'

export default function Hero() {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center pb-6 sm:pb-8">
      <div className="order-2 lg:order-1 lg:col-start-1 lg:row-start-1">
        <p className="text-sm font-medium text-teal-700 dark:text-teal-300">{resume.headline} · {resume.location}</p>
        <h1 className="mt-3 whitespace-nowrap text-4xl sm:text-5xl font-semibold tracking-tight leading-none">Sudheer Avula<span className="text-teal-700 dark:text-teal-300">.</span></h1>
        <p className="mt-4 max-w-xl text-lg sm:text-xl leading-relaxed">I design secure, cloud-native systems for enterprise data.</p>
        <p className="mt-3 max-w-xl text-sm sm:text-base secondary-text leading-relaxed">I focus on encryption, tokenization, secure cloud integrations, and distributed systems.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/projects" className="button-primary">View projects <span aria-hidden="true" className="ml-2">→</span></Link>
          <Link href="/resume" className="button-secondary">View Resume</Link>
        </div>
      </div>
      <div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1 relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm aspect-[16/10]">
        <Image src="/images/sudheer-hero.png" alt="Sudheer Avula in a professional office setting" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
      </div>
    </section>
  )
}
