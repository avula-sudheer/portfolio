type Item = { title: string; date: string; details?: string }

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="mt-6">
      <ol className="border-l border-slate-200 dark:border-slate-700 pl-4">
        {items.map((it, i) => (
          <li key={i} className="mb-6">
            <div className="mb-1 text-sm text-slate-600 dark:text-slate-400">{it.date}</div>
            <div className="font-semibold">{it.title}</div>
            {it.details && <div className="text-slate-700 dark:text-slate-300 mt-1">{it.details}</div>}
          </li>
        ))}
      </ol>
    </div>
  )
}
