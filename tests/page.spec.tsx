import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../app/corona/page';
import renderWithProviders from './testUtils';

describe('App', () => {
  test('renders without crashing', () => {
    const { container } = renderWithProviders(<App />);
    expect(container).toMatchSnapshot();
  });

  // Test that the CountryPicker is rendered after loading.
  test('renders CountryPicker after loading', async () => {
    renderWithProviders(<App />);

    // Wait for the loading indicator to disappear.
    const picker = await screen.findByTestId('country-picker');
    expect(picker).toMatchSnapshot();
  });
});
