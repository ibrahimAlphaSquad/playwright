import { render } from 'enzyme';
import React from 'react';
import { DateAnswerField } from '../DateAnswerField';

describe('DateAnswerField', () => {
  it('should render', function () {
    const wrapper = render(
      <DateAnswerField
        t={jest.fn()}
        value={null}
        minOrderDate={new Date('2030-12-20')}
        maxOrderDate={new Date('2030-12-24')}
        dateFieldId={2}
        handleChange={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).not.toEqual(null);
  });
});
