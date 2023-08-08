import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';

import MinuteMark from './MinuteMark.js';

describe('MinuteMark', () => {
  it('renders Mark', () => {
    const { container } = render(<MinuteMark name="minute" />);

    const mark = container.querySelector('.react-clock__minute-mark');

    expect(mark).toBeInTheDocument();
  });
});
