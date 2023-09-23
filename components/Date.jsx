import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

function Date({ dateString, woDay = false }) {
    const date = parseISO(dateString);
    if (!dateString) return;
    return <time dateTime={dateString}>{format(date, woDay ? 'LLL yyyy' : 'dd.MM.yyyy')}</time>;
}

Date.propTypes = {
    dateString: PropTypes.string,
    woDay: PropTypes.bool,
};

export default Date;
