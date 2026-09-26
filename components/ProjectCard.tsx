import Link from 'next/link'
import type { projects } from '../data/projects'

type Props = { project: (typeof projects)[number]; headingLevel?: 'h2' | 'h3' }

export default function ProjectCard({ project, headingLevel: Heading = 'h3' }: Props) {
  return (
    <article className="flex flex-col rounded-lg border border-slate-200 dark:border-slate-700 p-5">
      <p className="text-sm secondary-text">{project.role}</p>
      <Heading className="mt-3 text-xl font-semibold leading-snug">
        <Link href={`/projects/${project.slug}`} className="hover:underline underline-offset-4">{project.title}</Link>
      </Heading>
      <p className="mt-2 text-sm secondary-text leading-relaxed flex-1">{project.contribution}</p>
      <ul aria-label="Selected technologies" className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs secondary-text">
        {project.tech.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
      <Link href={`/projects/${project.slug}`} className="text-link text-sm mt-5 self-start">View project<span className="sr-only">: {project.title}</span> →</Link>
    </article>
  )
}
