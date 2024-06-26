import { memo } from 'react';

import Mark from './Mark.js';

import { formatHour as defaultFormatHour } from './shared/hourFormatter.js';

type HourMarkProps = React.ComponentProps<typeof Mark> & {
  formatHour?: typeof defaultFormatHour;
  locale?: string;
  number?: number;
};

const HourMark: React.FC<HourMarkProps> = memo(function HourMark({
  formatHour = defaultFormatHour,
  locale,
  number,
  ...otherProps
}: HourMarkProps) {
  return <Mark number={number ? formatHour(locale, number) : null} {...otherProps} />;
});

export default HourMark;
