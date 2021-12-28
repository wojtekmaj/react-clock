import React, { useCallback, useState } from 'react';
import Clock from 'react-clock/src';
import 'react-clock/src/Clock.less';
import { useSetInterval } from '@wojtekmaj/react-hooks';
import { getHoursMinutesSeconds } from '@wojtekmaj/date-utils';

import LocaleOptions from './LocaleOptions';
import ValueOptions from './ValueOptions';
import ViewOptions from './ViewOptions';

import './Test.less';

export default function Test() {
  const [locale, setLocale] = useState(null);
  const [renderHourMarks, setRenderHourMarks] = useState(true);
  const [renderMinuteHand, setRenderMinuteHand] = useState(true);
  const [renderMinuteMarks, setRenderMinuteMarks] = useState(true);
  const [renderNumbers, setRenderNumbers] = useState(true);
  const [renderSecondHand, setRenderSecondHand] = useState(true);
  const [value, setValue] = useState(new Date());

  const updateDate = useCallback(() => {
    setValue(new Date());
  }, []);

  useSetInterval(updateDate, 1000);

  function renderDebugInfo() {
    const renderTime = (timeToRender) => {
      if (timeToRender instanceof Date) {
        return getHoursMinutesSeconds(timeToRender);
      }
      return timeToRender;
    };

    return (
      <p>
        Current time:
        {' '}
        {value ? renderTime(value) : '(none)'}
      </p>
    );
  }

  return (
    <div className="Test">
      <header>
        <h1>
          react-clock test page
        </h1>
      </header>
      <div className="Test__container">
        <aside className="Test__container__options">
          <LocaleOptions
            locale={locale}
            setLocale={setLocale}
          />
          <ValueOptions
            setValue={setValue}
            value={value}
          />
          <ViewOptions
            renderHourMarks={renderHourMarks}
            renderMinuteHand={renderMinuteHand}
            renderMinuteMarks={renderMinuteMarks}
            renderNumbers={renderNumbers}
            renderSecondHand={renderSecondHand}
            setRenderHourMarks={setRenderHourMarks}
            setRenderMinuteHand={setRenderMinuteHand}
            setRenderMinuteMarks={setRenderMinuteMarks}
            setRenderNumbers={setRenderNumbers}
            setRenderSecondHand={setRenderSecondHand}
          />
        </aside>
        <main className="Test__container__content">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              /* eslint-disable no-console */
              console.error('Clock triggered submitting the form.');
              console.log(event);
              /* eslint-enable no-console */
            }}
          >
            <Clock
              className="myCustomClockClassName"
              locale={locale}
              onChange={setValue}
              renderHourMarks={renderHourMarks}
              renderMinuteHand={renderMinuteHand}
              renderMinuteMarks={renderMinuteMarks}
              renderNumbers={renderNumbers}
              renderSecondHand={renderSecondHand}
              size={200}
              value={value}
            />
          </form>
          {renderDebugInfo()}
        </main>
      </div>
    </div>
  );
}
