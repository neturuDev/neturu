import React from 'react';

export default function ImageBlock({ image, imageAlt, children }) {
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
