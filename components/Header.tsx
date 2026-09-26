import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/projects', label: 'Project' },
  { href: '/tech-stack', label: 'Expertise' },
  { href: '/resume', label: 'Resume' },
  { href: '/publications', label: 'Publications' },
  { href: '/background', label: 'Story' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { asPath } = useRouter()
  useEffect(() => { setOpen(false) }, [asPath])
  const active = (href: string) => href.includes('#') ? asPath === href : href === '/' ? asPath === '/' : asPath.split(/[?#]/)[0] === href || asPath.startsWith(`${href}/`)
  const navLinks = links.map((link) => (
    <li key={link.href}>
      <Link href={link.href} aria-current={active(link.href) ? 'page' : undefined}
        onClick={() => setOpen(false)}
        className={`block rounded px-3 py-2 text-sm font-medium transition-colors ${active(link.href) ? 'bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
        {link.label}
      </Link>
    </li>
  ))
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="container flex min-h-16 items-center justify-between gap-3 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>Sudheer Avula</Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden lg:block"><ul className="flex items-center">{navLinks}</ul></nav>
          <ThemeToggle />
          <button type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)} className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 dark:border-slate-600 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="sr-only">{open ? 'Close' : 'Open'} menu</span>
            {open ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile" aria-hidden={!open} className={`lg:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-[max-height,opacity] duration-200 ease-out ${open ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'}`}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false)
            document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus()
          }
        }}>
        <ul className="container py-3 space-y-1">{navLinks}</ul>
      </nav>
    </header>
  )
}
