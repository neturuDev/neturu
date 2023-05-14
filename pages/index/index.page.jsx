import React from 'react'

export { Page, getDocumentProps }

function getDocumentProps() {
  return {
    title: 'Website of a software engineer',
    description: 'Personal website of a passionate software engineer with eight years of commercial experience',
    lang: 'en'
  }
}

function Page() {
  return (
    <>
      <div className='content-container flex-center'>
        <div className='about-card'>
          <div className='image-wrapper'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 512 512" enableBackground="new 0 0 512 512;">
              <path fill="#FFBEAB" d="M81.455,197.004c-28.92,0-52.364,23.444-52.364,52.364s23.444,52.364,52.364,52.364
                c2.092,0,41.093-0.361,41.093-0.361V197.004H81.455z"/>
              <path fill="#F7AF99" d="M430.545,197.004h-41.093V301.37c0,0,39,0.361,41.093,0.361c28.92,0,52.364-23.444,52.364-52.364
                C482.909,220.447,459.465,197.004,430.545,197.004z"/>
              <path fill="#FFBEAB" d="M430.545,174.545v109.731l-209.455,34.909L256,0C352.396,0,430.545,78.15,430.545,174.545z"/>
              <path fill="#FDCDBF" d="M256,0v284.276H81.455V174.545C81.455,78.15,159.604,0,256,0z"/>
              <path fill="#8F5240" d="M430.545,284.276v53.178C430.545,433.85,352.396,512,256,512l-34.909-113.862L256,284.276
                L430.545,284.276L430.545,284.276z"/>
              <g>
                <path fill="#B27361" d="M256,284.276V512c-96.396,0-174.545-78.15-174.545-174.545v-53.178H256z"/>
                <rect x="162.909" y="127.185" fill="#B27361" width="64" height="34.909"/>
              </g>
              <rect x="285.091" y="127.185" fill="#8F5240" width="64" height="34.909"/>
              <polygon fill="#331D17" points="215.273,249.367 180.364,249.367 180.364,231.913 139.636,231.913 139.636,197.004 
                215.273,197.004 "/>
              <polygon points="331.636,249.367 296.727,249.367 296.727,197.004 372.364,197.004 372.364,231.913 331.636,231.913 "/>
              <path fill="#F7AF99" d="M238.545,319.185h-34.909c0,28.873,23.49,52.364,52.364,52.364l11.636-17.455L256,336.64
                C246.376,336.64,238.545,328.81,238.545,319.185z"/>
              <path fill="#F88A6B" d="M273.455,319.185c0,9.624-7.83,17.455-17.455,17.455v34.909c28.873,0,52.364-23.49,52.364-52.364
                H273.455z"/>
            </svg>
          </div>
          <div className='description'>
            <p>Hi, I'm Vova!</p>
            <p>Passionate software engineer with 8 years of commercial experience.</p>
            <p>My current tech stack is ReactJS, and all around it.</p>
          </div>
          <div className='socials'>
            <div className='social'>
              <a href='https://www.linkedin.com/in/cherevchuk/' className='social-link' target='_blank' rel='noopener'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
              </a>
            </div>
            <div className='social'>
              <a href='https://github.com/neturuDev' className='social-link' target='_blank' rel='noopener'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
