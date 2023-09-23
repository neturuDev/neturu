import PropTypes from 'prop-types';

export const childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;

export const skillPropType = { title: PropTypes.string, description: PropTypes.string };

export const imageMetadataPropType = PropTypes.shape({
    pixelWidth: PropTypes.number,
    pixelHeight: PropTypes.number,
    created: PropTypes.string,
    description: PropTypes.string,
});

export const imagePropType = PropTypes.shape({
    url: PropTypes.string,
    id: PropTypes.string,
    metadata: imageMetadataPropType,
});

export const educationItemPropType = {
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    image: imagePropType,
};

export const jobPropType = {
    title: PropTypes.string,
    company: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    total: PropTypes.string,
    projectDescription: PropTypes.string,
    responsibilities: PropTypes.string,
    technologies: PropTypes.string,
};

export const certificationPropType = {
    title: PropTypes.string,
    image: imagePropType,
    issuingOrganization: PropTypes.string,
    issued: PropTypes.string,
    credentialLink: PropTypes.string,
};
