import getUserLocale from 'get-user-locale';

export const formatHour = (locale, hour) => hour.toLocaleString(locale || getUserLocale());
