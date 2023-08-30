import getUserLocale from 'get-user-locale';

export function formatHour(locale: string | undefined, hour: number) {
  return hour.toLocaleString(locale || getUserLocale() || undefined);
}
