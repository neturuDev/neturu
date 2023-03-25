import React from 'react'
import BlogItem from "../../components/BlogItem";

export { Page, getDocumentProps }

function getDocumentProps() {
  return {
    title: 'Статьи',
    description: 'Статьи о веб-разработке, дизайнеб маркетинге и многом другом',
    lang: 'ru'
  }
}

function Page(pageProps) {
  const { posts } = pageProps;
  return (
    <>
      <div className='content-container'>
        <div className='blog-post-list'>
          {posts.map((post) => {
              const image = post.flatData.mainImage;
              return(
                <BlogItem
                  title={post.flatData.title}
                  slug={post.flatData.slug}
                  imageUrl={image[0].url}
                  imageId={image[0].id}
                  metaData={image[0].metadata}
                  previewText={post.flatData.preview}
                  publishedAt={post.flatData.publishedAt}
                  minutesToRead={post.flatData.minutesToReadStr}
                  key={post.id}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}
