import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const script = `(function(){try{var theme=localStorage.getItem('theme');if(!theme){var m=window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');theme=m && m.matches ? 'dark' : 'light'}if(theme==='dark'){document.documentElement.classList.add('dark')} }catch(e){} })()`

    return (
      <Html>
        <Head />
        <body>
          {/* Inject theme script to avoid flash and ensure initial theme applies */}
          <script dangerouslySetInnerHTML={{ __html: script }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
