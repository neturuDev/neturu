import React from 'react';
import Error from '../components/Error';

export { Page, getDocumentProps }

function setErrorData(is404) {
  let errorHeading, errorDescription;
  if (is404) {
    errorHeading = '404 Page Not Found';
    errorDescription = 'This page could not be found.';
  } else {
    errorHeading = '500 Internal Server Error';
    errorDescription = 'Something went wrong.';
  }

  return {errorHeading, errorDescription};
}

function getDocumentProps({ is404 }) {
  const {errorHeading, errorDescription} = setErrorData(is404);
  return {
    title: errorHeading,
    description: errorDescription,
    lang: 'en'
  }
}

function Page({ is404 }) {
  const {errorHeading, errorDescription} = setErrorData(is404);

  return (
    <div className='content-container flex-center'>
      <Error
       heading={errorHeading}
        description={errorDescription}
      />
    </div>
  )
}
