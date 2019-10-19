import {
  getHours,
  getMinutes,
  getSeconds,
} from '../../src/shared/dates';

function padStart(num) {
  return `0${num}`.slice(-2);
}

// eslint-disable-next-line import/prefer-default-export
export function formatTime(date) {
  [getHours, getMinutes, getSeconds]
    .map(fn => fn(date))
    .map(padStart)
    .join(':');
}
