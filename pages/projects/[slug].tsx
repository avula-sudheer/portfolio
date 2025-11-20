import { GetStaticPaths, GetStaticProps } from 'next'
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
          <div className="mt-2 text-slate-700">{project.details}</div>
          <div className="mt-4 text-sm text-slate-500">Tech: {project.tech.join(', ')}</div>
          {project.link && (
            <div className="mt-3">
              <a href={project.link} target="_blank" rel="noreferrer" className="underline">Visit project</a>
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
