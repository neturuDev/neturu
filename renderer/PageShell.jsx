import React from 'react'
import 'normalize.css/normalize.css'
import './PageShell.scss'
import { PageContextProvider } from './usePageContext'
import DefaultLayout from '../layouts/default'

export { PageShell }

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

