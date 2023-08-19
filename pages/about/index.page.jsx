import React from 'react'
import Card from '../../components/Card';
import ImageBlock from '../../components/ImageBlock';
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
        <Card heading={'About me'}>
          <p>Over 9 years of commercial experience, mostly in Front-End development using different frameworks and libraries.</p>
          <p>Solid knowledge and hands-on experience in HTML, CSS, JavaScript, React.js, MUI, Bootstrap, Zurb Foundation, Git, RTL, Jest, Enzyme, Cypress, and knowledge of ecosystem tools, such as webpack, npm, and Vite.</p>
          <p>Attention to detail, desire to improve code and product quality, and business-oriented mindset. Ability to read and maintain other people’s code.</p>
          <p>I`m interested in new technologies and systematically acquiring new knowledge.</p>
        </Card>
        <Card heading={'Skills'}>
          <div className='card-block'>
            <h3>Hard Skills</h3>
          </div>
          <div className='card-block'>
            <h3>Soft Skills</h3>
          </div>
          <div className='card-block'>
            <h3>Languages</h3>
            <p>English - Professional working proficiency (Upper-Intermediate); Polish - Elementary proficiency (Pre-Intermediate); Ukrainian - native.</p>
          </div>
        </Card>
        <Card heading={'Experience'}>
          <div className='card-block'>
            <h3>Software Engineer (React.js, Node.js)</h3>
            <p className='subheading'>
              <span>DXC Technology · Self-employed</span>
              <span>Aug 2021 - Present · 2 yrs</span>
            </p>
            <p><span className='marked'>Project:</span> Automotive enterprise-grade application for an American corporation.</p>
            <p><span className='marked'>Responsibilities:</span> Web application development; code optimization and quality improvement; writing tests with RLT, Jest, Enzyme, Cypress, and Chai Assertion Library with 100% coverage for the unit tests.</p>
            <p><span className='marked'>Technologies:</span> GoogleMaps API · Postman · POC · Node.js · ESLint · Chai Assertion Library · Playwright · Enzyme · Redux · RTL · Cypress.io · Jest · MUI · HTML · CSS · JavaScript · Git · React.js · English.</p>
          </div>
          <div className='card-block'>
            <h3>Front End Developer (React.js)</h3>
            <p className='subheading'>
              <span>Ksisters - European eCommerce · Self-employed</span>
              <span>Jun 2020 - Jul 2021 · 1 yr 2 mos</span>
            </p>
            <p><span className='marked'>Project:</span> <a href='https://ksisters.de/' target='_blank' rel='noreferrer'>Ksisters</a></p>
            <p><span className='marked'>Responsibilities:</span> Front-end development (responsive and cross-browser, web application components creation); Libraries and frameworks integration, including MUI; Code optimization and quality improvement.</p>
            <p><span className='marked'>Technologies:</span> TypeScript · ESLint · SCSS · Scalable Vector Graphics (SVG) · MUI · ZURB Foundation Framework · HTML · CSS · JavaScript · Git · React.js</p>
          </div>
          <div className='card-block'>
            <h3>Full stack web developer, web designer, UI/UX designer</h3>
            <p className='subheading'>
              <span>Auto Gas Global trading</span>
              <span>Mar 2016 - Jun 2020 · 4 yrs 4 mos</span>
            </p>
            <p><span className='marked'>Projects:</span> <a href='http://autogas.in.ua/ua/' target='_blank' rel='noreferrer'>Auto Gas Global</a> / <a href='http://prins.neturu.co.ua/' target='_blank' rel='noreferrer'>Prins</a> / <a href='http://stag.ua/' target='_blank' rel='noreferrer'>Stag</a> / <a href='http://greengas.it/' target='_blank' rel='noreferrer'>Greengas</a> / <a href='https://autogasmarket.ua/' target='_blank' rel='noreferrer'>Autogasmarket</a> / <a href='http://landirenzo.neturu.co.ua/' target='_blank' rel='noreferrer'>Landirenzo</a></p>
            <p><span className='marked'>Responsibilities:</span> Develop projects’ Information architecture; Web design; Cross browser Front End development; Bitrix (PHP based CMS) template development; Bitrix components development; Implement new functionality and features; Maintain company projects (websites); Bitrix (PHP based CMS) administration.</p>
            <p><span className='marked'>Technologies:</span> Bitrix CMS · Progressive Web Applications (PWAs) · SCSS · Scalable Vector Graphics (SVG) · ZURB Foundation Framework · SEO · HTML · CSS · JavaScript · Vue.js · jQuery · Git · PHP</p>
          </div>
        </Card>
        <Card heading={'Certifications'}>
          <div className='card-block'>
            <h3 className='card-block-heading'>All about Node.js</h3>
          </div>
        </Card>
        <Card heading={'Education'}>
          <div className='card-block'>
            <ImageBlock image={WUNU} imageAlt='WUNU'>
              <h3>{'Master’s, Organizational Management in West Ukrainian National University'}</h3>
              <span>Sep 2009 - Jun 2010</span>
            </ImageBlock>         
          </div>
          <div className='card-block'>
            <ImageBlock image={WUNU} imageAlt='WUNU'>
              <h3>{'Bachelor’s, Management in West Ukrainian National University'}</h3>
              <span>Sep 2005 - Jun 2009</span>
            </ImageBlock>
          </div>
        </Card>
      </div>
    </>
  )
}
