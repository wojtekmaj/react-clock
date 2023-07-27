import React from 'react';

import type { MarkLength, MarkWidth } from './shared/types.js';

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
