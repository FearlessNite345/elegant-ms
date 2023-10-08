# elegant-ms

<div align="center">
    <a href="https://www.npmjs.com/package/elegant-ms"><img src="https://img.shields.io/npm/v/elegant-ms
" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/elegant-ms"><img src="https://img.shields.io/npm/dt/elegant-ms
" alt="npm downloads" /></a>
    <a href="https://www.npmjs.com/package/elegant-ms"><img src="https://img.shields.io/npm/l/elegant-ms
" alt="npm license" /></a>
</div>

elegant-ms is a simple package library that helps you convert Milliseconds to a human readable format

## Features

-   Beginner friendly
-   Convert MS to Time String (7:15:30 PM)
-   Convert MS to Date String (Wednesday, December 19, 2012)
-   Convert MS to Duration format (1h, 10m, 15s)

## Changelog

#### v0.0.5

-   Improved error handling of the stringToMS function

#### v0.0.4

-   Fixed issue where it would not throw a error if the stringToMS was not a valid string

## Installation

```bash
npm install elegant-ms
```

## Usage

This is a small usage example of how you can use this package

```js
const { msToDuration } = require('elegant-ms');

console.log(msToDuration(65_000)); // -> 1m 5s
```
