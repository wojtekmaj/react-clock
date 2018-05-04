import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import Hand from './Hand';
import Mark from './Mark';

import {
  getHours,
  getMinutes,
  getSeconds,
} from './shared/dates';

import { isHandLength, isOppositeHandLength, isHandWidth, isMarkLength, isMarkWidth } from './shared/propTypes';

export default class Clock extends Component {
  renderMinuteMarks() {
    if (!this.props.renderMinuteMarks) {
      return null;
    }

    const {
      minuteMarksLength,
      minuteMarksWidth,
      renderHourMarks,
    } = this.props;

    const minuteMarks = [];
    for (let i = 1; i <= 60; i += 1) {
      const isHourMark = renderHourMarks && !(i % 5);

      if (!isHourMark) {
        minuteMarks.push(
          <Mark
            angle={i * 6}
            key={`minute_${i}`}
            length={minuteMarksLength}
            name="minute"
            width={minuteMarksWidth}
          />,
        );
      }
    }
    return minuteMarks;
  }

  renderHourMarks() {
    if (!this.props.renderHourMarks) {
      return null;
    }

    const {
      hourMarksLength,
      hourMarksWidth,
      renderNumbers,
    } = this.props;

    const hourMarks = [];
    for (let i = 1; i <= 12; i += 1) {
      hourMarks.push(
        <Mark
          angle={i * 30}
          key={`hour_${i}`}
          number={renderNumbers ? i : null}
          length={hourMarksLength}
          name="hour"
          width={hourMarksWidth}
        />,
      );
    }
    return hourMarks;
  }

  renderFace() {
    return (
      <div className="react-clock__face">
        {this.renderMinuteMarks()}
        {this.renderHourMarks()}
      </div>
    );
  }

  renderHourHand() {
    const {
      hourHandWidth,
      hourHandLength,
      hourHandOppositeLength,
      value,
    } = this.props;

    const angle = value ? (
      (getHours(value) * 30) +
      (getMinutes(value) / 2) +
      (getSeconds(value) / 600)
    ) : 0;

    return (
      <Hand
        angle={angle}
        name="hour"
        length={hourHandLength}
        oppositeLength={hourHandOppositeLength}
        width={hourHandWidth}
      />
    );
  }

  renderMinuteHand() {
    if (!this.props.renderMinuteHand) {
      return null;
    }

    const {
      minuteHandWidth,
      minuteHandLength,
      minuteHandOppositeLength,
      value,
    } = this.props;

    const angle = value ? (
      (getHours(value) * 360) +
      (getMinutes(value) * 6) +
      (getSeconds(value) / 10)
    ) : 0;

    return (
      <Hand
        angle={angle}
        name="minute"
        length={minuteHandLength}
        oppositeLength={minuteHandOppositeLength}
        width={minuteHandWidth}
      />
    );
  }

  renderSecondHand() {
    if (!this.props.renderSecondHand) {
      return null;
    }

    const {
      secondHandWidth,
      secondHandLength,
      secondHandOppositeLength,
      value,
    } = this.props;

    const angle = value ? (
      (getMinutes(value) * 360) +
      (getSeconds(value) * 6)
    ) : 0;

    return (
      <Hand
        name="second"
        angle={angle}
        length={secondHandLength}
        oppositeLength={secondHandOppositeLength}
        width={secondHandWidth}
      />
    );
  }

  render() {
    const { size, value } = this.props;

    return (
      <time
        className={mergeClassNames('react-clock', this.props.className)}
        dateTime={value instanceof Date ? value.toISOString() : value}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {this.renderFace()}
        {this.renderHourHand()}
        {this.renderMinuteHand()}
        {this.renderSecondHand()}
      </time>
    );
  }
}

Clock.defaultProps = {
  hourHandLength: 50,
  hourHandWidth: 4,
  hourMarksLength: 10,
  hourMarksWidth: 3,
  minuteHandLength: 70,
  minuteHandWidth: 2,
  minuteMarksLength: 6,
  minuteMarksWidth: 1,
  renderHourMarks: true,
  renderMinuteHand: true,
  renderMinuteMarks: true,
  renderSecondHand: true,
  secondHandLength: 90,
  secondHandWidth: 1,
  size: 150,
};

Clock.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  hourHandLength: isHandLength,
  hourHandOppositeLength: isOppositeHandLength,
  hourHandWidth: isHandWidth,
  hourMarksLength: isMarkLength,
  hourMarksWidth: isMarkWidth,
  minuteHandLength: isHandLength,
  minuteHandOppositeLength: isOppositeHandLength,
  minuteHandWidth: isHandWidth,
  minuteMarksLength: isMarkLength,
  minuteMarksWidth: isMarkWidth,
  renderHourMarks: PropTypes.bool,
  renderMinuteHand: PropTypes.bool,
  renderMinuteMarks: PropTypes.bool,
  renderNumbers: PropTypes.bool,
  renderSecondHand: PropTypes.bool,
  secondHandLength: isHandLength,
  secondHandOppositeLength: isOppositeHandLength,
  secondHandWidth: isHandWidth,
  size: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
};
