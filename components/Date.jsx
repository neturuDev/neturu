import React from 'react';
import { parseISO, format } from 'date-fns';

export default function Date({ dateString, woDay = false }) {
    const date = parseISO(dateString);
    if (!dateString) return;
    return <time dateTime={dateString}>{format(date, woDay ? 'LLL yyyy' : 'dd.MM.yyyy')}</time>;
}
