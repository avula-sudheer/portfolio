import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import projects from '../../data/projects'

export default function ProjectCase({ project }: { project: any }) {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{project.title}</h1>
          
          <div className="mt-2 secondary-text">{project.description}</div>

          {project.role && (
            
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Role</h2>
              <div className="mt-1 secondary-text">{project.role}</div>
            </div>
          )}
          
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Responsibilities</h2>
              <ul className="mt-2 list-disc list-inside secondary-text">
                {project.responsibilities.map((r: string, i: number) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          <h2 className="mt-8 text-2xl font-semibold">Technologies</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech?.map((t: string) => (
              <span key={t} className="text-sm px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">{t}</span>
            ))}
          </div>
          {project.link && (
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="button-primary" aria-label={`Read more about ${project.title} (opens in new tab)`}>
                Read more about this project ↗
                <span className="sr-only">(opens in new tab)</span>
              </a>

              <Link href="/projects" className="button-secondary">← All projects</Link>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((p) => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug)
  return { props: { project } }
}
