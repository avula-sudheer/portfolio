import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // initialize on client
  useEffect(() => {
    setMounted(true)
    try {
      const saved = typeof window !== 'undefined' ? (localStorage.getItem('theme') as 'light' | 'dark' | null) : null
      const prefersDark = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
      const initial = saved ?? (prefersDark ? 'dark' : 'light')
      setTheme(initial)
    } catch (e) {
      // ignore storage errors
    }
  }, [])

  // keep document class and localStorage in sync with theme state
  useEffect(() => {
    if (typeof document === 'undefined') return
    try {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      localStorage.setItem('theme', theme)
    } catch (e) {
      // ignore
    }
  }, [theme])

  const toggle = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  if (!mounted) return null

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="px-2 py-1 border rounded">
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
