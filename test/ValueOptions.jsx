import React from 'react';
import PropTypes from 'prop-types';

import { formatTime } from './shared/dateFormatter';

export default function ValueOptions({
  setState,
  value,
}) {
  function setValue(nextValue) {
    setState({ value: nextValue });
  }

  function onChange(event) {
    const { value: nextValue } = event.target;

    setValue(nextValue);
  }

  return (
    <fieldset id="valueOptions">
      <legend htmlFor="valueOptions">
        Set hour externally
      </legend>

      <div>
        <label htmlFor="hour">
          Hour
        </label>
        <input
          id="hour"
          onChange={onChange}
          type="time"
          value={value ? formatTime(value) : ''}
        />
        &nbsp;
        <button
          onClick={() => setValue(null)}
          type="button"
        >
          Clear
        </button>
      </div>
    </fieldset>
  );
}

ValueOptions.propTypes = {
  setState: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
};
