import React from 'react'
import Date from './Date'

export default function BlogItem({ title, slug, imageUrl, metaData, previewText, publishedAt, minutesToRead}) {
  const {pixelWidth, pixelHeight} = metaData;
  return (
    <div className='blog-list-item'>
      <a href={`articles/${slug}`}>
        <img
            src={imageUrl}
            alt={title}
            width={pixelWidth}
            height={pixelHeight}
        />
        <div className='item-content-wrapper'>
          <h3 className="blog-item-title">{title}</h3>
          <div className='published-at'>
          <Date dateString={publishedAt} /> | {minutesToRead}
          </div>
          <p className='preview-text'>{previewText}</p>
        </div>
      </a>
    </div>
  );
}
