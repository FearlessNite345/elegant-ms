# ms-beautify

<div align="center">
    <a href="https://www.npmjs.com/package/ms-beautify"><img src="https://img.shields.io/npm/v/ms-beautify?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/ms-beautify"><img src="https://img.shields.io/npm/dt/ms-beautify?maxAge=3600" alt="npm downloads" /></a>
</div>

ms-beautify is a simple package library that helps you convert Milliseconds to a human readable format

## Features

-   Beginner friendly
-   Convert MS to Time String (7:15:30 PM)
-   Convert MS to Date String (Wednesday, December 19, 2012)
-   Convert MS to Duration format (1h, 10m, 15s)

## Installation

```bash
npm install ms-beautify
```

## Usage

This is a small usage example of how you can use this package

```js
const { msToDuration } = require('ms-beautify')

console.log(msToDuration(65_000))
```