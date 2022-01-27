import React from 'react';
import { shallow } from 'enzyme';

import HourMark from './HourMark';

describe('HourMark', () => {
  it('renders Mark', () => {
    const component = shallow(<HourMark name="hour" />);

    expect(component.find('Mark')).toHaveLength(1);
  });

  it('uses formatDay if given', () => {
    const locale = 'en-US';
    const number = 5;
    const formatHour = jest.fn();
    formatHour.mockReturnValue('H');

    const component = shallow(
      <HourMark name="hour" formatHour={formatHour} locale={locale} number={number} />,
    );

    const mark = component.find('Mark');

    expect(formatHour).toHaveBeenCalled();
    expect(formatHour).toHaveBeenCalledWith(locale, number);
    expect(mark.prop('number')).toBe('H');
  });
});
