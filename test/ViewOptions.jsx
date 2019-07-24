import React from 'react';
import PropTypes from 'prop-types';

export default function ViewOptions({
  renderHourMarks,
  renderMinuteHand,
  renderMinuteMarks,
  renderNumbers,
  renderSecondHand,
  setState,
}) {
  function onRenderMinuteHandChange(event) {
    const { checked } = event.target;

    setState({ renderMinuteHand: checked });
  }

  function onRenderSecondHandChange(event) {
    const { checked } = event.target;

    setState({ renderSecondHand: checked });
  }

  function onRenderHourMarksChange(event) {
    const { checked } = event.target;

    setState({ renderHourMarks: checked });
  }

  function onRenderMinuteMarksChange(event) {
    const { checked } = event.target;

    setState({ renderMinuteMarks: checked });
  }

  function onRenderNumbersChange(event) {
    const { checked } = event.target;

    setState({ renderNumbers: checked });
  }

  return (
    <fieldset id="viewoptions">
      <legend htmlFor="viewoptions">
        View options
      </legend>

      <div>
        <input
          checked={renderMinuteHand}
          id="renderMinuteHand"
          onChange={onRenderMinuteHandChange}
          type="checkbox"
        />
        <label htmlFor="renderMinuteHand">
          Show minute hand
        </label>
      </div>

      <div>
        <input
          checked={renderSecondHand}
          id="renderSecondHand"
          onChange={onRenderSecondHandChange}
          type="checkbox"
        />
        <label htmlFor="renderSecondHand">
          Show second hand
        </label>
      </div>

      <div>
        <input
          checked={renderHourMarks}
          id="renderHourMarks"
          onChange={onRenderHourMarksChange}
          type="checkbox"
        />
        <label htmlFor="renderHourMarks">
          Show hour marks
        </label>
      </div>

      <div>
        <input
          checked={renderMinuteMarks}
          id="renderMinuteMarks"
          onChange={onRenderMinuteMarksChange}
          type="checkbox"
        />
        <label htmlFor="renderMinuteMarks">
          Show minute marks
        </label>
      </div>

      <div>
        <input
          checked={renderNumbers}
          id="renderNumbers"
          onChange={onRenderNumbersChange}
          type="checkbox"
        />
        <label htmlFor="renderNumbers">
          Show numbers
        </label>
      </div>
    </fieldset>
  );
}

ViewOptions.propTypes = {
  renderHourMarks: PropTypes.bool.isRequired,
  renderMinuteHand: PropTypes.bool.isRequired,
  renderMinuteMarks: PropTypes.bool.isRequired,
  renderNumbers: PropTypes.bool.isRequired,
  renderSecondHand: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
};
