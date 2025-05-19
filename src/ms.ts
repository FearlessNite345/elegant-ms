import { discordTimestamps, msToTimeOptions } from './types';

/**
 *
 * @param ms - Milliseconds to convert to discord timestamp string
 * @param type - The type of discord timestamp string you want returned
 * @returns
 */
export function msToDiscordTimestampString(
    ms: number,
    type: discordTimestamps
): string {
    const seconds = ms / 1000;

    switch (type) {
        case discordTimestamps.Default:
            return `<t:${seconds}>`;

        case discordTimestamps.LongDate:
            return `<t:${seconds}:D>`;

        case discordTimestamps.LongDateTime:
            return `<t:${seconds}:F>`;

        case discordTimestamps.LongTime:
            return `<t:${seconds}:T>`;

        case discordTimestamps.RelativeTime:
            return `<t:${seconds}:R>`;

        case discordTimestamps.ShortDate:
            return `<t:${seconds}:d>`;

        case discordTimestamps.ShortDateTime:
            return `<t:${seconds}:f>`;

        case discordTimestamps.ShortTime:
            return `<t:${seconds}:t>`;
    }
}

/**
 *
 * @param timeString - Time string should be something like "1d 10h 10m 10s"
 * @returns The time in milliseconds Note: if it returns -1 then that means a invalid string was given
 */
export function stringToMS(timeString: string): number {
    const sections = timeString.split(' '); // Split the input string by space

    let milliseconds = 0;
    let validSectionFound = false; // Flag to check if at least one valid part was found

    for (const section of sections) {
        if (section.startsWith('-')) {
            return -1;
        } else if (section.endsWith('d')) {
            // Days
            const value = parseInt(section);
            if (!isNaN(value)) {
                milliseconds += value * 24 * 60 * 60 * 1000; // Convert days to milliseconds
                validSectionFound = true;
            }
        } else if (section.endsWith('h')) {
            // Hours
            const value = parseInt(section);
            if (!isNaN(value)) {
                milliseconds += value * 60 * 60 * 1000; // Convert hours to milliseconds
                validSectionFound = true;
            }
        } else if (section.endsWith('m')) {
            // Minutes
            const value = parseInt(section);
            if (!isNaN(value)) {
                milliseconds += value * 60 * 1000; // Convert minutes to milliseconds
                validSectionFound = true;
            }
        } else if (section.endsWith('s')) {
            // Seconds
            const value = parseInt(section);
            if (!isNaN(value)) {
                milliseconds += value * 1000; // Convert seconds to milliseconds
                validSectionFound = true;
            }
        }
    }

    if (!validSectionFound) {
        return -1;
    }

    return milliseconds;
}

/**
 *
 * @param ms - Milliseconds to convert
 * @returns
 */
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
        options.LongFormat ? (time += days + ' Days ') : (time += days + ' D ');
        ms -= days * (1000 * 60 * 60 * 24);
        if (options.Compact) return time;
    }
    if (hours > 0) {
        options.LongFormat
            ? (time += hours + ' Hours ')
            : (time += hours + ' H ');
        ms -= hours * (1000 * 60 * 60);
        if (options.Compact) return time;
    }
    if (minutes > 0) {
        options.LongFormat
            ? (time += minutes + ' Minutes ')
            : (time += minutes + ' M ');
        ms -= minutes * (1000 * 60);
        if (options.Compact) return time;
    }
    if (seconds > 0) {
        options.LongFormat
            ? (time += seconds + ' Seconds ')
            : (time += seconds + ' S ');
        ms -= seconds * 1000;
        if (options.Compact) return time;
    }
    if (ms > 0) {
        options.LongFormat
            ? (time += ms + ' Milliseconds ')
            : (time += ms + ' MS ');
        if (options.Compact) return time;
    }

    return time;
}

/**
 *
 * @param ms - Milliseconds to convert
 * @returns
 */
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
