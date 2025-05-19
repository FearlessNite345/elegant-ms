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
  <a href="https://github.com/FearlessNite345/elegant-ms/issues">
    <img src="https://img.shields.io/github/issues/FearlessNite345/elegant-ms?style=for-the-badge" alt="npm issues" />
  </a>
  <a href="https://github.com/FearlessNite345/elegant-ms/stargazers">
    <img src="https://img.shields.io/github/stars/FearlessNite345/elegant-ms?style=for-the-badge" alt="npm stars" />
  </a>
  <a href="https://github.com/FearlessNite345/elegant-ms/network/members">
    <img src="https://img.shields.io/github/forks/FearlessNite345/elegant-ms?style=for-the-badge" alt="npm forks" />
  </a>
</div>

# elegant-ms

**elegant-ms** is a simple, beginner-friendly package that helps you convert **milliseconds** and **seconds** into various human-readable formats — including Discord timestamps, duration strings, and more.

---

## ✅ Features

- Beginner friendly
- Convert **MS** to Time String
- Convert **MS** to Date String
- Convert **MS** to Duration format
- Convert **MS** to Discord timestamp format
- Convert **Seconds** to Time String
- Convert **Seconds** to Date String
- Convert **Seconds** to Duration format
- Convert **Seconds** to Discord timestamp format
- Parse strings like `1d 2h 3m` into **MS** or **Seconds**

---

## 📦 Installation

```bash
npm install elegant-ms
```

---

## 📘 Usage

### CommonJS (CJS)

```js
const {
  discordTimestamps,
  msToDateString,
  msToTimeString,
  msToDuration,
  msToDiscordTimestampString,
  stringToMS,
  secondsToDateString,
  secondsToTimeString,
  secondsToDuration,
  secondsToDiscordTimestampString,
  stringToSeconds
} = require('elegant-ms');
...
```

### ESM (TypeScript)

```ts
import {
  discordTimestamps,
  msToDateString,
  msToTimeString,
  msToDuration,
  msToDiscordTimestampString,
  stringToMS,
  secondsToDateString,
  secondsToTimeString,
  secondsToDuration,
  secondsToDiscordTimestampString,
  stringToSeconds,
} from 'elegant-ms';
...
```

---

## 📈 Changelog

### v0.0.7

- Added full support for **Seconds**-based conversion:
  - `secondsToDuration`
  - `secondsToDateString`
  - `secondsToTimeString`
  - `secondsToDiscordTimestampString`
  - `stringToSeconds`
- Added `secondsToTimeOptions` type

### v0.0.6

- Improved README formatting

### v0.0.5

- Improved error handling in `stringToMS`

---

Enjoy using `elegant-ms` and feel free to contribute or open issues! 🎉