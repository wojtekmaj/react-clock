function isValidNumber(num: unknown): num is number {
  return num !== null && num !== false && !Number.isNaN(Number(num));
}

export function safeMax(...args: unknown[]): number {
  return Math.max(...args.filter(isValidNumber));
}
