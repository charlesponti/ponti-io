import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Grid from './Grid';

describe('Grid', () => {
  test('should render render', async () => {
    const { container } = render(<Grid />);
    expect(container).toMatchSnapshot();
  });
});
