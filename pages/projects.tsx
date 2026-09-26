import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-4 max-w-4xl secondary-text">Enterprise data security, cloud integrations, platform modernization, and earlier application development work. <span className="whitespace-nowrap">Each project describes</span> my role, responsibilities, and technologies.</p>

      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} headingLevel="h2" />
        ))}
      </div>
    </section>
  )
}
