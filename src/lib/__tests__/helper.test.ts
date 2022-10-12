import { describe, expect, test } from 'vitest';

import { openGraph } from 'src/lib/helper';

describe('Open Graph function should work correctly', () => {
  test('should not return templateTitle when not specified', () => {
    const result = openGraph({
      description: 'Test description',
      siteName: 'Test site name',
    });
    expect(result).not.toContain('&templateTitle=');
  });

  test('should return templateTitle when specified', () => {
    const result = openGraph({
      templateTitle: 'Test Template Title',
      description: 'Test description',
      siteName: 'Test site name',
    });
    expect(result).toContain('&templateTitle=Test%20Template%20Title');
  });
});
