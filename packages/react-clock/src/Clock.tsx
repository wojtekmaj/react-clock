import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { getHours, getMilliseconds, getMinutes, getSeconds } from '@wojtekmaj/date-utils';

import Hand from './Hand.js';
import MinuteMark from './MinuteMark.js';
import HourMark from './HourMark.js';

import type { formatHour as defaultFormatHour } from './shared/hourFormatter.js';

import {
  isHandLength,
  isOppositeHandLength,
  isHandWidth,
  isMarkLength,
  isMarkWidth,
} from './shared/propTypes.js';

import type {
  ClassName,
  HandLength,
  HandWidth,
  MarkLength,
  MarkWidth,
  OppositeHandLength,
} from './shared/types.js';

export type ClockProps = {
  /**
   * Class name(s) that will be added along with `"react-clock"` to the main react-clock `<time>` element.
   *
   * @example 'class1 class2'
   * @example ['class1', 'class2 class3']
   */
  className?: ClassName;
  /**
   * Function called to override default formatting of hour marks. Can be used to use your own formatting function.
   *
   * @example (locale, hour) => formatHour(hour, 'HH')
   */
  formatHour?: typeof defaultFormatHour;
  /**
   * Hour hand length, in %.
   *
   * @default 50
   * @example 80
   */
  hourHandLength?: HandLength;
  /**
   * The length of the part of an hour hand on the opposite side the hand is pointing to, in %.
   *
   * @default 10
   * @example 20
   */
  hourHandOppositeLength?: OppositeHandLength;
  /**
   * Hour hand width, in pixels.
   *
   * @default 4
   * @example 3
   */
  hourHandWidth?: HandWidth;
  /**
   * Hour marks length, in %.
   *
   * @default 10
   * @example 8
   */
  hourMarksLength?: MarkLength;
  /**
   * Hour marks width, in pixels.
   *
   * @default 3
   * @example 2
   */
  hourMarksWidth?: MarkWidth;
  /**
   * Locale that should be used by the clock. Can be any [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag).
   *
   * **Note**: When using SSR, setting this prop may help resolving hydration errors caused by locale mismatch between server and client.
   *
   * @example 'hu-HU'
   */
  locale?: string;
  /**
   * Minute hand length, in %.
   *
   * @default 70
   * @example 80
   */
  minuteHandLength?: HandLength;
  /**
   * The length of the part of a minute hand on the opposite side the hand is pointing to, in %.
   *
   * @default 10
   * @example 20
   */
  minuteHandOppositeLength?: OppositeHandLength;
  /**
   * Minute hand width, in pixels.
   *
   * @default 2
   * @example 3
   */
  minuteHandWidth?: HandWidth;
  /**
   * Minute marks length, in %.
   *
   * @default 6
   * @example 8
   */
  minuteMarksLength?: MarkLength;
  /**
   * Minute marks width, in pixels.
   *
   * @default 1
   * @example 2
   */
  minuteMarksWidth?: MarkWidth;
  /**
   * Whether hour marks shall be rendered.
   *
   * @default true
   * @example false
   */
  renderHourMarks?: boolean;
  /**
   * Whether minute hand shall be rendered.
   *
   * @default true
   * @example false
   */
  renderMinuteHand?: boolean;
  /**
   * Whether minute marks shall be rendered.
   *
   * @default true
   * @example false
   */
  renderMinuteMarks?: boolean;
  /**
   * Whether numbers shall be rendered.
   *
   * @default true
   * @example false
   */
  renderNumbers?: boolean;
  /**
   * Whether second hand shall be rendered.
   *
   * @default true
   * @example false
   */
  renderSecondHand?: boolean;
  /**
   * Second hand length, in %.
   *
   * @default 90
   * @example 80
   */
  secondHandLength?: HandLength;
  /**
   * The length of the part of a second hand on the opposite side the hand is pointing to, in %.
   *
   * @default 10
   * @example 20
   */
  secondHandOppositeLength?: OppositeHandLength;
  /**
   * Second hand width, in pixels.
   *
   * @default 1
   * @example 2
   */
  secondHandWidth?: HandWidth;
  /**
   * Clock size, in pixels (e.g. `200`) or as string (e.g. `"50vw"`).
   *
   * @default 150
   * @example 260
   * @example '50vw'
   */
  size?: React.CSSProperties['width'];
  /**
   * Whether to use millisecond precision.
   *
   * @default false
   * @example true
   */
  useMillisecondPrecision?: boolean;
  /**
   * Clock value. Must be provided.
   *
   * @example new Date()
   */
  value?: string | Date | null;
};

/**
 * Displays a complete clock.
 */
const Clock: React.FC<ClockProps> = function Clock({
  className,
  formatHour,
  hourHandLength = 50,
  hourHandOppositeLength,
  hourHandWidth = 4,
  hourMarksLength = 10,
  hourMarksWidth = 3,
  locale,
  minuteHandLength = 70,
  minuteHandOppositeLength,
  minuteHandWidth = 2,
  minuteMarksLength = 6,
  minuteMarksWidth = 1,
  renderHourMarks = true,
  renderMinuteHand = true,
  renderMinuteMarks = true,
  renderNumbers,
  renderSecondHand = true,
  secondHandLength = 90,
  secondHandOppositeLength,
  secondHandWidth = 1,
  size = 150,
  useMillisecondPrecision,
  value,
}) {
  function renderMinuteMarksFn() {
    if (!renderMinuteMarks) {
      return null;
    }

    const minuteMarks = [];
    for (let i = 1; i <= 60; i += 1) {
      const isHourMark = renderHourMarks && !(i % 5);

      if (!isHourMark) {
        minuteMarks.push(
          <MinuteMark
            key={`minute_${i}`}
            angle={i * 6}
            length={minuteMarksLength}
            name="minute"
            width={minuteMarksWidth}
          />,
        );
      }
    }
    return minuteMarks;
  }

  function renderHourMarksFn() {
    if (!renderHourMarks) {
      return null;
    }

    const hourMarks = [];
    for (let i = 1; i <= 12; i += 1) {
      hourMarks.push(
        <HourMark
          key={`hour_${i}`}
          angle={i * 30}
          formatHour={formatHour}
          length={hourMarksLength}
          locale={locale}
          name="hour"
          number={renderNumbers ? i : undefined}
          width={hourMarksWidth}
        />,
      );
    }
    return hourMarks;
  }

  function renderFace() {
    return (
      <div className="react-clock__face">
        {renderMinuteMarksFn()}
        {renderHourMarksFn()}
      </div>
    );
  }

  function renderHourHandFn() {
    const angle = value
      ? getHours(value) * 30 +
        getMinutes(value) / 2 +
        getSeconds(value) / 120 +
        (useMillisecondPrecision ? getMilliseconds(value) / 120000 : 0)
      : 0;

    return (
      <Hand
        angle={angle}
        length={hourHandLength}
        name="hour"
        oppositeLength={hourHandOppositeLength}
        width={hourHandWidth}
      />
    );
  }

  function renderMinuteHandFn() {
    if (!renderMinuteHand) {
      return null;
    }

    const angle = value
      ? getHours(value) * 360 +
        getMinutes(value) * 6 +
        getSeconds(value) / 10 +
        (useMillisecondPrecision ? getMilliseconds(value) / 10000 : 0)
      : 0;

    return (
      <Hand
        angle={angle}
        length={minuteHandLength}
        name="minute"
        oppositeLength={minuteHandOppositeLength}
        width={minuteHandWidth}
      />
    );
  }

  function renderSecondHandFn() {
    if (!renderSecondHand) {
      return null;
    }

    const angle = value
      ? getMinutes(value) * 360 +
        getSeconds(value) * 6 +
        (useMillisecondPrecision ? getMilliseconds(value) * 0.006 : 0)
      : 0;

    return (
      <Hand
        angle={angle}
        length={secondHandLength}
        name="second"
        oppositeLength={secondHandOppositeLength}
        width={secondHandWidth}
      />
    );
  }

  return (
    <time
      className={clsx('react-clock', className)}
      dateTime={value instanceof Date ? value.toISOString() : value || undefined}
      style={{
        width: size,
        height: size,
      }}
    >
      {renderFace()}
      {renderHourHandFn()}
      {renderMinuteHandFn()}
      {renderSecondHandFn()}
    </time>
  );
};

Clock.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  formatHour: PropTypes.func,
  hourHandLength: isHandLength,
  hourHandOppositeLength: isOppositeHandLength,
  hourHandWidth: isHandWidth,
  hourMarksLength: isMarkLength,
  hourMarksWidth: isMarkWidth,
  locale: PropTypes.string,
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
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

export default Clock;
