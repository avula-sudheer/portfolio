import Link from 'next/link'
import { getAllPosts } from '../../lib/mdx'

export default function BlogIndex({ posts }: { posts: string[] }) {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Blog</h1>
      <ul className="mt-8 border-t border-slate-200 dark:border-slate-700">
        {posts.map((p) => (
          <li key={p} className="border-b border-slate-200 dark:border-slate-700 py-5">
            <Link href={`/blog/${p}`} className="text-link">{p} →</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return { props: { posts } }
}
