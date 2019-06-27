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
          id="renderMinuteHand"
          type="checkbox"
          checked={renderMinuteHand}
          onChange={onRenderMinuteHandChange}
        />
        <label htmlFor="renderMinuteHand">
          Show minute hand
        </label>
      </div>

      <div>
        <input
          id="renderSecondHand"
          type="checkbox"
          checked={renderSecondHand}
          onChange={onRenderSecondHandChange}
        />
        <label htmlFor="renderSecondHand">
          Show second hand
        </label>
      </div>

      <div>
        <input
          id="renderHourMarks"
          type="checkbox"
          checked={renderHourMarks}
          onChange={onRenderHourMarksChange}
        />
        <label htmlFor="renderHourMarks">
          Show hour marks
        </label>
      </div>

      <div>
        <input
          id="renderMinuteMarks"
          type="checkbox"
          checked={renderMinuteMarks}
          onChange={onRenderMinuteMarksChange}
        />
        <label htmlFor="renderMinuteMarks">
          Show minute marks
        </label>
      </div>

      <div>
        <input
          id="renderNumbers"
          type="checkbox"
          checked={renderNumbers}
          onChange={onRenderNumbersChange}
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
