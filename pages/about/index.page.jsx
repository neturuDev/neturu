import React from 'react';
import Certifications from '../../components/Сertifications';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Education from '../../components/Education';
import { parseISO } from 'date-fns';

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
    certifications.sort((a, b) => parseISO(b.flatData.issued) - parseISO(a.flatData.issued));
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
