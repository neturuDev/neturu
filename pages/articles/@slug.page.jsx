import React from 'react'
import parse from 'html-react-parser'
import Date from '../../components/date'

export { Page }

export const documentProps = {
    // This title and description will override the defaults
    title: 'Статья',
    description: 'Описание одной статьи',
    lang: 'ru'
  }

  function Page(pageProps) {
    const { post, source } = pageProps;
    const image = post.mainImage;
    return (
      <>
        <div className='article-cantainer'>
        <div className='article-image-wrapper'>
          <img
            src={image[0].url}
            alt={post.title}
            width={image[0].metadata.pixelWidth}
            height={image[0].metadata.pixelHeight}
          />
          <div className='article-publishing-date'>
            <Date dateString={post.publishedAt} />
          </div>
        </div>
        <h1 className="blog-post-title">{post.title}</h1>
        {parse(source)}
        <div className='flex-center'>
          <a className='back-to-list' href='/articles'>К списку статей</a>
        </div>
      </div>
      </>
    )
  }