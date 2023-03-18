import fetchAPI from "../../lib/squidex";

export async function onBeforeRender(pageContext) {
    // The route parameter of `/star-wars/@movieId` is available at `pageContext.routeParams`
    // const { movieId } = pageContext.routeParams;
  
    // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
    const response = await fetchAPI(`
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
    `);

    let posts = response ? response.queryPostsContents : [];
  
    // Our render and hydrate functions we defined earlier pass `pageContext.pageProps` to
    // the root React component `Page`; this is where we define `pageProps`.
    const pageProps = { posts };
  
    // We make `pageProps` available as `pageContext.pageProps`
    return {
      pageContext: {
        pageProps
      }
    };
  }
  
  // By default `pageContext` is available only on the server. But our hydrate function
  // we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
  // `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
  // available to the browser.
  export const passToClient = ["pageProps"];