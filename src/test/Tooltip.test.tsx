import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from '../components/Tooltip';

describe('Tooltip', () => {
  it('renders the trigger text', () => {
    render(<Tooltip text="GPU" explanation="Graphics Processing Unit" />);
    expect(screen.getByText('GPU')).toBeInTheDocument();
  });

  it('has tabIndex 0 for keyboard accessibility', () => {
    render(<Tooltip text="GPU" explanation="Graphics Processing Unit" />);
    const span = screen.getByText('GPU').parentElement;
    expect(span).toHaveAttribute('tabindex', '0');
  });

  it('shows explanation on hover', () => {
    const { container } = render(
      <Tooltip text="GPU" explanation="Graphics Processing Unit" />,
    );
    const trigger = screen.getByText('GPU').parentElement!;
    fireEvent.mouseEnter(trigger);
    expect(container.textContent).toContain('Graphics Processing Unit');
  });

  it('shows explanation on focus', () => {
    const { container } = render(
      <Tooltip text="GPU" explanation="Graphics Processing Unit" />,
    );
    const trigger = screen.getByText('GPU').parentElement!;
    fireEvent.focus(trigger);
    expect(container.textContent).toContain('Graphics Processing Unit');
  });

  it('hides explanation on blur', () => {
    const { container } = render(
      <Tooltip text="GPU" explanation="Graphics Processing Unit" />,
    );
    const trigger = screen.getByText('GPU').parentElement!;
    fireEvent.focus(trigger);
    expect(container.textContent).toContain('Graphics Processing Unit');
    fireEvent.blur(trigger);
    expect(container.textContent).not.toContain('Graphics Processing Unit');
  });
});
