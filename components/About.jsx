import React from 'react';
import Card from './Card';
import parse from 'html-react-parser';

export default function About({ about }) {
    return <Card heading={'About me'}>{parse(about)}</Card>;
}
