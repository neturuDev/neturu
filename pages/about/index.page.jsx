import React from 'react'
import './code.css'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'About SpaceX',
  description: 'Our mission is to explore the galaxy.',
  lang: 'ru'
}

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        Example of using <code>vite-plugin-ssr</code>.
      </p>
    </>
  )
}
