import PropTypes from 'prop-types';
import { childrenPropType } from '../renderer/PropTypeValues';

function Card({ heading, children }) {
    return (
        <div className={`card ${heading ? 'with-heading' : ''}`}>
            {heading && <h2 className='card-heading'>{heading}</h2>}
            {children}
        </div>
    );
}

Card.propTypes = {
    heading: PropTypes.string,
    children: childrenPropType,
};

export default Card;
