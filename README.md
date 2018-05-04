![downloads](https://img.shields.io/npm/dt/react-clock.svg) ![build](https://img.shields.io/travis/wojtekmaj/react-clock/master.svg) ![dependencies](https://img.shields.io/david/wojtekmaj/react-clock.svg
) ![dev dependencies](https://img.shields.io/david/dev/wojtekmaj/react-clock.svg
) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# React-Clock

An analog clock for your React app.

## tl;dr
* Install by executing `npm install react-clock` or `yarn add react-clock`.
* Import by adding `import Clock from 'react-clock'`.
* Use by adding `<Clock />`.

## Demo

Minimal demo page is included in sample directory.

[Online demo](http://projects.wojtekmaj.pl/react-clock/) is also available!

## Installation

Add React-Clock to your project by executing `npm install react-clock` or `yarn add react-clock`.

### Usage

Here's an example of basic usage:

```js
import React, { Component } from 'react';
import Clock from 'react-clock';

class MyApp extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div>
        <p>Current time:</p>
        <Clock
          value={this.state.date}
        />
      </div>
    );
  }
}
```

### Custom styling

If you don't want to use default React-Clock styling to build upon it, you can import React-Clock by using `import Clock from 'react-clock/dist/entry.nostyle';` instead.

## User guide

### Clock

Displays a complete clock.

#### Props

|Prop name|Description|Example values|
|----|----|----|
|className|Defines class name(s) that will be added along with "react-clock" to the main React-Clock `<time>` element.|<ul><li>String: `"class1 class2"`</li><li>Array of strings: `["class1", "class2 class3"]`</li></ul>|
|hourHandLength|Defines the length of an hour hand, in %. Defaults to `50`.|`80`|
|hourHandOppositeLength|Defines the length of the part of an hour hand on the opposite side the hand is pointing to, in %. Defaults to `10`.|`20`|
|hourHandWidth|Defines the width of an hour hand, in pixels. Defaults to `4`.|`3`|
|hourMarksLength|Defines the length of hour marks, in %. Defaults to `10`.|`8`|
|hourMarksWidth|Defines the width of hour marks, in pixels. Defaults to `3`.|`2`|
|minuteHandLength|Defines the length of a minute hand, in %. Defaults to `70`.|`80`|
|minuteHandOppositeLength|Defines the length of the part of a minute hand on the opposite side the hand is pointing to, in %. Defaults to `10`.|`20`|
|minuteHandWidth|Defines the width of a minute hand, in pixels. Defaults to `2`.|`3`|
|minuteMarksLength|Defines the length of minute marks, in %. Defaults to `6`.|`8`|
|minuteMarksWidth|Defines the width of a minute hand, in pixels. Defaults to `1`.|`2`|
|renderHourMarks|Defines whether hour marks shall be rendered. Defaults to `true`.|`false`|
|renderMinuteHand|Defines whether minute hand shall be rendered. Defaults to `true`.|`false`|
|renderMinuteMarks|Defines whether minute marks shall be rendered. Defaults to `true`.|`false`|
|renderNumbers|Defined whether numbers shall be rendered. Defaults to `false`.|`true`|
|renderSecondHand|Defines whether second hand shall be rendered. Defaults to `true`.|`false`|
|secondHandLength|Defines the length of a second hand, in %. Defaults to `90`.|`80`|
|secondHandOppositeLength|Defines the length of the part of a second hand on the opposite side the hand is pointing to, in %. Defaults to `10`.|`20`|
|secondHandWidth|Defines the width of a second hand, in pixels. Defaults to `1`.|`2`|
|size|Defines the size of the clock, in pixels. Defaults to `150`.|`250`|
|value|Defines the value of the clock. Must be provided.|Date: `new Date()`|

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
      <a href="http://wojtekmaj.pl">http://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
