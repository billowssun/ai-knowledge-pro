import { describe, it, expect } from 'vitest';
import { colorClasses } from '../utils/styles';

describe('colorClasses', () => {
  it('should have all six color keys', () => {
    const keys = Object.keys(colorClasses);
    expect(keys).toContain('indigo');
    expect(keys).toContain('cyan');
    expect(keys).toContain('purple');
    expect(keys).toContain('rose');
    expect(keys).toContain('emerald');
    expect(keys).toContain('amber');
  });

  it('should have required class keys for each color', () => {
    for (const cls of Object.values(colorClasses)) {
      expect(cls).toHaveProperty('bgLight');
      expect(cls).toHaveProperty('textMain');
      expect(cls).toHaveProperty('bgMain');
      expect(cls).toHaveProperty('bgBlur');
    }
  });
});
