import React from 'react'
import ImageBlock from './ImageBlock'

export default function CardBlock({ heading, image, imageAlt, children }) {
    const createContent = (<>
        <h3 className='card-block-heading'>{heading}</h3>
        {children}
    </>);  

    return (
        <div className='card-block'>
            {image &&
                <ImageBlock image={image} imageAlt={imageAlt}>
                    { createContent }
                </ImageBlock>
            }
            {!image &&
                createContent
            }    
        </div>
    );
}