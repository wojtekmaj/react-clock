import getUserLocale from 'get-user-locale';

export const formatHour = (locale: string | undefined, hour: number) =>
  hour.toLocaleString(locale || getUserLocale());
