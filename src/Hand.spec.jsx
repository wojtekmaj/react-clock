import React from 'react';
import { shallow } from 'enzyme';

import Hand from './Hand';

/* eslint-disable comma-dangle */

describe('Hand', () => {
  it('renders a hand with given name', () => {
    const component = shallow(
      <Hand name="minute" />
    );

    const hand = component.find('.react-clock__hand');
    const handBody = component.find('.react-clock__hand__body');

    expect(hand.hasClass('react-clock__minute-hand')).toBe(true);
    expect(handBody.hasClass('react-clock__minute-hand__body')).toBe(true);
  });

  it('renders hand angled at 0° by default', () => {
    const component = shallow(
      <Hand name="minute" />
    );

    const hand = component.find('.react-clock__hand');

    expect(hand.prop('style').transform).toBe('rotate(0deg)');
  });

  it('renders properly angled hand given angle prop', () => {
    const component = shallow(
      <Hand angle={15} name="minute" />
    );

    const hand = component.find('.react-clock__hand');

    expect(hand.prop('style').transform).toBe('rotate(15deg)');
  });

  it('renders hand with 100% length by default', () => {
    const component = shallow(
      <Hand name="minute" />
    );

    const handBody = component.find('.react-clock__hand__body');

    expect(handBody.prop('style').top).toBe('0%');
  });

  it('renders hand with proper length given length prop', () => {
    const component = shallow(
      <Hand length={50} name="minute" />
    );

    const handBody = component.find('.react-clock__hand__body');

    expect(handBody.prop('style').top).toBe('25%');
  });

  it('renders hand with 10% oppositeLength by default', () => {
    const component = shallow(
      <Hand name="minute" />
    );

    const handBody = component.find('.react-clock__hand__body');

    expect(handBody.prop('style').bottom).toBe('45%');
  });

  it('renders hand with proper oppositeLength given oppositeLength prop', () => {
    const component = shallow(
      <Hand name="minute" oppositeLength={50} />
    );

    const handBody = component.find('.react-clock__hand__body');

    expect(handBody.prop('style').bottom).toBe('25%');
  });

  it('renders hand with 1px width by default', () => {
    const component = shallow(
      <Hand name="minute" />
    );

    const handBody = component.find('.react-clock__hand__body');

    expect(handBody.prop('style').width).toBe('1px');
  });

  it('renders hand with proper width given length prop', () => {
    const component = shallow(
      <Hand name="minute" width={5} />
    );

    const handBody = component.find('.react-clock__hand__body');

    expect(handBody.prop('style').width).toBe('5px');
  });
});
