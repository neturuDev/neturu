import React from 'react'
import WUNU from '../../renderer/WUNU.png'

export { Page, getDocumentProps }

function getDocumentProps() {
  return {
    title: 'About • Volodymyr Full-Stack developer',
    description: 'Volodymyr is a passionate software engineer with nine years of commercial experience',
    lang: 'en'
  }
}

function Page() {
  return (
    <>
      <div className='content-container small'>
        <div className='card'>
          <h2>About me</h2>
          <p>Over 9 years of commercial experience, mostly in Front-End development using different frameworks and libraries.</p>
          <p>Solid knowledge and hands-on experience in HTML, CSS, JavaScript, React.js, MUI, Bootstrap, Zurb Foundation, Git, RTL, Jest, Enzyme, Cypress, and knowledge of ecosystem tools, such as webpack, npm, and Vite.</p>
          <p>Attention to detail, desire to improve code and product quality, and business-oriented mindset. Ability to read and maintain other people’s code.</p>
          <p>I`m interested in new technologies and systematically acquiring new knowledge.</p>
        </div>
        <div className='card'>
          <h2>Experience</h2>
          <div className='card-block'>
            <h3>Software Engineer (React.js, Node.js)</h3>
            <span>DXC Technology · Self-employed</span>
            <span>Aug 2021 - Present · 2 yrs</span>
            <p>Project: Automotive enterprise-grade application for an American corporation.</p>
            <p><span className='bright'>Responsibilities:</span> Web application development; code optimization and quality improvement; writing tests with RLT, Jest, Enzyme, Cypress, and Chai Assertion Library with 100% coverage for the unit tests.</p>
            <p><span className='bright'>Technologies:</span> GoogleMaps API · Postman · POC · Node.js · ESLint · Chai Assertion Library · Playwright · Enzyme · Redux · RTL · Cypress.io · Jest · MUI · HTML · CSS · JavaScript · Git · React.js · English.</p>
          </div>
        </div>
        <div className='card'>
          <h2>Certifications</h2>
          <div className='card-block'>
            <h3>All about Node.js</h3>
          </div>
        </div>
        <div className='card'>
          <h2>Languages</h2>
          <div className='card-block'>
            <h3>English</h3>
            <span>Professional working proficiency</span>
          </div>
          <div className='card-block'>
            <h3>Polish</h3>
            <span>Elementary proficiency</span>
          </div>
          <div className='card-block'>
            <h3>Ukrainian</h3>
            <span>Native</span>
          </div>
        </div>
        <div className='card'>
          <h2>Education</h2>
          <div className='card-block'>
            <img src={WUNU} alt="WUNU" />
            <h3>{'Master’s, Organizational Management in West Ukrainian National University'}</h3>
            <span>Sep 2009 - Jun 2010</span>
          </div>
          <div className='card-block'>
            <img src={WUNU} alt="WUNU" />
            <h3>{'Bachelor’s, Management in West Ukrainian National University'}</h3>
            <span>Sep 2005 - Jun 2009</span>
          </div>
        </div>
      </div>
    </>
  )
}
