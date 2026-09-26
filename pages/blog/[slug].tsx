import { GetStaticPaths, GetStaticProps } from 'next'
import { getPostBySlug, getPostSlugs } from '../../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'

export default function Post({ mdxSource, frontMatter }: any) {
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{frontMatter.title}</h1>
      <div className="prose prose-slate mt-8 dark:prose-invert">
        <MDXRemote {...mdxSource} />
      </div>
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getPostSlugs()
  const paths = slugs.map((s) => ({ params: { slug: s.replace(/\.mdx$/, '') } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { mdxSource, frontMatter } = await getPostBySlug(params?.slug as string)
  return { props: { mdxSource, frontMatter } }
}
