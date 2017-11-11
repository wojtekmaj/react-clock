import React from 'react';
import PropTypes from 'prop-types';

const Hand = ({
  angle,
  name,
  length,
  oppositeLength,
  width,
}) => {
  if (length > 100) {
    throw new Error('Hand can\'t be longer than 100 (%).');
  }

  if (oppositeLength < 0 || oppositeLength > 100) {
    throw new Error('Opposite length of the hand must be between 0 and 100.');
  }

  if (oppositeLength > length) {
    throw new Error('Opposite side of the hand can\'t be longer than its main part.');
  }

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
          top: `${50 - (length / 2)}%`,
          bottom: `${50 - (oppositeLength / 2)}%`,
        }}
      />
    </div>
  );
};

Hand.defaultProps = {
  angle: 0,
  length: 100,
  oppositeLength: 10,
  width: 1,
};

Hand.propTypes = {
  angle: PropTypes.number,
  name: PropTypes.string,
  length: PropTypes.number,
  oppositeLength: PropTypes.number,
  width: PropTypes.number,
};

export default Hand;
