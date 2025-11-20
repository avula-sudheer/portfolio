import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type P = {
  project: {
    title: string
    summary: string
    slug: string
    tech?: string[]
    image?: string
    link?: string
  }
}

export default function ProjectCard({ project }: P) {
  return (
    <motion.article whileHover={{ y: -4 }} className="border rounded p-4 flex flex-col">
      {project.image && (
        <div className="w-full h-36 relative mb-3 rounded overflow-hidden" aria-hidden="true">
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" priority={false} />
        </div>
      )}
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="mt-2 text-slate-700 flex-1">{project.summary}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-slate-500">{project.tech?.join(' · ')}</div>
        <div className="flex gap-3 items-center">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>
          )}
          <Link href={`/projects/${project.slug}`} className="text-sm underline">Case study</Link>
        </div>
      </div>
    </motion.article>
  )
}
