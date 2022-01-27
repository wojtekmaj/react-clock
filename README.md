[![npm](https://img.shields.io/npm/v/react-clock.svg)](https://www.npmjs.com/package/react-clock) ![downloads](https://img.shields.io/npm/dt/react-clock.svg) [![CI](https://github.com/wojtekmaj/react-clock/workflows/CI/badge.svg)](https://github.com/wojtekmaj/react-clock/actions) ![dependencies](https://img.shields.io/david/wojtekmaj/react-clock.svg) ![dev dependencies](https://img.shields.io/david/dev/wojtekmaj/react-clock.svg) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# React-Clock

An analog clock for your React app.

## tl;dr

- Install by executing `npm install react-clock` or `yarn add react-clock`.
- Import by adding `import Clock from 'react-clock'`.
- Use by adding `<Clock />`.

## Demo

A minimal demo page can be found in `sample` directory.

[Online demo](http://projects.wojtekmaj.pl/react-clock/) is also available!

## Installation

Add React-Clock to your project by executing `npm install react-clock` or `yarn add react-clock`.

### Usage

Here's an example of basic usage:

```js
import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

function MyApp() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <Clock value={value} />
    </div>
  );
}
```

### Custom styling

If you want to use default React-Clock styling to build upon it, you can import React-Clock's styles by using:

```js
import 'react-clock/dist/Clock.css';
```

## User guide

### Clock

Displays a complete clock.

#### Props

| Prop name                | Description                                                                                                               | Default value           | Example values                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------------------------------------------------- |
| className                | Class name(s) that will be added along with `"react-clock"` to the main React-Clock `<time>` element.                     | n/a                     | <ul><li>String: `"class1 class2"`</li><li>Array of strings: `["class1", "class2 class3"]`</li></ul> |
| formatHour               | Function called to override default formatting of hour marks. Can be used to use your own formatting function.            | (default formatter)     | `(locale, hour) => formatHour(hour, 'HH')`                                                          |
| hourHandLength           | Hour hand length, in %.                                                                                                   | `50`                    | `80`                                                                                                |
| hourHandOppositeLength   | The length of the part of an hour hand on the opposite side the hand is pointing to, in %.                                | `10`                    | `20`                                                                                                |
| hourHandWidth            | Hour hand width, in pixels.                                                                                               | `4`                     | `3`                                                                                                 |
| hourMarksLength          | Hour marks length, in %.                                                                                                  | `10`                    | `8`                                                                                                 |
| hourMarksWidth           | Hour marks width, in pixels.                                                                                              | `3`                     | `2`                                                                                                 |
| locale                   | Locale that should be used by the clock. Can be any [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). | User's browser settings | `"hu-HU"`                                                                                           |
| minuteHandLength         | Minute hand length, in %.                                                                                                 | `70`                    | `80`                                                                                                |
| minuteHandOppositeLength | The length of the part of a minute hand on the opposite side the hand is pointing to, in %.                               | `10`                    | `20`                                                                                                |
| minuteHandWidth          | Minute hand width, in pixels.                                                                                             | `2`                     | `3`                                                                                                 |
| minuteMarksLength        | Minute marks length, in %.                                                                                                | `6`                     | `8`                                                                                                 |
| minuteMarksWidth         | Minute marks width, in pixels.                                                                                            | `1`                     | `2`                                                                                                 |
| renderHourMarks          | Whether hour marks shall be rendered.                                                                                     | `true`                  | `false`                                                                                             |
| renderMinuteHand         | Whether minute hand shall be rendered.                                                                                    | `true`                  | `false`                                                                                             |
| renderMinuteMarks        | Whether minute marks shall be rendered.                                                                                   | `true`                  | `false`                                                                                             |
| renderNumbers            | Whether numbers shall be rendered.                                                                                        | `false`                 | `true`                                                                                              |
| renderSecondHand         | Whether second hand shall be rendered.                                                                                    | `true`                  | `false`                                                                                             |
| secondHandLength         | Second hand length, in %.                                                                                                 | `90`                    | `80`                                                                                                |
| secondHandOppositeLength | The length of the part of a second hand on the opposite side the hand is pointing to, in %.                               | `10`                    | `20`                                                                                                |
| secondHandWidth          | Second hand width, in pixels.                                                                                             | `1`                     | `2`                                                                                                 |
| size                     | Clock size, in pixels.                                                                                                    | `150`                   | `250`                                                                                               |
| value                    | Clock value. Must be provided.                                                                                            | n/a                     | Date: `new Date()`                                                                                  |

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="https://wojtekmaj.pl">https://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
