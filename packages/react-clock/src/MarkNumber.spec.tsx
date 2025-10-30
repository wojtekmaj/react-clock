import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

import MarkNumber from './MarkNumber.js';

describe('MarkNumber', () => {
  it('renders number given number prop', async () => {
    const { container } = await render(<MarkNumber name="minute" number={1} />);

    const markNumber = container.querySelector('.react-clock__mark__number');

    expect(markNumber).toBeInTheDocument();
  });

  it('renders number angled at 0° by default', async () => {
    const { container } = await render(<MarkNumber name="minute" number={1} />);

    const markNumber = container.querySelector('.react-clock__mark__number');

    expect(markNumber).toHaveStyle('transform: matrix(1, 0, 0, 1, 0, 0)'); // rotate(0deg)
  });

  it('renders properly angled mark given angle prop', async () => {
    const { container } = await render(<MarkNumber angle={15} name="minute" number={1} />);

    const markNumber = container.querySelector('.react-clock__mark__number');

    expect(markNumber).toHaveStyle(
      'transform: matrix(0.965926, -0.258819, 0.258819, 0.965926, 0, 0)',
    ); // rotate(-15deg)
  });
});
