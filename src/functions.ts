import { msToTimeOptions } from './types';

export function msToDateString(ms: number): string {
    const date = new Date(ms);

    const dateString = date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

    return `${dateString}`;
}

/**
 *
 * @param ms - Milliseconds to convert
 * @param options - Options for this function
 * @returns
 */
export function msToDuration(
    ms: number,
    options: msToTimeOptions = { LongFormat: false, Compact: false }
): string {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let time = '';
    if (days > 0) {
        options.LongFormat
            ? (time += days + ' Days, ')
            : (time += days + ' D ');
        ms -= days * (1000 * 60 * 60 * 24);
        if (options.Compact) return time;
    }
    if (hours > 0) {
        options.LongFormat
            ? (time += hours + ' Hours, ')
            : (time += hours + ' H ');
        ms -= hours * (1000 * 60 * 60);
        if (options.Compact) return time;
    }
    if (minutes > 0) {
        options.LongFormat
            ? (time += minutes + ' Minutes, ')
            : (time += minutes + ' M ');
        ms -= minutes * (1000 * 60);
        if (options.Compact) return time;
    }
    if (seconds > 0) {
        options.LongFormat
            ? (time += seconds + ' Seconds, ')
            : (time += seconds + ' S ');
        ms -= seconds * 1000;
        if (options.Compact) return time;
    }
    if (ms > 0) {
        options.LongFormat
            ? (time += ms + ' Milliseconds, ')
            : (time += ms + ' MS ');
        if (options.Compact) return time;
    }

    return time;
}

export function msToTimeString(ms: number): string {
    const date = new Date(ms);

    const timeString = date.toLocaleTimeString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

    return `${timeString}`;
}
