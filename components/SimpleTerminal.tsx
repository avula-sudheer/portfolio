import React, { useEffect, useState } from 'react'

type Props = {
  command?: string
  outputLines: string[]
  height?: number | string
}

export default function SimpleTerminal({ command = 'welcome', outputLines, height = 200 }: Props) {
  const [display, setDisplay] = useState('')
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null
    const initial = mq ? mq.matches : false
    setPrefersReduced(initial)
    const onChange = () => setPrefersReduced(!!mq?.matches)
    mq?.addEventListener?.('change', onChange)
    return () => mq?.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    if (prefersReduced) {
      setDisplay([`$ ${command}`, ...outputLines].join('\n'))
      return
    }

    let mounted = true
    const lines = [`$ ${command}`, ...outputLines]
    let lineIndex = 0
    let charIndex = 0

    const step = () => {
      if (!mounted) return
      const current = lines[lineIndex]
      if (charIndex <= current.length) {
        setDisplay((prev) => {
          // replace last line while typing
          const parts = prev.split('\n')
          parts[lineIndex] = current.slice(0, charIndex)
          return parts.join('\n')
        })
        charIndex += 1
        setTimeout(step, 18)
      } else {
        // move to next line after small pause
        lineIndex += 1
        charIndex = 0
        if (lineIndex < lines.length) {
          setDisplay((prev) => prev + '\n')
          setTimeout(step, 300)
        }
      }
    }

    // initialize display with empty lines
    setDisplay(lines.map(() => '').join('\n'))
    setTimeout(step, 300)

    return () => {
      mounted = false
    }
  }, [command, outputLines, prefersReduced])

  return (
    <div className="max-w-full">
      <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 rounded-lg shadow-md overflow-hidden border dark:border-slate-800">
        <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800 flex items-center gap-3">
          <span className="w-3 h-3 bg-red-500 rounded-full" aria-hidden />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" aria-hidden />
          <span className="w-3 h-3 bg-green-500 rounded-full" aria-hidden />
          <div className="ml-auto text-xs text-slate-500 dark:text-slate-400 font-mono">{command}</div>
        </div>
        <div className="p-4 font-mono text-sm" style={{ height }}>
          <pre aria-live="polite" className="whitespace-pre-wrap">{display}</pre>
        </div>
      </div>
    </div>
  )
}
