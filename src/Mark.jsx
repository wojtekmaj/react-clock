import React from 'react';
import PropTypes from 'prop-types';

const Mark = ({
  angle,
  length,
  name,
  width,
}) => {
  if (length > 100) {
    throw new Error('Mark can\'t be longer than 100 (%).');
  }

  return (
    <div
      className={`react-clock__mark react-clock__${name}-mark`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className={`react-clock__mark__body react-clock__${name}-mark__body`}
        style={{
          width: `${width}px`,
          top: 0,
          bottom: `${100 - (length / 2)}%`,
        }}
      />
    </div>
  );
};

Mark.defaultProps = {
  angle: 0,
  length: 10,
  width: 1,
};

Mark.propTypes = {
  angle: PropTypes.number,
  length: PropTypes.number,
  name: PropTypes.string,
  width: PropTypes.number,
};

export default Mark;
