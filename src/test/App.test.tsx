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
  it('renders without crashing', () => {
    renderWithProviders(<App />);
    expect(screen.getByText('AI NAVIGATOR')).toBeInTheDocument();
  });

  it('renders all 6 domain tabs', () => {
    renderWithProviders(<App />);
    const tabs = screen.getAllByRole('button', { name: /(文本|视觉|视频|声音|具身|硬件)/ });
    expect(tabs.length).toBeGreaterThanOrEqual(6);
  });

  it('shows the SearchModal when Ctrl+K is pressed', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    await user.keyboard('{Control>}k{/Control}');
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
