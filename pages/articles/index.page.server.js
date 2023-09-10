import fetchAPI from '../../lib/squidex'

// eslint-disable-next-line no-unused-vars
export async function onBeforeRender(pageContext) {
    // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
    const seoResponse = await fetchAPI(`
      {
        queryArticlespageContents {
          id,
          flatData{
            seo{
              pageTitle,
              pageDescription,
              pageLang
            }
          }
        }
      }
    `)
    const postsResponse = await fetchAPI(`
      {
        queryPostsContents {
          id,
          flatData {
            title,
            slug,
            preview,
            minutesToReadStr,
            publishedAt,
            mainImage{
              url,
              id,
              metadata
            }
          }
        }
      }
    `)

    let seo = seoResponse ? seoResponse.queryArticlespageContents[0].flatData.seo[0] : []
    let posts = postsResponse ? postsResponse.queryPostsContents : []

    // Our render and hydrate functions we defined earlier pass `pageContext.pageProps` to
    // the root React component `Page`; this is where we define `pageProps`.
    const pageProps = { posts, seo }

    // We make `pageProps` available as `pageContext.pageProps`
    return {
        pageContext: {
            pageProps,
        },
    }
}

// By default `pageContext` is available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
// `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
// available to the browser.
export const passToClient = ['pageProps']
