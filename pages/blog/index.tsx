import Link from 'next/link'
import { getAllPosts } from '../../lib/mdx'

export default function BlogIndex({ posts }: { posts: string[] }) {
  return (
    <section>
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="mt-4 list-disc list-inside">
        {posts.map((p) => (
          <li key={p}>
            <Link href={`/blog/${p}`} className="underline">{p}</Link>
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
