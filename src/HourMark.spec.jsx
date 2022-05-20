import React from 'react';
import { render } from '@testing-library/react';

import HourMark from './HourMark';

describe('HourMark', () => {
  it('renders Mark', () => {
    const { container } = render(<HourMark name="hour" />);

    const mark = container.querySelector('.react-clock__hour-mark');

    expect(mark).toBeInTheDocument();
  });

  it('uses formatDay if given', () => {
    const locale = 'en-US';
    const number = 5;
    const formatHour = jest.fn();
    formatHour.mockReturnValue('H');

    const { container } = render(
      <HourMark name="hour" formatHour={formatHour} locale={locale} number={number} />,
    );

    const mark = container.querySelector('.react-clock__hour-mark');

    expect(formatHour).toHaveBeenCalled();
    expect(formatHour).toHaveBeenCalledWith(locale, number);
    expect(mark).toHaveTextContent('H');
  });
});
