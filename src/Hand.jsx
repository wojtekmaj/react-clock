import React from 'react';
import PropTypes from 'prop-types';

import { isHandLength } from './shared/propTypes';

export default function Hand({ angle = 0, name, length = 100, oppositeLength = 10, width = 1 }) {
  return (
    <div
      className={`react-clock__hand react-clock__${name}-hand`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className={`react-clock__hand__body react-clock__${name}-hand__body`}
        style={{
          width: `${width}px`,
          top: `${50 - length / 2}%`,
          bottom: `${50 - oppositeLength / 2}%`,
        }}
      />
    </div>
  );
}

Hand.propTypes = {
  angle: PropTypes.number,
  length: isHandLength,
  name: PropTypes.string.isRequired,
  oppositeLength: isHandLength,
  width: PropTypes.number,
};
