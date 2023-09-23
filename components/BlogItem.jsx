import PropTypes from 'prop-types';
import Date from './Date';
import { imageMetadataPropType } from '../renderer/PropTypeValues';

function BlogItem({ title, slug, imageUrl, metaData, previewText, publishedAt, minutesToRead }) {
    const { pixelWidth, pixelHeight } = metaData;
    return (
        <div className='blog-list-item'>
            <a href={`/articles/${slug}`}>
                <img
                    src={imageUrl}
                    alt={title}
                    width={pixelWidth}
                    height={pixelHeight}
                />
                <div className='item-content-wrapper'>
                    <h3 className='blog-item-title'>{title}</h3>
                    <div className='published-at'>
                        <Date dateString={publishedAt} /> | {minutesToRead}
                    </div>
                    <p className='preview-text'>{previewText}</p>
                </div>
            </a>
        </div>
    );
}

BlogItem.propTypes = {
    title: PropTypes.string,
    slug: PropTypes.string,
    imageUrl: PropTypes.string,
    metaData: imageMetadataPropType,
    previewText: PropTypes.string,
    publishedAt: PropTypes.string,
    minutesToRead: PropTypes.string,
};

export default BlogItem;
