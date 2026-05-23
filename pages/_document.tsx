import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  override render() {
    return (
      <Html lang='en'>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
        </Head>

        <body class="dark-mode">
          <script
            dangerouslySetInnerHTML={{
              __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  localStorage.setItem(storageKey, true)
})();
`
            }}
          />
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
