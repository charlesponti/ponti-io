import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import CountUpTo from './CountUpTo';

describe('CountUpTo', () => {
  test('should render render', async () => {
    const { container } = render(<CountUpTo value={100} />);
    expect(container).toMatchSnapshot();
  });
});
