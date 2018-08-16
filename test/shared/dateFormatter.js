import {
  getHours,
  getMinutes,
  getSeconds,
} from '../../src/shared/dates';

// eslint-disable-next-line import/prefer-default-export
export const formatTime = date => `${`0${getHours(date)}`.slice(-2)}:${`0${getMinutes(date)}`.slice(-2)}:${`0${getSeconds(date)}`.slice(-2)}`;
