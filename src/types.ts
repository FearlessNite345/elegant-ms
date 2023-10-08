/**
 * Options for the msToTime function.
 */
export type msToTimeOptions = {
    /**
     * Whether to use long format ("3 days, 5 hours, 10 minutes") or short format ("3d 5h 10m").
     *
     * @default false
     */
    LongFormat?: boolean;

    /**
     * Only show the first time value (1h, 10m) would instead return (1h)
     *
     * @default false
     */
    Compact?: boolean;
};

export enum discordTimestamps {
    Default,
    ShortTime,
    LongTime,
    ShortDate,
    LongDate,
    ShortDateTime,
    LongDateTime,
    RelativeTime,
}