import React from 'react'

const Error = ({ heading, description}) => {
    return(
        <div className='error-block'>
            <h1>{heading}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Error;