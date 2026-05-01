import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('AI NAVIGATOR')).toBeInTheDocument();
  });

  it('renders all 6 domain tabs', () => {
    render(<App />);
    const tabs = screen.getAllByRole('button', { name: /(文本|视觉|视频|声音|具身|硬件)/ });
    expect(tabs.length).toBeGreaterThanOrEqual(6);
  });

  it('shows the SearchModal when Ctrl+K is pressed', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.keyboard('{Control>}k{/Control}');
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
