import React from 'react';
import { shallow } from 'enzyme';

import MinuteMark from './MinuteMark';

describe('MinuteMark', () => {
  it('renders Mark', () => {
    const component = shallow(<MinuteMark name="minute" />);

    expect(component.find('Mark')).toHaveLength(1);
  });
});
