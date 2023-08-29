import React from 'react';
import Card from './Card';
import Certification from './Certification';

export default function Certifications({ certifications }) {
    return (
        <Card heading={'Certifications'}>
            <div className='certifications-grid'>
                {certifications.map((certification) => {
                    const image = certification.flatData.certificate[0];
                    return (
                        <Certification
                            title={certification.flatData.title}
                            image={image}
                            issuingOrganization={certification.flatData.issuingOrganization}
                            issued={certification.flatData.issued}
                            credentialID={certification.flatData.credentialID}
                            credentialLink={certification.flatData.credentialLink}
                            key={certification.id}
                        />
                    );
                })}
            </div>
        </Card>
    );
}
