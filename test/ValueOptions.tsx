import React from 'react';
import { getHoursMinutesSeconds } from '@wojtekmaj/date-utils';

import type { LooseValue } from './shared/types.js';

type ValueOptionsProps = {
  setValue: (value: LooseValue) => void;
  value?: LooseValue;
};

export default function ValueOptions({ setValue, value }: ValueOptionsProps) {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value: nextValue } = event.target;

    setValue(nextValue);
  }

  return (
    <fieldset>
      <legend>Set hour externally</legend>

      <div>
        <label htmlFor="hour">Hour</label>
        <input
          id="hour"
          onChange={onChange}
          type="time"
          value={value ? getHoursMinutesSeconds(value) : ''}
        />
        &nbsp;
        <button onClick={() => setValue(null)} type="button">
          Clear
        </button>
      </div>
    </fieldset>
  );
}
