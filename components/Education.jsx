import React from 'react';
import Card from './Card';
import EducationItem from './EducatioItem';

export default function Education({ education }) {
    return (
        <Card heading={'Education'}>
            {education.map((educationItem) => (
                <EducationItem title={educationItem.flatData.title} startDate={educationItem.flatData.startDate} endDate={educationItem.flatData.endDate} imageUrl={educationItem.flatData.image[0].url} key={educationItem.id} />
            ))}
        </Card>
    );
}
