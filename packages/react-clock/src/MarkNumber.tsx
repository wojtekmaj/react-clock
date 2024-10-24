import { memo } from 'react';

import type { MarkLength } from './shared/types.js';

type MarkNumberProps = {
  angle?: number;
  length?: MarkLength;
  name: string;
  number: React.ReactNode;
};

const MarkNumber: React.FC<MarkNumberProps> = memo(function MarkNumber({
  angle = 0,
  length = 10,
  name,
  number,
}: MarkNumberProps): React.ReactElement {
  return (
    <div
      className={`react-clock__mark react-clock__${name}-mark`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className="react-clock__mark__number"
        style={{
          transform: `rotate(-${angle}deg)`,
          top: `${length / 2}%`,
        }}
      >
        {number}
      </div>
    </div>
  );
});

export default MarkNumber;
