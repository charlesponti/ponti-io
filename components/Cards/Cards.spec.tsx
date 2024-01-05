import renderWithProviders from '@/tests/testUtils';
import { describe, expect, test } from 'vitest';

import Cards from '.';

describe('Cards', () => {
  test('should render global states', async () => {
    const { container } = renderWithProviders(<Cards countryCode='global' />);
    expect(container).toMatchSnapshot();
  });

  test('should render US data', () => {
    const { container } = renderWithProviders(<Cards countryCode='US' />);
    expect(container).toMatchSnapshot();
  });
});
