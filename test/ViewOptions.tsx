import { useId } from 'react';

type ViewOptionsProps = {
  renderHourMarks: boolean;
  renderMinuteHand: boolean;
  renderMinuteMarks: boolean;
  renderNumbers: boolean;
  renderSecondHand: boolean;
  useMillisecondPrecision: boolean;
  setRenderHourMarks: (renderHourMarks: boolean) => void;
  setRenderMinuteHand: (renderMinuteHand: boolean) => void;
  setRenderMinuteMarks: (renderMinuteMarks: boolean) => void;
  setRenderNumbers: (renderNumbers: boolean) => void;
  setRenderSecondHand: (renderSecondHand: boolean) => void;
  setUseMillisecondPrecision: (useMillisecondPrecision: boolean) => void;
};

export default function ViewOptions({
  renderHourMarks,
  renderMinuteHand,
  renderMinuteMarks,
  renderNumbers,
  renderSecondHand,
  useMillisecondPrecision,
  setRenderHourMarks,
  setRenderMinuteHand,
  setRenderMinuteMarks,
  setRenderNumbers,
  setRenderSecondHand,
  setUseMillisecondPrecision,
}: ViewOptionsProps) {
  const renderMinuteHandId = useId();
  const renderSecondHandId = useId();
  const renderHourMarksId = useId();
  const renderMinuteMarksId = useId();
  const renderNumbersId = useId();
  const useMillisecondPrecisionId = useId();

  function onRenderMinuteHandChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;

    setRenderMinuteHand(checked);
  }

  function onRenderSecondHandChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;

    setRenderSecondHand(checked);
  }

  function onRenderHourMarksChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;

    setRenderHourMarks(checked);
  }

  function onRenderMinuteMarksChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;

    setRenderMinuteMarks(checked);
  }

  function onRenderNumbersChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;

    setRenderNumbers(checked);
  }

  function onUseMillisecondPrecisionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;

    setUseMillisecondPrecision(checked);
  }

  return (
    <fieldset>
      <legend>View options</legend>

      <div>
        <input
          checked={renderMinuteHand}
          id={renderMinuteHandId}
          onChange={onRenderMinuteHandChange}
          type="checkbox"
        />
        <label htmlFor={renderMinuteHandId}>Show minute hand</label>
      </div>

      <div>
        <input
          checked={renderSecondHand}
          id={renderSecondHandId}
          onChange={onRenderSecondHandChange}
          type="checkbox"
        />
        <label htmlFor={renderSecondHandId}>Show second hand</label>
      </div>

      <div>
        <input
          checked={renderHourMarks}
          id={renderHourMarksId}
          onChange={onRenderHourMarksChange}
          type="checkbox"
        />
        <label htmlFor={renderHourMarksId}>Show hour marks</label>
      </div>

      <div>
        <input
          checked={renderMinuteMarks}
          id={renderMinuteMarksId}
          onChange={onRenderMinuteMarksChange}
          type="checkbox"
        />
        <label htmlFor={renderMinuteMarksId}>Show minute marks</label>
      </div>

      <div>
        <input
          checked={renderNumbers}
          id={renderNumbersId}
          onChange={onRenderNumbersChange}
          type="checkbox"
        />
        <label htmlFor={renderNumbersId}>Show numbers</label>
      </div>

      <div>
        <input
          checked={useMillisecondPrecision}
          id={useMillisecondPrecisionId}
          onChange={onUseMillisecondPrecisionChange}
          type="checkbox"
        />
        <label htmlFor={useMillisecondPrecisionId}>Use millisecond precision</label>
      </div>
    </fieldset>
  );
}
