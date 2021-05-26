import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Button } from './Button';

afterEach(cleanup);

describe('Button', () => {
  test('renders correctly', () => {
    render(<Button />);
  });

  test('renders correctly', async () => {
    render(<Button label="Title" />);

    const items = await screen.findAllByText('Title');
    expect(items).toHaveLength(1);
  });
});
