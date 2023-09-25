import PropTypes from 'prop-types';
import Error from '../components/Error';

export { Page };

Page.propTypes = {
    is404: PropTypes.bool,
};
function Page({ is404 }) {
    if (is404) {
        return (
            <>
                <div className='content-container flex-center'>
                    <Error
                        heading={'404 Page Not Found'}
                        description={'This page could not be found.'}
                    />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='content-container flex-center'>
                    <Error
                        heading={'500 Internal Error'}
                        description={'Something went wrong.'}
                    />
                </div>
            </>
        );
    }
}
