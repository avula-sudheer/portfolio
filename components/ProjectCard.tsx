import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type P = {
  project: {
    title: string
    description: string
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
      <p className="mt-2 text-slate-700 flex-1">{project.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link href={`/projects/${project.slug}`} className="text-sm px-2 py-1 border rounded border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 inline-flex items-center">More details...</Link>
        </div>
      </div>
    </motion.article>
  )
}
