import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/about', label: 'About' },
    { href: '/tech-stack', label: 'Tech Stack' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-semibold">Sudheer Avula</Link>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <nav aria-label="Primary Navigation" className="hidden md:block">
            <ul className="flex gap-4 items-center">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label={`${l.label} page`}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md border"
            >
              <span className="sr-only">Toggle menu</span>
              {/* simple hamburger */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M3 12h18M3 6h18M3 18h18'} />
              </svg>
            </button>
          </div>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="container py-3">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-4 py-3 rounded hover:bg-slate-50 dark:hover:bg-slate-800"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
