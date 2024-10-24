import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import MarkNumber from './MarkNumber.js';

describe('MarkNumber', () => {
  it('renders number given number prop', () => {
    const { container } = render(<MarkNumber name="minute" number={1} />);

    const markNumber = container.querySelector('.react-clock__mark__number');

    expect(markNumber).toBeInTheDocument();
  });

  it('renders number angled at 0° by default', () => {
    const { container } = render(<MarkNumber name="minute" number={1} />);

    const markNumber = container.querySelector('.react-clock__mark__number');

    expect(markNumber).toHaveStyle('transform: rotate(-0deg)');
  });

  it('renders properly angled mark given angle prop', () => {
    const { container } = render(<MarkNumber angle={15} name="minute" number={1} />);

    const markNumber = container.querySelector('.react-clock__mark__number');

    expect(markNumber).toHaveStyle('transform: rotate(-15deg)');
  });
});
