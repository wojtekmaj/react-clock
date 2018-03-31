import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { formatTime } from './shared/dateFormatter';

export default class ValueOptions extends PureComponent {
  onChange = (event) => {
    const { value } = event.target;

    this.setValue(value);
  }

  setValue = value => this.props.setState({ value });

  render() {
    const { value } = this.props;

    return (
      <fieldset id="valueOptions">
        <legend htmlFor="valueOptions">Set hour externally</legend>

        <div>
          <label htmlFor="hour">Hour</label>
          <input
            id="hour"
            onChange={this.onChange}
            type="time"
            value={value ? formatTime(value) : ''}
          />&nbsp;
          <button onClick={() => this.setValue(null)}>Clear</button>
        </div>
      </fieldset>
    );
  }
}

ValueOptions.propTypes = {
  setState: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
};
