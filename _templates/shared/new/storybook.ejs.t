---
    to: "<%= `${src}/${name}.stories.tsx` %>"
---

import { <%= name %> } from '.';
import { setup } from 'hoc/setup';

export default { title: 'Shared/<%= name %>' };

export const Base = () => {
  const Component = setup(<%= name %>);

  return <Component />;
};
