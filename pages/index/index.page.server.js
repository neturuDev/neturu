import fetchAPI from '../../lib/squidex';

// eslint-disable-next-line no-unused-vars
export async function onBeforeRender(pageContext) {
    // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
    const response = await fetchAPI(`
      {
        queryMainpageContents {
          id,
          flatData{
            about,
            seo{
              pageTitle,
              pageDescription,
              pageLang
            }
          }
        }
      }
    `);

    let mainPageData = response ? response.queryMainpageContents[0].flatData : [];

    // Our render and hydrate functions we defined earlier pass `pageContext.pageProps` to
    // the root React component `Page`; this is where we define `pageProps`.
    const pageProps = { mainPageData };

    // We make `pageProps` available as `pageContext.pageProps`
    return {
        pageContext: {
            pageProps,
        },
    };
}

// By default `pageContext` is available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
// `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
// available to the browser.
export const passToClient = ['pageProps'];
