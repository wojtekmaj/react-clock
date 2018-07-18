import {
  getHours,
  getMinutes,
  getSeconds,
} from '../dates';

describe('getHours', () => {
  it('returns proper hour for a given date', () => {
    const date = new Date(2017, 0, 1, 16, 4);

    const hour = getHours(date);

    expect(hour).toBe(16);
  });

  it('returns proper hour for a given string of hour and minute', () => {
    const date = '16:04';

    const hour = getHours(date);

    expect(hour).toBe(16);
  });

  it('returns proper hour for a given string of hour, minute and second', () => {
    const date = '16:04:08';

    const hour = getHours(date);

    expect(hour).toBe(16);
  });

  it('throws an error when given nonsense data', () => {
    const text = 'wololo';
    const flag = true;

    expect(() => getHours(text)).toThrow();
    expect(() => getHours(flag)).toThrow();
    expect(() => getHours()).toThrow();
  });
});

describe('getMinutes', () => {
  it('returns proper minute for a given date', () => {
    const date = new Date(2017, 0, 1, 16, 4);

    const minute = getMinutes(date);

    expect(minute).toBe(4);
  });

  it('returns proper minute for a given string of hour and minute', () => {
    const date = '16:04';

    const minute = getMinutes(date);

    expect(minute).toBe(4);
  });

  it('returns proper minute for a given string of hour, minute and second', () => {
    const date = '16:04:08';

    const minute = getMinutes(date);

    expect(minute).toBe(4);
  });

  it('throws an error when given nonsense data', () => {
    const text = 'wololo';
    const flag = true;

    expect(() => getMinutes(text)).toThrow();
    expect(() => getMinutes(flag)).toThrow();
    expect(() => getMinutes()).toThrow();
  });
});

describe('getSeconds', () => {
  it('returns proper second for a given date', () => {
    const date = new Date(2017, 0, 1, 16, 4, 8);

    const second = getSeconds(date);

    expect(second).toBe(8);
  });

  it('returns proper second for a given string of hour and minute', () => {
    const date = '16:04';

    const second = getSeconds(date);

    expect(second).toBe(0);
  });

  it('returns proper second for a given string of hour, minute and second', () => {
    const date = '16:04:08';

    const second = getSeconds(date);

    expect(second).toBe(8);
  });

  it('throws an error when given nonsense data', () => {
    const text = 'wololo';
    const flag = true;

    expect(() => getSeconds(text)).toThrow();
    expect(() => getSeconds(flag)).toThrow();
    expect(() => getSeconds()).toThrow();
  });
});
