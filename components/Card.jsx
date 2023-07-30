import React from 'react'

export default function Card({ heading, children }) {
    return (
        <div className={`card ${heading ? 'with-heading' : ''}`}>
            {heading &&
                <h2 className='card-heading'>{heading}</h2>
            }
            {children}
        </div>
    );
}