import React from 'react';
import Card from './Card';
import EducationItem from './EducationItem';

export default function Education({ education }) {
    return (
        <Card heading={'Education'}>
            {education.map((educationItem) => (
                <EducationItem
                    title={educationItem.flatData.title}
                    startDate={educationItem.flatData.startDate}
                    endDate={educationItem.flatData.endDate}
                    image={educationItem.flatData.image[0]}
                    key={educationItem.id}
                />
            ))}
        </Card>
    );
}
