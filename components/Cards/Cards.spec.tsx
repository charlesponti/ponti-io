import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Cards from '.';

describe('Cards', () => {
  test('should render global states', async () => {
    const { container } = render(<Cards countryCode='global' />);
    expect(container).toMatchSnapshot();
  });

  test('should render US data', () => {
    const { container } = render(<Cards countryCode='US' />);
    expect(container).toMatchSnapshot();
  });
});
