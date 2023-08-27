import React from 'react';
import CardBlock from './CardBlock';

export default function Skill({ title, description }) {
    return (
        <CardBlock heading={title}>
            <p>{description}</p>
        </CardBlock>
    );
}
