import { memo } from 'react';

import Mark from './Mark.js';

type MinuteMarkProps = React.ComponentProps<typeof Mark>;

const MinuteMark: React.FC<MinuteMarkProps> = memo(function MinuteMark(props) {
  return <Mark {...props} />;
});

export default MinuteMark;
