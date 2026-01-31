import { Github, Mail, Linkedin } from 'lucide-react'
import resume from '../data/resume'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 shadow-inner">
      <div className="container py-3 text-sm text-center flex items-center justify-between">
        <div>© {new Date().getFullYear()} Sudheer Avula — Built with love from homelabs</div>
        <div className="flex items-center gap-4">
          {resume.github && (
            <a href={resume.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          )}
          {resume.email && (
            <a href={`mailto:${resume.email}`} aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          )}
          {resume.linkedin && (
            <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}