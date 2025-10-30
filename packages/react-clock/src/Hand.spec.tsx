import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

import Hand from './Hand.js';

describe('Hand', () => {
  it('renders a hand with given name', async () => {
    const { container } = await render(<Hand name="minute" />);

    const hand = container.querySelector('.react-clock__hand');
    const handBody = container.querySelector('.react-clock__hand__body');

    expect(hand).toHaveClass('react-clock__minute-hand');
    expect(handBody).toHaveClass('react-clock__minute-hand__body');
  });

  it('renders hand angled at 0° by default', async () => {
    const { container } = await render(<Hand name="minute" />);

    const hand = container.querySelector('.react-clock__hand');

    expect(hand).toHaveStyle('transform: matrix(1, 0, 0, 1, 0, 0)'); // rotate(0deg)
  });

  it('renders properly angled hand given angle prop', async () => {
    const { container } = await render(<Hand angle={15} name="minute" />);

    const hand = container.querySelector('.react-clock__hand');

    expect(hand).toHaveStyle('transform: matrix(0.965926, 0.258819, -0.258819, 0.965926, 0, 0)'); // rotate(15deg)
  });

  it('renders hand with 100% length by default', async () => {
    const { container } = await render(<Hand name="minute" />);

    const handBody = container.querySelector('.react-clock__hand__body');

    expect(handBody).toHaveStyle('top: 0%');
  });

  it('renders hand with proper length given length prop', async () => {
    const { container } = await render(<Hand length={50} name="minute" />);

    const handBody = container.querySelector('.react-clock__hand__body');

    expect(handBody).toHaveStyle('top: 25%');
  });

  it('renders hand with 10% oppositeLength by default', async () => {
    const { container } = await render(<Hand name="minute" />);

    const handBody = container.querySelector('.react-clock__hand__body');

    expect(handBody).toHaveStyle('bottom: 45%');
  });

  it('renders hand with proper oppositeLength given oppositeLength prop', async () => {
    const { container } = await render(<Hand name="minute" oppositeLength={50} />);

    const handBody = container.querySelector('.react-clock__hand__body');

    expect(handBody).toHaveStyle('bottom: 25%');
  });

  it('renders hand with 1px width by default', async () => {
    const { container } = await render(<Hand name="minute" />);

    const handBody = container.querySelector('.react-clock__hand__body');

    expect(handBody).toHaveStyle('width: 1px');
  });

  it('renders hand with proper width given length prop', async () => {
    const { container } = await render(<Hand name="minute" width={5} />);

    const handBody = container.querySelector('.react-clock__hand__body');

    expect(handBody).toHaveStyle('width: 5px');
  });
});
