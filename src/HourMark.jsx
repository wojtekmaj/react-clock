import React from 'react';
import PropTypes from 'prop-types';

import Mark from './Mark';

import { formatHour as defaultFormatHour } from './shared/hourFormatter';

export default function HourMark({
  formatHour = defaultFormatHour,
  locale,
  number,
  ...otherProps
}) {
  return <Mark number={number && formatHour(locale, number)} {...otherProps} />;
}

HourMark.propTypes = {
  formatHour: PropTypes.func,
  locale: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
