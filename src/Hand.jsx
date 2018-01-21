import React from 'react';
import PropTypes from 'prop-types';

import { isHandLength } from './shared/propTypes';

const Hand = ({
  angle,
  name,
  length,
  oppositeLength,
  width,
}) => (
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
        top: `${50 - (length / 2)}%`,
        bottom: `${50 - (oppositeLength / 2)}%`,
      }}
    />
  </div>
);

Hand.defaultProps = {
  angle: 0,
  length: 100,
  oppositeLength: 10,
  width: 1,
};

Hand.propTypes = {
  angle: PropTypes.number,
  name: PropTypes.string.isRequired,
  length: isHandLength,
  oppositeLength: isHandLength,
  width: PropTypes.number,
};

export default Hand;
