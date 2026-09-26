import { Mail, Linkedin, MapPin } from 'lucide-react'
import resume from '../data/resume'

export default function Contact() {

  return (
    <section>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 secondary-text max-w-2xl">For conversations about enterprise data security, platform engineering, or technical leadership, reach me by email or LinkedIn.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-5 h-5 text-slate-900 dark:text-slate-100" />
            <h3 className="text-lg font-semibold">Email</h3>
          </div>
          <p className="mt-2 secondary-text">Prefer email? Send a message directly.</p>
          <a href={`mailto:${resume.email}`} className="text-link mt-3 break-words inline-block">{resume.email}</a>
        </div>

        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <Linkedin className="w-5 h-5 text-slate-900 dark:text-slate-100" />
            <h3 className="text-lg font-semibold">LinkedIn</h3>
          </div>
          <p className="mt-2 secondary-text">Connect with me on LinkedIn for updates and networking.</p>
          <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="text-link mt-3 break-words inline-block">Connect on LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span></a>
        </div>

        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-slate-900 dark:text-slate-100" />
            <h3 className="text-lg font-semibold">Location</h3>
          </div>
          <p className="mt-2 secondary-text">Based in:</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resume.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link mt-3 break-words inline-block"
          >
            {resume.location} ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

    </section>
  )
}
