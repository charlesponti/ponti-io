import renderWithProviders from '@/tests/testUtils';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';

import CountryPicker from '.';

describe('Cards', () => {
  let onCountryChange: Mock;

  beforeEach(() => {
    onCountryChange = vi.fn();
  });

  test('should render global states', async () => {
    const { container } = renderWithProviders(
      <CountryPicker countryCode='global' onChange={onCountryChange} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render US data', () => {
    const { container } = renderWithProviders(
      <CountryPicker countryCode='US' onChange={onCountryChange} />,
    );
    expect(container).toMatchSnapshot();
  });
});
