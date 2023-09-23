import PropTypes from 'prop-types';
import Card from './Card';
import parse from 'html-react-parser';

function About({ about }) {
    return <Card heading={'About me'}>{parse(about)}</Card>;
}

About.propTypes = {
    about: PropTypes.string,
};

export default About;
