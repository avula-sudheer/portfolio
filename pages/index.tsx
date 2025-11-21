import Link from 'next/link'
import Hero from '../components/Hero'
import SimpleTerminal from '../components/SimpleTerminal'
import resume from '../data/resume'

function buildSummaryLines() {
  const lines: string[] = []
  lines.push(`Welcome to, ${resume.name}'s portal!`)
  if (resume.headline) lines.push(`Role: ${resume.headline}`)
  if (resume.location) lines.push(`Location: ${resume.location}`)
  if (resume.email) lines.push(`Contact: ${resume.email}`)

  // pick representative skills
  const skills: string[] = []
  const s = resume.skills
  if (s) {
    ;(Object.keys(s) as Array<keyof typeof s>).forEach((key) => {
      if (s[key] && s[key].length) skills.push(key)
    })
  }
  if (skills.length) lines.push(`Top skills: ${skills.join(', ')}`)

  if (resume.summary ) {
    lines.push(`Summary: ${resume.summary}`)
  }

  return lines
}

export default function Home() {
  const summaryLines = buildSummaryLines()

  return (
    <>
      {/* <Hero /> */}
      <section className="container mt-8">
        <div className="max-w-3xl mx-auto">
          <SimpleTerminal command="Hello" outputLines={summaryLines} height={300} />
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center">Explore</h3>
            <p className="text-center text-slate-600 mt-2">Quick links to important sections for navigation.</p>

            <nav aria-label="Primary site navigation" className="mt-4">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                <li>
                  <Link
                    href="/projects"
                    className="block p-4 bg-white dark:bg-slate-800 border rounded-lg hover:shadow-md transition-shadow"
                    aria-label="Projects"
                  >
                    <div className="text-2xl">📁</div>
                    <div className="mt-2 font-medium">Projects</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Projects, work highlights</div>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/tech-stack"
                    className="block p-4 bg-white dark:bg-slate-800 border rounded-lg hover:shadow-md transition-shadow"
                    aria-label="Tech Stack"
                  >
                    <div className="text-2xl">🧰</div>
                    <div className="mt-2 font-medium">Tech Stack</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Technical skills, certifications</div>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/resume"
                    className="block p-4 bg-white dark:bg-slate-800 border rounded-lg hover:shadow-md transition-shadow"
                    aria-label="Resume"
                  >
                    <div className="text-2xl">📄</div>
                    <div className="mt-2 font-medium">Resume</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Resume, CV</div>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="block p-4 bg-white dark:bg-slate-800 border rounded-lg hover:shadow-md transition-shadow"
                    aria-label="Blog"
                  >
                    <div className="text-2xl">📝</div>
                    <div className="mt-2 font-medium">Let's Connect</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Communication, Contact</div>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="block p-4 bg-white dark:bg-slate-800 border rounded-lg hover:shadow-md transition-shadow"
                    aria-label="About"
                  >
                    <div className="text-2xl">👤</div>
                    <div className="mt-2 font-medium">About</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Background, interests</div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}
