import React from 'react';
import PropTypes from 'prop-types';

import { isMarkLength, isMarkWidth } from './shared/propTypes';

import type { MarkLength, MarkWidth } from './shared/types';

type MarkProps = {
  angle?: number;
  length?: MarkLength;
  name: string;
  number?: React.ReactNode;
  width?: MarkWidth;
};

export default function Mark({ angle = 0, length = 10, name, width = 1, number }: MarkProps) {
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
          bottom: `${100 - length / 2}%`,
        }}
      />
      {number ? (
        <div
          className="react-clock__mark__number"
          style={{
            transform: `rotate(-${angle}deg)`,
            top: `${length / 2}%`,
          }}
        >
          {number}
        </div>
      ) : null}
    </div>
  );
}

Mark.propTypes = {
  angle: PropTypes.number,
  length: isMarkLength,
  name: PropTypes.string.isRequired,
  number: PropTypes.node,
  width: isMarkWidth,
};
