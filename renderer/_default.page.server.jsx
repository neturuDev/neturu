import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import fontUrl from '../fonts/Comfortaa-VariableFont_wght.ttf'
import faviconUrl from './icons/favicon.ico'
import favicon16Url from './icons/favicon-16x16.png'
import favicon32Url from './icons/favicon-32x32.png'
import chromeIconUrl from './icons/android-chrome-192x192.png'
import safariIconUrl from './icons/safari-pinned-tab.svg'
import appleIconUrl from './icons/apple-touch-icon.png'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vite-plugin-ssr.com/head

   // Our custom export is available as `pageContext.exports.getDocumentProps`
   const { getDocumentProps } = pageContext.exports

   // `getDocumentProps()` can use the fetched data to provide the page's meta data
   const { title, description, lang } = getDocumentProps(pageProps)

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="${lang}">
      <head>
        <meta charset="UTF-8" />
        <link rel="preload" href="${fontUrl}" as="font" type="font/ttf" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="${description}" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <link rel="icon" type="image/png" sizes="32x32" href="${favicon32Url}" />
        <link rel="icon" type="image/png" sizes="192x192" href="${chromeIconUrl}" />
        <link rel="icon" type="image/png" sizes="16x16" href="${favicon16Url}" />
        <link rel="shortcut icon" href="${faviconUrl}" />
        <link rel="mask-icon" href="${safariIconUrl}" color="#08259F" />
        <link rel="apple-touch-icon" sizes="180x180" href="${appleIconUrl}" />
        <meta name="application-name" content="Neturu" />
        <meta name="apple-mobile-web-app-title" content="Neturu" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
