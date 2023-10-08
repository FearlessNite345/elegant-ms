<div align="center">
  <a href="https://www.npmjs.com/package/elegant-ms">
    <img src="https://img.shields.io/npm/v/elegant-ms?style=for-the-badge" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/elegant-ms">
    <img src="https://img.shields.io/npm/dt/elegant-ms?style=for-the-badge" alt="npm downloads" />
  </a>
  <a href="https://www.npmjs.com/package/elegant-ms">
    <img src="https://img.shields.io/npm/l/elegant-ms?style=for-the-badge" alt="npm license" />
  </a>
  <br />
  <a href="https://www.npmjs.com/package/elegant-ms">
    <img src="https://img.shields.io/github/issues/FearlessNite345/elegant-ms?style=for-the-badge" alt="npm license" />
  </a>
  <a href="https://www.npmjs.com/package/elegant-ms">
    <img src="https://img.shields.io/github/stars/FearlessNite345/elegant-ms?style=for-the-badge" alt="npm license" />
  </a>
  <a href="https://www.npmjs.com/package/elegant-ms">
    <img src="https://img.shields.io/github/forks/FearlessNite345/elegant-ms?style=for-the-badge" alt="npm license" />
  </a>
</div>

# elegant-ms

elegant-ms is a simple package library that helps you convert Milliseconds to a human readable format

## Features

-   Beginner friendly
-   Convert MS to Time String
-   Convert MS to Date String
-   Convert MS to Duration format
-   Convert MS to Discord timestamp format

## Installation

```bash
npm install elegant-ms
```

## Usage

This is a small usage example of how you can use this package

### CJS

```js
const {
    discordTimestamps,
    msToDateString,
    msToDiscordTimestampString,
    msToDuration,
    msToTimeString,
    stringToMS,
} = require('elegant-ms');

console.log(msToDuration(65_000)); // -> 1m 5s
console.log(msToDateString(1696784400000)); // -> Sunday, October 8, 2023
console.log(msToTimeString(1696784400000)); // -> 1:00:00 PM
console.log(stringToMS('1m 5s')); // -> 65000
console.log(
    msToDiscordTimestampString(1696784400000, discordTimestamps.RelativeTime)
); // -> '<t:1696784400:R>'
```

### ESM

```ts
import {
    discordTimestamps,
    msToDateString,
    msToDiscordTimestampString,
    msToDuration,
    msToTimeOptions,
    msToTimeString,
    stringToMS,
} from 'elegant-ms';

console.log(msToDuration(65_000)); // -> 1m 5s
console.log(msToDateString(1696784400000)); // -> Sunday, October 8, 2023
console.log(msToTimeString(1696784400000)); // -> 1:00:00 PM
console.log(stringToMS('1m 5s')); // -> 65000
console.log(
    msToDiscordTimestampString(1696784400000, discordTimestamps.RelativeTime)
); // -> '<t:1696784400:R>'
```

## Changelog

#### v0.0.6

-   Improved readme file

#### v0.0.5

-   Improved error handling of the stringToMS function
