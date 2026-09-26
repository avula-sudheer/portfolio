import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'
import React from 'react'
import resume from '../data/resume'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  const { asPath } = useRouter()
  const path = asPath.split(/[?#]/)[0]
  const labels: Record<string, string> = { '/about': 'About', '/background': 'Background', '/projects': 'Projects', '/tech-stack': 'Expertise', '/resume': 'Resume', '/contact': 'Contact', '/blog': 'Blog' }
  const title = `${labels[path] ? `${labels[path]} | ` : ''}${resume.name} — ${resume.headline}`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={resume.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={resume.summary} />
        <meta property="og:image" content="/images/quarkus.svg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={resume.summary} />
        <meta name="twitter:image" content="/images/quarkus.svg" />

        <link rel="canonical" href={`https://sudheeravula.info${path}`} />
      </Head>
      <div className="min-h-screen flex flex-col" style={{ paddingBottom: 'var(--footer-height, 100px)' }}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:text-slate-900 p-3">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 w-full container py-8 sm:py-12">{children}</main>
        <Footer />
      </div>
    </>
  )
}
