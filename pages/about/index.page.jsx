import React from 'react';
import Certifications from '../../components/Сertifications';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Education from '../../components/Education';
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
    const { about, skills, experience, сertifications, education } = pageProps;
    сertifications.sort((a, b) => parseISO(b.flatData.issued) - parseISO(a.flatData.issued));
    return (
        <>
            <div className='content-container small'>
                <About about={about} />
                <Skills skills={skills} />
                <Experience experience={experience} />
                <Certifications certifications={сertifications} />
                <Education education={education} />
            </div>
        </>
    );
}
