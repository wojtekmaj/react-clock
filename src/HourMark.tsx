import React from 'react';
import PropTypes from 'prop-types';

import Mark from './Mark';

import { formatHour as defaultFormatHour } from './shared/hourFormatter';

type HourMarkProps = React.ComponentProps<typeof Mark> & {
  formatHour?: typeof defaultFormatHour;
  locale?: string;
  number?: number;
};

export default function HourMark({
  formatHour = defaultFormatHour,
  locale,
  number,
  ...otherProps
}: HourMarkProps) {
  return <Mark number={number ? formatHour(locale, number) : null} {...otherProps} />;
}

HourMark.propTypes = {
  formatHour: PropTypes.func,
  locale: PropTypes.string,
  number: PropTypes.number,
};
