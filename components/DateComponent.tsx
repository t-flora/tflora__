import { parseISO, format } from 'date-fns';
import React from 'react';

interface DateString {
    dateString: string,
}

export default function DateComponent({ dateString }: DateString): JSX.Element {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}