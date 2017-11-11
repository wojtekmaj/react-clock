import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from 'react-clock';

import './Sample.less';

export default class Sample extends Component {
  state = {
    value: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      const now = new Date();
      this.setState({ value: now });
    }, 1000);
  }

  onChange = value => this.setState({ value })

  render() {
    const { value } = this.state;

    return (
      <div className="Sample">
        <header>
          <h1>react-clock sample page</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Clock
              size={200}
              value={value}
            />
          </main>
        </div>
      </div>
    );
  }
}

render(<Sample />, document.getElementById('react-container'));
