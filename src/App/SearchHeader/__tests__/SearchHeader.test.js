import React from 'react';
import { render, fireEvent } from 'commons/test-utils';

import 'jest-dom/extend-expect';

import SearchHeader from '../SearchHeader';

test('Testing search action', () => {
  const onSearch = jest.fn();

  const { getByPlaceholderText, container } = render(
    <SearchHeader onSearch={onSearch} />
  );

  const input = getByPlaceholderText('Buscar');
  input.value = 'toto';
  fireEvent.change(input);

  const button = container.querySelector('.ant-input-search-button');

  fireEvent.click(button);

  expect(input.value).toBe('toto');
  expect(onSearch).toHaveBeenCalled();
  expect(onSearch).toHaveBeenCalledWith('toto');
});
