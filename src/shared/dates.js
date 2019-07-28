const hourOptionalSecondsRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]))?$/;
const hourRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9])$/;

export function getHours(date) {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string' && hourOptionalSecondsRegExp.test(date)) {
    const hourString = date.split(':')[0];
    return parseInt(hourString, 10);
  }

  throw new Error(`Failed to get hours from date: ${date}.`);
}

export function getMinutes(date) {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string' && hourOptionalSecondsRegExp.test(date)) {
    const minuteString = date.split(':')[1];
    return parseInt(minuteString, 10);
  }

  throw new Error(`Failed to get minutes from date: ${date}.`);
}

export function getSeconds(date) {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    if (hourRegExp.test(date)) {
      const secondString = date.split(':')[2];
      return parseInt(secondString, 10);
    }

    if (hourOptionalSecondsRegExp.test(date)) {
      return 0;
    }
  }

  throw new Error(`Failed to get seconds from date: ${date}.`);
}
