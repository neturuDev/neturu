import React from 'react'
import { Counter } from './Counter'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'About Vova',
  description: 'Our mission is to explore the galaxy.',
  lang: 'en'
}

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
