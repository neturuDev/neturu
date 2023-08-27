import React from 'react';
import Card from './Card';
import Skill from './Skill';

export default function Skills({ skills }) {
    return (
        <Card heading={'Skills'}>
            {skills.map((skill) => {
                return <Skill title={skill.flatData.title} description={skill.flatData.description} key={skill.id} />;
            })}
        </Card>
    );
}
