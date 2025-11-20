import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import React from 'react'
import resume from '../data/resume'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>{resume.name} — {resume.headline}</title>
        <meta name="description" content={resume.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${resume.name} — ${resume.headline}`} />
        <meta property="og:description" content={resume.summary} />
        <meta property="og:image" content="/images/quarkus.svg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${resume.name} — ${resume.headline}`} />
        <meta name="twitter:description" content={resume.summary} />
        <meta name="twitter:image" content="/images/quarkus.svg" />

        <link rel="canonical" href="/" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only p-2">Skip to content</a>
        <Header />
        {/* match header/footer heights with top/bottom padding so content isn't hidden under fixed bars */}
        <main id="main-content" role="main" className="flex-1 container pt-16 pb-16">{children}</main>
        <Footer />
      </div>
    </>
  )
}
