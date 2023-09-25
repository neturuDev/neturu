import React from 'react';
import 'normalize.css/normalize.css';
import PropTypes from 'prop-types';
import './PageShell.scss';
import { PageContextProvider } from './usePageContext';
import { childrenPropType } from './PropTypeValues';
import DefaultLayout from '../layouts/default';

export { PageShell };

PageShell.propTypes = {
    pageContext: PropTypes.any,
    children: childrenPropType,
};
function PageShell({ pageContext, children }) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <DefaultLayout>{children}</DefaultLayout>
            </PageContextProvider>
        </React.StrictMode>
    );
}
