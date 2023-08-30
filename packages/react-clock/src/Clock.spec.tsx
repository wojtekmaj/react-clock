import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';

import Clock from './Clock.js';

describe('Clock', () => {
  describe('<time> element', () => {
    it('is rendered properly', () => {
      const { container } = render(<Clock />);

      const time = container.querySelector('time');

      expect(time).toBeInTheDocument();
    });

    it('has 150px size by default', () => {
      const { container } = render(<Clock />);

      const time = container.querySelector('time');

      expect(time).toHaveStyle('width: 150px');
      expect(time).toHaveStyle('height: 150px');
    });

    it('has proper size when given size', () => {
      const size = 167;

      const { container } = render(<Clock size={size} />);

      const time = container.querySelector('time');

      expect(time).toHaveAttribute('style', `width: ${size}px; height: ${size}px;`);
    });

    it('has proper datetime attribute when given Date value', () => {
      const date = new Date();

      const { container } = render(<Clock value={date} />);

      const time = container.querySelector('time');

      expect(time).toHaveAttribute('datetime', date.toISOString());
    });

    it('has proper datetime attribute when given string value', () => {
      const date = '22:17:00';

      const { container } = render(<Clock value={date} />);

      const time = container.querySelector('time');

      expect(time).toHaveAttribute('datetime', date);
    });
  });

  describe('clock face', () => {
    it('is rendered properly', () => {
      const { container } = render(<Clock />);

      const face = container.querySelector('.react-clock__face');

      expect(face).toBeInTheDocument();
    });

    it('has hour and minute marks by default', () => {
      const { container } = render(<Clock />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');
      const minuteMarks = container.querySelectorAll('.react-clock__minute-mark');

      expect(hourMarks).toHaveLength(12);
      expect(minuteMarks).toHaveLength(60 - 12);
    });

    it('does not have hour numbers rendered by default', () => {
      const { container } = render(<Clock />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');

      expect(hourMarks[0]).not.toHaveTextContent('1');
    });

    it('has hour numbers given renderNumbers flag', () => {
      const { container } = render(<Clock renderNumbers />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');

      hourMarks.forEach((hourMark, index) => {
        expect(hourMark).toHaveTextContent(`${index + 1}`);
      });
    });

    it('passes formatHour to HourMark components', () => {
      const formatHour = () => 'H';
      const { container } = render(<Clock formatHour={formatHour} renderNumbers />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');

      expect(hourMarks[0]).toHaveTextContent('H');
    });

    it('has only minute marks when renderHourMarks is false', () => {
      const { container } = render(<Clock renderHourMarks={false} />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');
      const minuteMarks = container.querySelectorAll('.react-clock__minute-mark');

      expect(hourMarks).toHaveLength(0);
      expect(minuteMarks).toHaveLength(60);
    });

    it('has only hour marks when renderMinuteMarks is false', () => {
      const { container } = render(<Clock renderMinuteMarks={false} />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');
      const minuteMarks = container.querySelectorAll('.react-clock__minute-mark');

      expect(hourMarks).toHaveLength(12);
      expect(minuteMarks).toHaveLength(0);
    });

    it('has no marks when renderHourMarks and renderMinuteMarks are false', () => {
      const { container } = render(<Clock renderHourMarks={false} renderMinuteMarks={false} />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');
      const minuteMarks = container.querySelectorAll('.react-clock__minute-mark');

      expect(hourMarks).toHaveLength(0);
      expect(minuteMarks).toHaveLength(0);
    });
  });

  const fullCircle = 360;
  const hourAngle = fullCircle / 12;
  const hourMinuteAngle = hourAngle / 60;
  const hourSecondAngle = hourMinuteAngle / 60;
  const hourMillisecondAngle = hourSecondAngle / 1000;
  const minuteAngle = fullCircle / 60;
  const minuteSecondAngle = minuteAngle / 60;
  const minuteMillisecondAngle = minuteSecondAngle / 1000;
  const secondAngle = fullCircle / 60;
  const secondMillisecondAngle = secondAngle / 1000;

  function getDeg(transform: string) {
    const match = transform.match(/rotate\(([0-9.]*)deg\)/);

    if (!match) {
      throw new Error('Could not parse transform');
    }

    const deg = match[1];

    if (!deg) {
      throw new Error('Could not parse transform');
    }

    return parseFloat(deg);
  }

  function getAngle(hand: HTMLElement) {
    return getDeg(window.getComputedStyle(hand).transform) % 360;
  }

  describe('hour hand', () => {
    it('is rendered properly', () => {
      const { container } = render(<Clock />);

      const hand = container.querySelector('.react-clock__hour-hand');

      expect(hand).toBeInTheDocument();
    });

    it('is properly angled by default', () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const date = new Date(2017, 0, 1, hour, minute, second);

      const { container } = render(<Clock value={date} />);

      const hand = container.querySelector('.react-clock__hour-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(
        hour * hourAngle + minute * hourMinuteAngle + second * hourSecondAngle,
      );
    });

    it('is properly angled when given useMillisecondPrecision', () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const millisecond = 321;
      const date = new Date(2017, 0, 1, hour, minute, second, millisecond);

      const { container } = render(<Clock useMillisecondPrecision value={date} />);

      const hand = container.querySelector('.react-clock__hour-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(
        hour * hourAngle +
          minute * hourMinuteAngle +
          second * hourSecondAngle +
          millisecond * hourMillisecondAngle,
      );
    });
  });

  describe('minute hand', () => {
    it('is rendered properly', () => {
      const { container } = render(<Clock />);

      const hand = container.querySelector('.react-clock__minute-hand');

      expect(hand).toBeInTheDocument();
    });

    it('is not rendered when renderMinuteHand is false', () => {
      const { container } = render(<Clock renderMinuteHand={false} />);

      const hand = container.querySelector('.react-clock__minute-hand');

      expect(hand).not.toBeInTheDocument();
    });

    it('is properly angled by default', () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const date = new Date(2017, 0, 1, hour, minute, second);

      const { container } = render(<Clock value={date} />);

      const hand = container.querySelector('.react-clock__minute-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(minute * minuteAngle + second * minuteSecondAngle);
    });

    it('is properly angled when given useMillisecondPrecision', () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const millisecond = 321;
      const date = new Date(2017, 0, 1, hour, minute, second, millisecond);

      const { container } = render(<Clock useMillisecondPrecision value={date} />);

      const hand = container.querySelector('.react-clock__minute-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(
        minute * minuteAngle + second * minuteSecondAngle + millisecond * minuteMillisecondAngle,
      );
    });
  });

  describe('second hand', () => {
    it('is rendered properly', () => {
      const { container } = render(<Clock />);

      const hand = container.querySelector('.react-clock__second-hand');

      expect(hand).toBeInTheDocument();
    });

    it('is not rendered when renderSecondHand is false', () => {
      const { container } = render(<Clock renderSecondHand={false} />);

      const hand = container.querySelector('.react-clock__second-hand');

      expect(hand).not.toBeInTheDocument();
    });

    it('is properly angled by default', () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const date = new Date(2017, 0, 1, hour, minute, second);

      const { container } = render(<Clock value={date} />);

      const hand = container.querySelector('.react-clock__second-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(second * secondAngle);
    });

    it('is properly angled when given useMillisecondPrecision', () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const millisecond = 321;
      const date = new Date(2017, 0, 1, hour, minute, second, millisecond);

      const { container } = render(<Clock useMillisecondPrecision value={date} />);

      const hand = container.querySelector('.react-clock__second-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(
        second * secondAngle + millisecond * secondMillisecondAngle,
      );
    });
  });
});
