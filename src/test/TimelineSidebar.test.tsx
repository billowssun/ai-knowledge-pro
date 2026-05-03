import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TimelineSidebar from '../components/TimelineSidebar';
import { domainsData } from '../data/data';

describe('TimelineSidebar', () => {
  it('resets its internal scroll position when the active domain changes', () => {
    const { rerender } = render(<TimelineSidebar activeDomain={domainsData[0]} />);
    const scrollContainer = screen.getByTestId('timeline-scroll-container');

    scrollContainer.scrollTop = 240;
    rerender(<TimelineSidebar activeDomain={domainsData[1]} />);

    expect(scrollContainer.scrollTop).toBe(0);
  });
});
