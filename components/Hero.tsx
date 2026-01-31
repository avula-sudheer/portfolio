import { motion } from 'framer-motion'
import Link from 'next/link'
import resume from '../data/resume'

export default function Hero() {
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="py-12">
      <div className="container">
        <h1 className="text-4xl sm:text-5xl font-extrabold">{resume.name}</h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-100">{resume.headline}</p>

        <div className="mt-6 flex gap-3 items-center">
          <Link href="/projects" className="px-4 py-2 bg-slate-900 text-white rounded shadow-sm">See projects</Link>
          <Link href="/resume" className="px-4 py-2 border rounded">View resume</Link>
        </div>
      </div>
    </motion.section>
  )
}
