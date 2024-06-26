import type { HandLength, HandWidth, OppositeHandLength } from './shared/types.js';

type HandProps = {
  angle?: number;
  length?: HandLength;
  name: string;
  oppositeLength?: OppositeHandLength;
  width?: HandWidth;
};

export default function Hand({
  angle = 0,
  name,
  length = 100,
  oppositeLength = 10,
  width = 1,
}: HandProps): React.ReactElement {
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
