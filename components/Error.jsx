import PropTypes from 'prop-types';

const Error = ({ heading, description }) => {
    return (
        <div className='error-block'>
            <h1>{heading}</h1>
            <p>{description}</p>
        </div>
    );
};

Error.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default Error;
