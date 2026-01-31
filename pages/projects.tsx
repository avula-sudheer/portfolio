import resume from '../data/resume'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Professional Projects</h2>
      <p className="mt-4 secondary-text">Here's a collection of projects I've worked on. Click on each one to explore the details, including my responsibilities and the tech stack used.</p>

      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
