import React from 'react';
import Certifications from '../../components/Сertifications';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Education from '../../components/Education';
import { sortByDate, sortByNumber } from '../../helpers/sorting';

export { Page, getDocumentProps };

function getDocumentProps(pageProps) {
    const { pageTitle, pageDescription, pageLang } = pageProps.seo;
    return {
        title: pageTitle,
        description: pageDescription,
        lang: pageLang,
    };
}

function Page(pageProps) {
    const { about, skills, experience, certifications, education } = pageProps;
    sortByDate(certifications, 'issued');
    sortByDate(experience, 'endDate');
    sortByDate(education, 'endDate');
    sortByNumber(skills, 'sorting');
    return (
        <>
            <div className='content-container small'>
                <About about={about} />
                <Skills skills={skills} />
                <Experience experience={experience} />
                <Certifications certifications={certifications} />
                <Education education={education} />
            </div>
        </>
    );
}
