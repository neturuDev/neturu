import PropTypes from 'prop-types';
import Card from './Card';
import Certification from './Certification';
import { certificationPropType } from '../renderer/PropTypeValues';

function Certifications({ certifications }) {
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

Certifications.propTypes = {
    certifications: PropTypes.arrayOf(PropTypes.shape(certificationPropType)),
};

export default Certifications;
