import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatTime } from './shared/dateFormatter';

export default class ValueOptions extends Component {
  setValue = value => this.props.setState({ value });

  onChange = (event) => {
    const { value } = event.target;

    this.setValue(value);
  }

  render() {
    const { value } = this.props;

    return (
      <fieldset id="detailoptions">
        <legend htmlFor="viewoptions">Set hour externally</legend>

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
