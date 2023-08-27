import React from 'react';
import Card from './Card';
import Job from './Job';

export default function Experience({ experience }) {
    return (
        <Card heading={'Experience'}>
            {experience.map((job) => {
                return (
                    <Job
                        title={job.flatData.title}
                        company={job.flatData.company}
                        projectDescription={job.flatData.projectDescription}
                        responsibilities={job.flatData.responsibilities}
                        technologies={job.flatData.technologies}
                        startDate={job.flatData.startDate}
                        endDate={job.flatData.endDate}
                        total={job.flatData.total}
                        key={job.id}
                    />
                );
            })}
        </Card>
    );
}
