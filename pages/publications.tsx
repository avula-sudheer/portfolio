import { publications } from '../data/publications'

export default function Publications() {
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Journal Publications</h1>
      <p className="mt-4 secondary-text leading-relaxed">Selected journal authorship contributions on access containment and sensitive data disclosure.</p>
      <div className="mt-8 border-t border-slate-200 dark:border-slate-700">
        {publications.map((paper) => (
          <article key={paper.doi} className="py-8 border-b border-slate-200 dark:border-slate-700">
            <p className="text-sm secondary-text">{paper.journal} · {paper.issue} · {paper.year}</p>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold leading-snug">{paper.title}</h2>
            <a href={paper.articleUrl} target="_blank" rel="noopener noreferrer" className="text-link inline-block mt-5">Read paper ↗<span className="sr-only"> (opens in a new tab)</span></a>
            <p className="mt-4 text-sm secondary-text">DOI: <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="text-link break-all">{paper.doi}<span className="sr-only"> (opens in a new tab)</span></a></p>
          </article>
        ))}
      </div>
    </section>
  )
}
