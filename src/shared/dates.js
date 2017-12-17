const hourOptionalSecondsRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]))?$/;
const hourRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9])$/;

export const getHours = (date) => {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string' && hourOptionalSecondsRegExp.test(date)) {
    const [hourString] = date.split(':');
    return parseInt(hourString, 10);
  }

  throw new Error(`Failed to get hours from date: ${date}.`);
};

export const getMinutes = (date) => {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string' && hourOptionalSecondsRegExp.test(date)) {
    const [, minuteString] = date.split(':');
    return parseInt(minuteString, 10);
  }

  throw new Error(`Failed to get minutes from date: ${date}.`);
};

export const getSeconds = (date) => {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    if (hourRegExp.test(date)) {
      const [, , secondString] = date.split(':');
      return parseInt(secondString, 10);
    } else if (hourOptionalSecondsRegExp.test(date)) {
      return 0;
    }
  }

  throw new Error(`Failed to get seconds from date: ${date}.`);
};
