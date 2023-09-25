import { parseISO } from 'date-fns';

const theLargest = 99999999999999;

export const sortByDate = (array, keyForSorting) => {
    return array.sort((a, b) => {
        const bDate = b.flatData[keyForSorting] ? parseISO(b.flatData[keyForSorting]) : theLargest;
        const aDate = a.flatData[keyForSorting] ? parseISO(a.flatData[keyForSorting]) : theLargest;
        return bDate - aDate;
    });
};

export const sortByNumber = (array, keyForSorting) => {
    return array.sort((a, b) => {
        return b.flatData[keyForSorting] - a.flatData[keyForSorting];
    });
};
