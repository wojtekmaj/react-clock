import React, { memo } from 'react';

import Mark from './Mark.js';

type MinuteMarkProps = React.ComponentProps<typeof Mark>;

const MinuteMark = memo(function MinuteMark(props: MinuteMarkProps) {
  return <Mark {...props} />;
});

export default MinuteMark;
