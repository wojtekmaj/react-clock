import React from 'react';
import PropTypes from 'prop-types';
import { getHoursMinutesSeconds } from '@wojtekmaj/date-utils';

import type { LooseValue } from './shared/types';

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

ValueOptions.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};
