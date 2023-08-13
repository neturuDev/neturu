import React from 'react'

export default function ImageBlock({ image, imageAlt, children }) {
    return (
        <div className='image-block'>
            <div className='image-wrapper'>
                <img src={image} alt={imageAlt} />
            </div>
            <div className='block-content'>
                {children}
            </div>
        </div>
    );
}