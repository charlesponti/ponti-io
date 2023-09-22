import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import NotFoundPage from 'src/pages/404';

describe('404', () => {
  test('renders a heading', () => {
    render(<NotFoundPage />);

    const heading = screen.getByText(/not found/i);

    expect(heading).to.exist;
  });
});
