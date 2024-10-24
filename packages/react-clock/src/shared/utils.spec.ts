import { describe, expect, it } from 'vitest';
import { safeMax } from './utils.js';

describe('safeMax', () => {
  it('returns -Infinity given no values', () => {
    const result = safeMax();

    expect(result).toBe(Number.NEGATIVE_INFINITY);
  });

  it('returns the largest value given valid numbers', () => {
    const result = safeMax(3, 4, 5);

    expect(result).toBe(5);
  });

  it('returns the largest value given valid numbers with zero', () => {
    const result = safeMax(-2, -1, 0);

    expect(result).toBe(0);
  });

  it('returns the largest value given valid number and null', () => {
    const result = safeMax(3, 4, null);

    expect(result).toBe(4);
  });

  it('returns the largest value given valid number and undefined', () => {
    const result = safeMax(3, 4, undefined);

    expect(result).toBe(4);
  });

  it('returns the largest value given valid numbers as strings', () => {
    const result = safeMax('3', '4');

    expect(result).toBe(4);
  });
});
