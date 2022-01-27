import React, { useState } from 'react';
import { useSetInterval } from '@wojtekmaj/react-hooks';
import Clock from 'react-clock';

import './Sample.less';

export default function Sample() {
  const [value, onChange] = useState(new Date());

  useSetInterval(() => {
    const now = new Date();
    onChange(now);
  }, 1000);

  return (
    <div className="Sample">
      <header>
        <h1>react-clock sample page</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Clock size={200} value={value} />
        </main>
      </div>
    </div>
  );
}
