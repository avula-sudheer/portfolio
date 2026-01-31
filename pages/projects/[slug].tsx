import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import projects from '../../data/projects'
import Image from 'next/image'

export default function ProjectCase({ project }: { project: any }) {
  return (
    <section>
      <div className="flex items-start gap-6">
        {project.image && (
          <div className="w-64 h-40 relative rounded overflow-hidden border">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold">{project.title}</h1>
          
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

          <h3 className="mt-4 text-lg font-semibold">Technologies</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech?.map((t: string) => (
              <span key={t} className="text-sm px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">{t}</span>
            ))}
          </div>
          {project.link && (
            <div className="mt-6 flex items-center gap-4">
              <a href={project.link}  target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-900 text-white rounded inline-flex items-center gap-2" aria-label={`Visit ${project.title} (opens in new tab)`}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14" />
                </svg>
                Visit project
                <span className="sr-only">(opens in new tab)</span>
              </a>

              <Link href="/projects" className="px-4 py-2 bg-slate-900 text-white rounded inline-flex items-center gap-2">← Back to projects</Link>
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
