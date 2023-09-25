import fetchAPI from '../../lib/squidex';

export async function onBeforeRender(pageContext) {
    // The route parameter of `/star-wars/@movieId` is available at `pageContext.routeParams`
    const { slug } = pageContext.routeParams;

    // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
    const data = await fetchAPI(
        `
    query QueryPosts($query: String!) {
      queryPostsContents(filter: $query) {
        id
        flatData {
          title,
          preview,
          content,
          publishedAt,
          mainImage{
            url,
            id,
            metadata
          },
          seo{
            pageTitle,
            pageDescription
          }
        }
      }
    }
    `,
        {
            variables: {
                query: `data/Slug/iv eq '${slug}'`,
            },
        }
    );

    if (data.queryPostsContents.length === 0) {
        return {
            pageContext: {
                notFound: true,
            },
        };
    }

    // Our render and hydrate functions we defined earlier pass `pageContext.pageProps` to
    // the root React component `Page`; this is where we define `pageProps`.
    const post = data.queryPostsContents[0].flatData;
    const pageProps = { post, source: post.content };

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
