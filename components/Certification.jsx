import React from 'react';
import Date from './Date';

export default function Certification({
    title,
    image,
    issuingOrganization,
    issued,
    credentialID,
    credentialLink,
}) {
    return (
        <div className="certification">
            <img
                src={image.url}
                alt={title}
                width={image.metadata.pixelWidth}
                height={image.metadata.pixelHeight}
            />
            <h3>{title}</h3>
            <p>{issuingOrganization}</p>
            <p>{credentialID}</p>
            <Date dateString={issued} />
            {credentialLink && (
                <a href={credentialLink} target="_blank" rel="noreferrer">
                    Show credential
                </a>
            )}
        </div>
    );
}
