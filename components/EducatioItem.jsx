import React from 'react';
import CardBlock from './CardBlock';
import Date from './Date';

export default function EducationItem({ title, startDate, endDate, imageUrl }) {
    return (
        <CardBlock heading={title} image={imageUrl} imageAlt={'WUNU'}>
            <span>
                <Date dateString={startDate} woDay /> - <Date dateString={endDate} woDay />
            </span>
        </CardBlock>
    );
}
