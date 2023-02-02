import React from 'react';

import Mark from './Mark';

type MinuteMarkProps = React.ComponentProps<typeof Mark>;

export default function MinuteMark(props: MinuteMarkProps) {
  return <Mark {...props} />;
}
