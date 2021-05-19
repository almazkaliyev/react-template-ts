---
    to: "<%= `${src}/${name}.spec.tsx` %>"
---

import { shallow } from 'enzyme';

import { <%= Name %> } from '.';

describe('Test for <%= name %>', () => {
  it('', () => {
    const wrapper = shallow(<<%= name %> />);
  });
});
