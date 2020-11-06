import React, { PureComponent } from 'react';
import Clock from 'react-clock/src';
import 'react-clock/src/Clock.less';
import { getHoursMinutesSeconds } from '@wojtekmaj/date-utils';

import ValueOptions from './ValueOptions';
import ViewOptions from './ViewOptions';

import './Test.less';

export default class Test extends PureComponent {
  state = {
    renderHourMarks: true,
    renderMinuteHand: true,
    renderMinuteMarks: true,
    renderNumbers: true,
    renderSecondHand: true,
    value: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      const now = new Date();
      this.setState({ value: now });
    }, 1000);
  }

  onChange = (value) => this.setState({ value })

  renderDebugInfo() {
    const { value } = this.state;

    const renderTime = (timeToRender) => {
      if (timeToRender instanceof Date) {
        return getHoursMinutesSeconds(timeToRender);
      }
      return timeToRender;
    };

    return (
      <p>
        Current time:
        {' '}
        {value ? renderTime(value) : '(none)'}
      </p>
    );
  }

  render() {
    const {
      renderHourMarks,
      renderMinuteHand,
      renderMinuteMarks,
      renderNumbers,
      renderSecondHand,
      value,
    } = this.state;

    const setState = (state) => this.setState(state);

    return (
      <div className="Test">
        <header>
          <h1>
            react-clock test page
          </h1>
        </header>
        <div className="Test__container">
          <aside className="Test__container__options">
            <ValueOptions
              setState={setState}
              value={value}
            />
            <ViewOptions
              renderHourMarks={renderHourMarks}
              renderMinuteHand={renderMinuteHand}
              renderMinuteMarks={renderMinuteMarks}
              renderNumbers={renderNumbers}
              renderSecondHand={renderSecondHand}
              setState={setState}
            />
          </aside>
          <main className="Test__container__content">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                /* eslint-disable no-console */
                console.error('Clock triggered submitting the form.');
                console.log(event);
                /* eslint-enable no-console */
              }}
            >
              <Clock
                className="myCustomClockClassName"
                onChange={this.onChange}
                renderHourMarks={renderHourMarks}
                renderMinuteHand={renderMinuteHand}
                renderMinuteMarks={renderMinuteMarks}
                renderNumbers={renderNumbers}
                renderSecondHand={renderSecondHand}
                size={200}
                value={value}
              />
            </form>
            {this.renderDebugInfo()}
          </main>
        </div>
      </div>
    );
  }
}
