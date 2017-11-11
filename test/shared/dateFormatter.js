// eslint-disable-next-line import/prefer-default-export
export const formatTime = date =>
  `${`0${date.getHours()}`.slice(-2)}:${`0${date.getMinutes()}`.slice(-2)}:${`0${date.getSeconds()}`.slice(-2)}`;
