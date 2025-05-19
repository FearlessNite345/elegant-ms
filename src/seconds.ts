import { discordTimestamps, secondsToTimeOptions } from "./types";

export function secondsToDiscordTimestampString(
  seconds: number,
  type: discordTimestamps
): string {
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

export function stringToSeconds(timeString: string): number {
  const sections = timeString.split(" ");
  let seconds = 0;
  let valid = false;

  for (const section of sections) {
    if (section.startsWith("-")) return -1;

    const value = parseInt(section);
    if (isNaN(value)) continue;

    if (section.endsWith("d")) {
      seconds += value * 86400;
      valid = true;
    } else if (section.endsWith("h")) {
      seconds += value * 3600;
      valid = true;
    } else if (section.endsWith("m")) {
      seconds += value * 60;
      valid = true;
    } else if (section.endsWith("s")) {
      seconds += value;
      valid = true;
    }
  }

  return valid ? seconds : -1;
}

export function secondsToDateString(seconds: number): string {
  const date = new Date(seconds * 1000);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export function secondsToDuration(
  seconds: number,
  options: secondsToTimeOptions = { LongFormat: false, Compact: false }
): string {
  let time = "";
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  if (days > 0) {
    time += options.LongFormat ? `${days} Days ` : `${days} D `;
    if (options.Compact) return time;
  }
  if (hours > 0) {
    time += options.LongFormat ? `${hours} Hours ` : `${hours} H `;
    if (options.Compact) return time;
  }
  if (minutes > 0) {
    time += options.LongFormat ? `${minutes} Minutes ` : `${minutes} M `;
    if (options.Compact) return time;
  }
  if (seconds > 0) {
    time += options.LongFormat ? `${seconds} Seconds ` : `${seconds} S `;
    if (options.Compact) return time;
  }

  return time.trim();
}

export function secondsToTimeString(seconds: number): string {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}
