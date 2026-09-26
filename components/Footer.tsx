import { Github, Mail, Linkedin } from 'lucide-react'
import resume from '../data/resume'
import { useEffect, useRef } from 'react'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return
    const updateHeight = () => {
      document.documentElement.style.setProperty('--footer-height', `${footer.getBoundingClientRect().height}px`)
    }
    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(footer)
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--footer-height')
    }
  }, [])

  return (
    <footer ref={footerRef} style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} className="fixed bottom-0 inset-x-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-inner">
      <div className="container py-3 text-sm flex flex-col gap-4 sm:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} Sudheer Avula</div>
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