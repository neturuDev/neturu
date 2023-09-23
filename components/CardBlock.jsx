import PropTypes from 'prop-types';
import ImageBlock from './ImageBlock';
import { childrenPropType, imagePropType } from '../renderer/PropTypeValues';

function CardBlock({ heading, image, imageAlt, children }) {
    const createContent = (
        <>
            <h3 className='card-block-heading'>{heading}</h3>
            {children}
        </>
    );

    return (
        <div className='card-block'>
            {image && (
                <ImageBlock
                    image={image}
                    imageAlt={imageAlt}
                >
                    {createContent}
                </ImageBlock>
            )}
            {!image && createContent}
        </div>
    );
}

CardBlock.propTypes = {
    heading: PropTypes.string,
    image: imagePropType,
    imageAlt: PropTypes.string,
    children: childrenPropType,
};

export default CardBlock;
