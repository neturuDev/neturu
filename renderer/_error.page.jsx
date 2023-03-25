import React from 'react';
import Error from '../components/Error';

export { Page, getDocumentProps }

function getDocumentProps() {
  return {
    title: 'Volodymyr Cherevchuk || Software engineer',
    description: 'Personal website of Software engineer',
    lang: 'en'
  }
}

function Page({ is404 }) {
  let errorHeading, errorDescription;

  if (is404) {
    errorHeading = '404 Page Not Found';
    errorDescription = 'This page could not be found.';
  } else {
    errorHeading = '500 Internal Server Error';
    errorDescription = 'Something went wrong.';
  }
  return (
    <div className='content-container flex-center'>
      <Error
       heading={errorHeading}
        description={errorDescription}
      />
    </div>
  )
}
