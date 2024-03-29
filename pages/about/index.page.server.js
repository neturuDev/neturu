import fetchAPI from '../../lib/squidex';

// eslint-disable-next-line no-unused-vars
export async function onBeforeRender(pageContext) {
    // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
    const seoResponse = await fetchAPI(`
      {
        queryAboutpageContents {
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
    `);
    const aboutResponse = await fetchAPI(`
      {
        queryAboutmeContents {
          id,
          flatData {
          text
          }
        }
      }
    `);
    const skillsResponse = await fetchAPI(`
      {
        querySkillsContents {
          id,
          flatData{
            title,
            description,
            sorting
          }
        }
      }
    `);
    const experienceResponse = await fetchAPI(`
    {
      queryExperinceContents {
        id,
        flatData{
          title,
          company,
          startDate,
          endDate,
          total,
          projectDescription,
          responsibilities,
          technologies
        }
      }
    }`);
    const certificationsResponse = await fetchAPI(`
      {
        queryCertificationsContents {
          id,
          flatData {
            title,
            issuingOrganization,
            issued,
            credentialID,
            credentialLink,
            certificate{
              url,
              id,
              metadata
            }
          }
        }
      }
    `);

    const educationResponse = await fetchAPI(`
      {
        queryEducationContents {
          id,
          flatData{
            title,
            image{
              url,
              id,
              metadata
            },
            startDate,
            endDate
          }
        }
      }
    `);
    let seo = seoResponse ? seoResponse.queryAboutpageContents[0].flatData.seo : [];
    let about = aboutResponse ? aboutResponse.queryAboutmeContents[0].flatData.text : [];
    let skills = skillsResponse ? skillsResponse.querySkillsContents : [];
    let experience = experienceResponse ? experienceResponse.queryExperinceContents : [];
    let certifications = certificationsResponse ? certificationsResponse.queryCertificationsContents : [];
    let education = educationResponse ? educationResponse.queryEducationContents : [];

    // Our render and hydrate functions we defined earlier pass `pageContext.pageProps` to
    // the root React component `Page`; this is where we define `pageProps`.
    const pageProps = { about, seo, skills, experience, certifications, education };

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
