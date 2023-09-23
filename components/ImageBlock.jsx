import PropTypes from 'prop-types';
import { childrenPropType, imagePropType } from '../renderer/PropTypeValues';

function ImageBlock({ image, imageAlt, children }) {
    return (
        <div className='image-block'>
            <div className='image-wrapper'>
                <img
                    src={image.url}
                    alt={imageAlt}
                    width={image.metadata.pixelWidth}
                    height={image.metadata.pixelHeight}
                />
            </div>
            <div className='block-content'>{children}</div>
        </div>
    );
}

ImageBlock.propTypes = {
    image: imagePropType,
    imageAlt: PropTypes.string,
    children: childrenPropType,
};

export default ImageBlock;
