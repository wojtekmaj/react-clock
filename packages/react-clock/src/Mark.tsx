import { memo } from 'react';

import type { MarkLength, MarkWidth } from './shared/types.js';

type MarkProps = {
  angle?: number;
  length?: MarkLength;
  name: string;
  width?: MarkWidth;
};

const Mark: React.FC<MarkProps> = memo(function Mark({
  angle = 0,
  length = 10,
  name,
  width = 1,
}: MarkProps): React.ReactElement {
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
    </div>
  );
});

export default Mark;
