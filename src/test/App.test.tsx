import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../ThemeContext';
import App from '../App';

afterEach(() => {
  vi.restoreAllMocks();
});

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        {ui}
      </ThemeProvider>
    </BrowserRouter>
  );
}

describe('App', () => {
  it('renders without crashing', async () => {
    renderWithProviders(<App />);
    expect(await screen.findByText('AI NAVIGATOR')).toBeInTheDocument();
  });

  it('renders all 6 domain tabs', async () => {
    renderWithProviders(<App />);
    await screen.findByText('AI NAVIGATOR');
    const tabs = screen.getAllByRole('button', { name: /(文本|图像|视频|音频|Agent|硬件)/ });
    expect(tabs.length).toBeGreaterThanOrEqual(6);
  });

  it('scrolls to top when changing domain tabs', async () => {
    const scrollTo = vi.fn();
    Object.defineProperty(window, 'scrollTo', {
      value: scrollTo,
      writable: true,
    });

    const user = userEvent.setup();
    renderWithProviders(<App />);
    await screen.findByText('AI NAVIGATOR');

    await user.click(screen.getByRole('button', { name: /图像/ }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'auto' });
  });

  it('shows the SearchModal when Ctrl+K is pressed', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);
    await screen.findByText('AI NAVIGATOR');

    await user.keyboard('{Control>}k{/Control}');
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });
});
