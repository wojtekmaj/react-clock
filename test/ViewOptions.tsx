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
          id="renderMinuteHand"
          onChange={onRenderMinuteHandChange}
          type="checkbox"
        />
        <label htmlFor="renderMinuteHand">Show minute hand</label>
      </div>

      <div>
        <input
          checked={renderSecondHand}
          id="renderSecondHand"
          onChange={onRenderSecondHandChange}
          type="checkbox"
        />
        <label htmlFor="renderSecondHand">Show second hand</label>
      </div>

      <div>
        <input
          checked={renderHourMarks}
          id="renderHourMarks"
          onChange={onRenderHourMarksChange}
          type="checkbox"
        />
        <label htmlFor="renderHourMarks">Show hour marks</label>
      </div>

      <div>
        <input
          checked={renderMinuteMarks}
          id="renderMinuteMarks"
          onChange={onRenderMinuteMarksChange}
          type="checkbox"
        />
        <label htmlFor="renderMinuteMarks">Show minute marks</label>
      </div>

      <div>
        <input
          checked={renderNumbers}
          id="renderNumbers"
          onChange={onRenderNumbersChange}
          type="checkbox"
        />
        <label htmlFor="renderNumbers">Show numbers</label>
      </div>

      <div>
        <input
          checked={useMillisecondPrecision}
          id="useMillisecondPrecision"
          onChange={onUseMillisecondPrecisionChange}
          type="checkbox"
        />
        <label htmlFor="useMillisecondPrecision">Use millisecond precision</label>
      </div>
    </fieldset>
  );
}
