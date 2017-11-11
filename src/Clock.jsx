import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import Hand from './Hand';
import Mark from './Mark';

export default class Clock extends Component {
  renderFace() {
    const {
      renderMinuteMarks,
      renderHourMarks,
      minuteMarksLength,
      minuteMarksWidth,
      hourMarksLength,
      hourMarksWidth,
    } = this.props;

    const marks = [];

    if (renderMinuteMarks) {
      for (let i = 1; i <= 60; i += 1) {
        const isHour = renderHourMarks && !(i % 5);
        const width = isHour ? hourMarksWidth : minuteMarksWidth;
        const length = isHour ? hourMarksLength : minuteMarksLength;

        marks.push(
          <Mark
            angle={i * 6}
            key={isHour ? `hour_${Math.floor(i / 5)}` : `minute_${i}`}
            length={length}
            name={isHour ? 'hour' : 'minute'}
            width={width}
          />,
        );
      }
    } else if (renderHourMarks) {
      for (let i = 1; i <= 12; i += 1) {
        marks.push(
          <Mark
            angle={i * 30}
            key={`hour_${i}`}
            length={hourMarksLength}
            name="hour"
            width={hourMarksWidth}
          />,
        );
      }
    }

    return (
      <div className="react-clock__face">
        {marks}
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

    const angle = (value.getHours() * 30) + (value.getMinutes() / 2) + (value.getSeconds() / 600);

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

    const angle = (value.getMinutes() * 6) + (value.getSeconds() / 10);

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

    const angle = value.getSeconds() * 6;

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
    const { size } = this.props;

    return (
      <div
        className={mergeClassNames('react-clock', this.props.className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {this.renderFace()}
        {this.renderHourHand()}
        {this.renderMinuteHand()}
        {this.renderSecondHand()}
      </div>
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
  renderMinuteMarks: true,
  secondHandLength: 90,
  secondHandWidth: 1,
  size: 150,
};

Clock.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  hourHandLength: PropTypes.number,
  hourHandOppositeLength: PropTypes.number,
  hourHandWidth: PropTypes.number,
  hourMarksLength: PropTypes.number,
  hourMarksWidth: PropTypes.number,
  minuteHandLength: PropTypes.number,
  minuteHandOppositeLength: PropTypes.number,
  minuteHandWidth: PropTypes.number,
  minuteMarksLength: PropTypes.number,
  minuteMarksWidth: PropTypes.number,
  renderHourMarks: PropTypes.bool,
  renderMinuteHand: PropTypes.bool,
  renderMinuteMarks: PropTypes.bool,
  renderSecondHand: PropTypes.bool,
  secondHandLength: PropTypes.number,
  secondHandOppositeLength: PropTypes.number,
  secondHandWidth: PropTypes.number,
  size: PropTypes.number,
  value: PropTypes.instanceOf(Date),
};
