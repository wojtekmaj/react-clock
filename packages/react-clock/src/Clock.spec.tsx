import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

import Clock from './Clock.js';

describe('Clock', () => {
  describe('<time> element', () => {
    it('is rendered properly', async () => {
      const { container } = await render(<Clock />);

      const time = container.querySelector('time');

      expect(time).toBeInTheDocument();
    });

    it('has 150px size by default', async () => {
      const { container } = await render(<Clock />);

      const time = container.querySelector('time');

      expect(time).toHaveStyle('width: 150px');
      expect(time).toHaveStyle('height: 150px');
    });

    it('has proper size when given size', async () => {
      const size = 167;

      const { container } = await render(<Clock size={size} />);

      const time = container.querySelector('time');

      expect(time).toHaveAttribute('style', `width: ${size}px; height: ${size}px;`);
    });

    it('has proper datetime attribute when given Date value', async () => {
      const date = new Date();

      const { container } = await render(<Clock value={date} />);

      const time = container.querySelector('time');

      expect(time).toHaveAttribute(
        'datetime',
        date.toLocaleTimeString('en', {
          hourCycle: 'h23',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      );
    });

    it('has proper datetime attribute when given string value', async () => {
      const date = '22:17:00';

      const { container } = await render(<Clock value={date} />);

      const time = container.querySelector('time');

      expect(time).toHaveAttribute('datetime', date);
    });
  });

  describe('clock face', () => {
    it('is rendered properly', async () => {
      const { container } = await render(<Clock />);

      const face = container.querySelector('.react-clock__face');

      expect(face).toBeInTheDocument();
    });

    it('has hour and minute marks by default', async () => {
      const { container } = await render(<Clock />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');
      const minuteMarks = container.querySelectorAll('.react-clock__minute-mark');

      expect(hourMarks).toHaveLength(12);
      expect(minuteMarks).toHaveLength(60 - 12);
    });

    it('does not have hour numbers rendered by default', async () => {
      const { container } = await render(<Clock />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');

      expect(hourMarks[0]).not.toHaveTextContent('1');
    });

    it('has hour numbers given renderNumbers flag', async () => {
      const { container } = await render(<Clock renderNumbers />);

      const numberMarks = container.querySelectorAll('.react-clock__number-mark');

      numberMarks.forEach((numberMark, index) => {
        expect(numberMark).toHaveTextContent(`${index + 1}`);
      });
    });

    it('uses formatHour properly if given', async () => {
      const formatHour = () => 'H';
      const { container } = await render(<Clock formatHour={formatHour} renderNumbers />);

      const numberMarks = container.querySelectorAll('.react-clock__number-mark');

      expect(numberMarks[0]).toHaveTextContent('H');
    });

    it('has only minute marks when renderHourMarks is false', async () => {
      const { container } = await render(<Clock renderHourMarks={false} />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');
      const minuteMarks = container.querySelectorAll('.react-clock__minute-mark');

      expect(hourMarks).toHaveLength(0);
      expect(minuteMarks).toHaveLength(60);
    });

    it('has only hour marks when renderMinuteMarks is false', async () => {
      const { container } = await render(<Clock renderMinuteMarks={false} />);

      const hourMarks = container.querySelectorAll('.react-clock__hour-mark');
      const minuteMarks = container.querySelectorAll('.react-clock__minute-mark');

      expect(hourMarks).toHaveLength(12);
      expect(minuteMarks).toHaveLength(0);
    });

    it('has no marks when renderHourMarks and renderMinuteMarks are false', async () => {
      const { container } = await render(
        <Clock renderHourMarks={false} renderMinuteMarks={false} />,
      );

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
    const match = transform.match(
      /matrix\((-?[\d.]+), (-?[\d.]+), (-?[\d.]+), (-?[\d.]+), (-?[\d.]+), (-?[\d.]+)\)/,
    );

    if (!match) {
      throw new Error('Could not parse transform');
    }

    const [_, ...rawNumbers] = match;

    const numbers = rawNumbers.map(Number.parseFloat);

    const a = numbers[0];
    const b = numbers[1];

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Could not parse transform');
    }

    const radians = Math.atan2(b, a);
    const degrees = radians * (180 / Math.PI);

    // Normalize to [0, 360)
    const normalized = ((degrees % 360) + 360) % 360;

    return normalized;
  }

  function getAngle(hand: HTMLElement) {
    return getDeg(window.getComputedStyle(hand).transform) % 360;
  }

  describe('hour hand', () => {
    it('is rendered properly', async () => {
      const { container } = await render(<Clock />);

      const hand = container.querySelector('.react-clock__hour-hand');

      expect(hand).toBeInTheDocument();
    });

    it('is properly angled by default', async () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const date = new Date(2017, 0, 1, hour, minute, second);

      const { container } = await render(<Clock value={date} />);

      const hand = container.querySelector('.react-clock__hour-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(
        hour * hourAngle + minute * hourMinuteAngle + second * hourSecondAngle,
      );
    });

    it('is properly angled when given useMillisecondPrecision', async () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const millisecond = 321;
      const date = new Date(2017, 0, 1, hour, minute, second, millisecond);

      const { container } = await render(<Clock useMillisecondPrecision value={date} />);

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
    it('is rendered properly', async () => {
      const { container } = await render(<Clock />);

      const hand = container.querySelector('.react-clock__minute-hand');

      expect(hand).toBeInTheDocument();
    });

    it('is not rendered when renderMinuteHand is false', async () => {
      const { container } = await render(<Clock renderMinuteHand={false} />);

      const hand = container.querySelector('.react-clock__minute-hand');

      expect(hand).not.toBeInTheDocument();
    });

    it('is properly angled by default', async () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const date = new Date(2017, 0, 1, hour, minute, second);

      const { container } = await render(<Clock value={date} />);

      const hand = container.querySelector('.react-clock__minute-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(minute * minuteAngle + second * minuteSecondAngle);
    });

    it('is properly angled when given useMillisecondPrecision', async () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const millisecond = 321;
      const date = new Date(2017, 0, 1, hour, minute, second, millisecond);

      const { container } = await render(<Clock useMillisecondPrecision value={date} />);

      const hand = container.querySelector('.react-clock__minute-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(
        minute * minuteAngle + second * minuteSecondAngle + millisecond * minuteMillisecondAngle,
      );
    });
  });

  describe('second hand', () => {
    it('is rendered properly', async () => {
      const { container } = await render(<Clock />);

      const hand = container.querySelector('.react-clock__second-hand');

      expect(hand).toBeInTheDocument();
    });

    it('is not rendered when renderSecondHand is false', async () => {
      const { container } = await render(<Clock renderSecondHand={false} />);

      const hand = container.querySelector('.react-clock__second-hand');

      expect(hand).not.toBeInTheDocument();
    });

    it('is properly angled by default', async () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const date = new Date(2017, 0, 1, hour, minute, second);

      const { container } = await render(<Clock value={date} />);

      const hand = container.querySelector('.react-clock__second-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(second * secondAngle);
    });

    it('is properly angled when given useMillisecondPrecision', async () => {
      const hour = 9;
      const minute = 20;
      const second = 47;
      const millisecond = 321;
      const date = new Date(2017, 0, 1, hour, minute, second, millisecond);

      const { container } = await render(<Clock useMillisecondPrecision value={date} />);

      const hand = container.querySelector('.react-clock__second-hand') as HTMLDivElement;

      expect(getAngle(hand)).toBeCloseTo(
        second * secondAngle + millisecond * secondMillisecondAngle,
      );
    });
  });
});
