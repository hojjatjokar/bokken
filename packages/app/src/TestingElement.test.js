import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestingElement from './TestingElement';

afterEach(cleanup);

it('should equal to 0', () => {
  const { getByTestId } = render(<TestingElement />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});

it('should have two button', async () => {
  render(<TestingElement />);

  const items = await screen.findAllByRole('button');
  expect(items).toHaveLength(2);
});
