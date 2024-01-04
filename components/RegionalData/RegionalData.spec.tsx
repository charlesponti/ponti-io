/* eslint-disable @typescript-eslint/no-magic-numbers */
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import RegionalData from '.';

describe('RegionalData', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('should render progressbar', async () => {
    render(<RegionalData countryCode='global' />);
    const progressbar = await screen.findByRole('progressbar');
    expect(progressbar).toBeDefined();
  });
});
