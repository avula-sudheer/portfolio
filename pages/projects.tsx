import resume from '../data/resume'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Selected Projects</h2>
      <p className="mt-4 text-slate-700">Case studies and project highlights derived from your experience. Click any item to read the full case study.</p>

      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
