import { describe, it, expect } from 'vitest';
import { domainsData, generalTimeline } from '../data/data';

describe('domainsData', () => {
  it('should have 6 domains', () => {
    expect(domainsData).toHaveLength(6);
  });

  it('each domain should have a valid structure', () => {
    for (const domain of domainsData) {
      expect(domain).toHaveProperty('id');
      expect(domain).toHaveProperty('name');
      expect(domain).toHaveProperty('color');
      expect(domain).toHaveProperty('vendors');
      expect(domain).toHaveProperty('history');
      expect(domain.vendors.length).toBeGreaterThan(0);
      expect(domain.history.length).toBeGreaterThan(0);
    }
  });

  it('each vendor should have at least one model', () => {
    for (const domain of domainsData) {
      for (const vendor of domain.vendors) {
        expect(vendor.models.length).toBeGreaterThan(0);
        for (const model of vendor.models) {
          expect(model).toHaveProperty('name');
          expect(model).toHaveProperty('status');
          expect(model).toHaveProperty('url');
        }
      }
    }
  });

  it('should have valid domain colors from colorClasses', () => {
    const validColors = ['indigo', 'cyan', 'purple', 'rose', 'emerald', 'amber'];
    for (const domain of domainsData) {
      expect(validColors).toContain(domain.color);
    }
  });

  it('each domain should have unique id', () => {
    const ids = domainsData.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('generalTimeline', () => {
  it('should have timeline items', () => {
    expect(generalTimeline.length).toBeGreaterThan(0);
  });

  it('each item should have year, title, desc', () => {
    for (const item of generalTimeline) {
      expect(item).toHaveProperty('year');
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('desc');
    }
  });
});
