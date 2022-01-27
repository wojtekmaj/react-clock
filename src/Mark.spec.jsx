import React from 'react';
import { shallow } from 'enzyme';

import Mark from './Mark';

describe('Mark', () => {
  it('renders a hand with given name', () => {
    const component = shallow(<Mark name="minute" />);

    const mark = component.find('.react-clock__mark');
    const markBody = component.find('.react-clock__mark__body');

    expect(mark.hasClass('react-clock__minute-mark')).toBe(true);
    expect(markBody.hasClass('react-clock__minute-mark__body')).toBe(true);
  });

  it('renders mark angled at 0° by default', () => {
    const component = shallow(<Mark name="minute" />);

    const mark = component.find('.react-clock__mark');

    expect(mark.prop('style').transform).toBe('rotate(0deg)');
  });

  it('renders properly angled mark given angle prop', () => {
    const component = shallow(<Mark angle={15} name="minute" />);

    const mark = component.find('.react-clock__mark');

    expect(mark.prop('style').transform).toBe('rotate(15deg)');
  });

  it('renders mark with 10% length by default', () => {
    const component = shallow(<Mark name="minute" />);

    const markBody = component.find('.react-clock__mark__body');

    expect(markBody.prop('style').bottom).toBe('95%');
  });

  it('renders mark with proper length given length prop', () => {
    const component = shallow(<Mark length={50} name="minute" />);

    const markBody = component.find('.react-clock__mark__body');

    expect(markBody.prop('style').bottom).toBe('75%');
  });

  it('renders mark with 1px width by default', () => {
    const component = shallow(<Mark name="minute" />);

    const markBody = component.find('.react-clock__mark__body');

    expect(markBody.prop('style').width).toBe('1px');
  });

  it('renders mark with proper length given length prop', () => {
    const component = shallow(<Mark name="minute" width={5} />);

    const markBody = component.find('.react-clock__mark__body');

    expect(markBody.prop('style').width).toBe('5px');
  });

  it('renders number given number prop', () => {
    const component = shallow(<Mark name="minute" number={1} />);

    const markNumber = component.find('.react-clock__mark__number');

    expect(markNumber).toHaveLength(1);
  });

  it('renders number angled at 0° by default', () => {
    const component = shallow(<Mark name="minute" number={1} />);

    const markNumber = component.find('.react-clock__mark__number');

    expect(markNumber.prop('style').transform).toBe('rotate(-0deg)');
  });

  it('renders properly angled mark given angle prop', () => {
    const component = shallow(<Mark angle={15} name="minute" number={1} />);

    const markNumber = component.find('.react-clock__mark__number');

    expect(markNumber.prop('style').transform).toBe('rotate(-15deg)');
  });
});
