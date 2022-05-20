import React from 'react';
import { render } from '@testing-library/react';

import Mark from './Mark';

describe('Mark', () => {
  it('renders a hand with given name', () => {
    const { container } = render(<Mark name="minute" />);

    const mark = container.querySelector('.react-clock__mark');
    const markBody = container.querySelector('.react-clock__mark__body');

    expect(mark).toHaveClass('react-clock__minute-mark');
    expect(markBody).toHaveClass('react-clock__minute-mark__body');
  });

  it('renders mark angled at 0° by default', () => {
    const { container } = render(<Mark name="minute" />);

    const mark = container.querySelector('.react-clock__mark');

    expect(mark).toHaveStyle('transform: rotate(0deg)');
  });

  it('renders properly angled mark given angle prop', () => {
    const { container } = render(<Mark angle={15} name="minute" />);

    const mark = container.querySelector('.react-clock__mark');

    expect(mark).toHaveStyle('transform: rotate(15deg)');
  });

  it('renders mark with 10% length by default', () => {
    const { container } = render(<Mark name="minute" />);

    const markBody = container.querySelector('.react-clock__mark__body');

    expect(markBody).toHaveStyle('bottom: 95%');
  });

  it('renders mark with proper length given length prop', () => {
    const { container } = render(<Mark length={50} name="minute" />);

    const markBody = container.querySelector('.react-clock__mark__body');

    expect(markBody).toHaveStyle('bottom: 75%');
  });

  it('renders mark with 1px width by default', () => {
    const { container } = render(<Mark name="minute" />);

    const markBody = container.querySelector('.react-clock__mark__body');

    expect(markBody).toHaveStyle('width: 1px');
  });

  it('renders mark with proper length given length prop', () => {
    const { container } = render(<Mark name="minute" width={5} />);

    const markBody = container.querySelector('.react-clock__mark__body');

    expect(markBody).toHaveStyle('width: 5px');
  });

  it('renders number given number prop', () => {
    const { container } = render(<Mark name="minute" number={1} />);

    const markNumber = container.querySelector('.react-clock__mark__number');

    expect(markNumber).toBeInTheDocument();
  });

  it('renders number angled at 0° by default', () => {
    const { container } = render(<Mark name="minute" number={1} />);

    const markNumber = container.querySelector('.react-clock__mark__number');

    expect(markNumber).toHaveStyle('transform: rotate(-0deg)');
  });

  it('renders properly angled mark given angle prop', () => {
    const { container } = render(<Mark angle={15} name="minute" number={1} />);

    const markNumber = container.querySelector('.react-clock__mark__number');

    expect(markNumber).toHaveStyle('transform: rotate(-15deg)');
  });
});
