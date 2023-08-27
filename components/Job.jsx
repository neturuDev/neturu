import React from 'react';
import CardBlock from './CardBlock';
import parse from 'html-react-parser';
import Date from './Date';

const renderEndDate = (endDate) => (endDate ? <Date dateString={endDate} woDay /> : 'Present');

export default function Job({ title, company, startDate, endDate, total, projectDescription, responsibilities, technologies }) {
    return (
        <CardBlock heading={title}>
            <p className='subheading'>
                <span>{company}</span>
                <span>
                    {<Date dateString={startDate} woDay />} - {renderEndDate(endDate)} · {total}
                </span>
            </p>
            <p>
                <span className='marked'>Project:</span> {parse(projectDescription)}
            </p>
            <p>
                <span className='marked'>Responsibilities:</span> {responsibilities}
            </p>
            <p>
                <span className='marked'>Technologies:</span> {technologies}
            </p>
        </CardBlock>
    );
}
