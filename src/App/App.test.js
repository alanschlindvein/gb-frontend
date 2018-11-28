import React from 'react';
import { render } from 'commons/test-utils';

import 'jest-dom/extend-expect';

import App from './App';

test('toto', () => {
  const { getByText } = render(<App />);
  expect(getByText('gh')).toHaveTextContent('gh');
});
