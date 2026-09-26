import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/tech-stack', label: 'Expertise' },
  { href: '/about', label: 'About' },
  { href: '/background', label: 'Personal Story' },
  { href: '/resume', label: 'Resume' },
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
            onClick={() => setOpen(!open)} className="lg:hidden rounded border border-slate-300 dark:border-slate-600 px-3 py-2 text-sm">{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile" hidden={!open} className="lg:hidden border-t border-slate-200 dark:border-slate-800"
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
