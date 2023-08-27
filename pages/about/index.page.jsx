import React from 'react';
import Card from '../../components/Card';
import CardBlock from '../../components/CardBlock';
import WUNU from '../../renderer/WUNU.png';
import Certifications from '../../components/Сertifications';
import { parseISO } from 'date-fns';

export { Page, getDocumentProps };

function getDocumentProps() {
    return {
        title: 'About • Volodymyr Full-Stack developer',
        description: 'Volodymyr is a passionate software engineer with nine years of commercial experience',
        lang: 'en',
    };
}

function Page(pageProps) {
    const { сertifications } = pageProps;
    сertifications.sort((a, b) => parseISO(b.flatData.issued) - parseISO(a.flatData.issued));
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
                    <CardBlock heading={'Hard Skills'}>
                        <p>HTML, CSS, JavaScript, Typescript, React.js, Redux, Material-UI, fetch API, Axios, Node.js, GoogleMaps API, Git, Zurb Foundation, Bootstrap, npm, RTL, Jest, Enzyme, Cypress, Chai, Sinon, Playwright, webpack, SVG, Photoshop, Illustrator, Figma, GitHub, Bitbucket.</p>
                    </CardBlock>
                    <CardBlock heading={'Soft Skills'}>
                        <p>Analytical, critical, and logical thinking; ability to lifelong learning, flexibility, openness to change, result-oriented. Ability to work as a team player and work independently.</p>
                    </CardBlock>
                    <CardBlock heading='Languages'>
                        <p>English - Professional working proficiency (Upper-Intermediate); Polish - Elementary proficiency (Pre-Intermediate); Ukrainian - native.</p>
                    </CardBlock>
                </Card>
                <Card heading={'Experience'}>
                    <CardBlock heading={'Software Engineer (React.js, Node.js)'}>
                        <p className='subheading'>
                            <span>DXC Technology · Self-employed</span>
                            <span>Aug 2021 - Present · 2 yrs</span>
                        </p>
                        <p>
                            <span className='marked'>Project:</span> Automotive enterprise-grade application for an American corporation.
                        </p>
                        <p>
                            <span className='marked'>Responsibilities:</span> Web application development; code optimization and quality improvement; writing tests with RLT, Jest, Enzyme, Cypress, and Chai Assertion Library with 100% coverage for the unit tests.
                        </p>
                        <p>
                            <span className='marked'>Technologies:</span> GoogleMaps API · Postman · POC · Node.js · ESLint · Chai Assertion Library · Playwright · Enzyme · Redux · RTL · Cypress.io · Jest · MUI · HTML · CSS · JavaScript · Git · React.js · English.
                        </p>
                    </CardBlock>
                    <CardBlock heading={'Front End Developer (React.js)'}>
                        <p className='subheading'>
                            <span>Ksisters - European eCommerce · Self-employed</span>
                            <span>Jun 2020 - Jul 2021 · 1 yr 2 mos</span>
                        </p>
                        <p>
                            <span className='marked'>Project:</span>{' '}
                            <a href='https://ksisters.de/' target='_blank' rel='noreferrer'>
                                Ksisters
                            </a>
                        </p>
                        <p>
                            <span className='marked'>Responsibilities:</span> Front-end development (responsive and cross-browser, web application components creation); Libraries and frameworks integration, including MUI; Code optimization and quality improvement.
                        </p>
                        <p>
                            <span className='marked'>Technologies:</span> TypeScript · ESLint · SCSS · Scalable Vector Graphics (SVG) · MUI · ZURB Foundation Framework · HTML · CSS · JavaScript · Git · React.js
                        </p>
                    </CardBlock>
                    <CardBlock heading={'Full stack web developer, web designer, UI/UX designer'}>
                        <p className='subheading'>
                            <span>Auto Gas Global trading</span>
                            <span>Mar 2016 - Jun 2020 · 4 yrs 4 mos</span>
                        </p>
                        <p>
                            <span className='marked'>Projects:</span>{' '}
                            <a href='http://autogas.in.ua/ua/' target='_blank' rel='noreferrer'>
                                Auto Gas Global
                            </a>{' '}
                            /{' '}
                            <a href='http://prins.neturu.co.ua/' target='_blank' rel='noreferrer'>
                                Prins
                            </a>{' '}
                            /{' '}
                            <a href='http://stag.ua/' target='_blank' rel='noreferrer'>
                                Stag
                            </a>{' '}
                            /{' '}
                            <a href='http://greengas.it/' target='_blank' rel='noreferrer'>
                                Greengas
                            </a>{' '}
                            /{' '}
                            <a href='https://autogasmarket.ua/' target='_blank' rel='noreferrer'>
                                Autogasmarket
                            </a>{' '}
                            /{' '}
                            <a href='http://landirenzo.neturu.co.ua/' target='_blank' rel='noreferrer'>
                                Landirenzo
                            </a>
                        </p>
                        <p>
                            <span className='marked'>Responsibilities:</span> Develop projects’ Information architecture; Web design; Cross browser Front End development; Bitrix (PHP based CMS) template development; Bitrix components development; Implement new functionality and features; Maintain
                            company projects (websites); Bitrix (PHP based CMS) administration.
                        </p>
                        <p>
                            <span className='marked'>Technologies:</span> Bitrix CMS · Progressive Web Applications (PWAs) · SCSS · Scalable Vector Graphics (SVG) · ZURB Foundation Framework · SEO · HTML · CSS · JavaScript · Vue.js · jQuery · Git · PHP
                        </p>
                    </CardBlock>
                </Card>
                <Certifications certifications={сertifications} />
                <Card heading={'Education'}>
                    <CardBlock heading={'Master’s, Organizational Management in West Ukrainian National University'} image={WUNU} imageAlt={'WUNU'}>
                        <span>Sep 2009 - Jun 2010</span>
                    </CardBlock>
                    <CardBlock heading={'Bachelor’s, Management in West Ukrainian National University'} image={WUNU} imageAlt={'WUNU'}>
                        <span>Sep 2005 - Jun 2009</span>
                    </CardBlock>
                </Card>
            </div>
        </>
    );
}
