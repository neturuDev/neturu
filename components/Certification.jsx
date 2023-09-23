import Date from './Date';
import { certificationPropType } from '../renderer/PropTypeValues';

function Certification({ title, image, issuingOrganization, issued, credentialLink }) {
    return (
        <div className='certification'>
            <img
                src={image.url}
                alt={title}
                width={image.metadata.pixelWidth}
                height={image.metadata.pixelHeight}
            />
            <div className='certification-data'>
                <div>
                    <h3 className='certification-heading'>{title}</h3>
                </div>
                <div>
                    <div className='certification-subheading'>
                        <span>{issuingOrganization}</span>
                        <span>
                            {'Issued'} <Date dateString={issued} />
                        </span>
                    </div>
                    <div className='certification-link-wrapper'>
                        {credentialLink && (
                            <a
                                className='certification-link'
                                href={credentialLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div>{'Show credential'}</div>
                                <div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 16 16'
                                        data-supported-dps='16x16'
                                        fill='currentColor'
                                        width='16'
                                        height='16'
                                        focusable='false'
                                    >
                                        <path d='M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z'></path>
                                    </svg>
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

Certification.propTypes = certificationPropType;

export default Certification;
