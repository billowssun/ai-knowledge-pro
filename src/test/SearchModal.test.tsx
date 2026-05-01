import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchModal from '../components/SearchModal';

const mockSelect = vi.fn();
const mockClose = vi.fn();

describe('SearchModal', () => {
  afterEach(() => {
    mockSelect.mockClear();
    mockClose.mockClear();
  });

  it('returns nothing when closed', () => {
    const { container } = render(
      <SearchModal isOpen={false} onClose={mockClose} onSelect={mockSelect} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders when open', () => {
    render(<SearchModal isOpen={true} onClose={mockClose} onSelect={mockSelect} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('focuses the input on open', () => {
    render(<SearchModal isOpen={true} onClose={mockClose} onSelect={mockSelect} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveFocus();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<SearchModal isOpen={true} onClose={mockClose} onSelect={mockSelect} />);

    await user.click(screen.getByRole('button', { name: '关闭搜索' }));
    expect(mockClose).toHaveBeenCalled();
  });

  it('filters results based on query', async () => {
    const user = userEvent.setup();
    render(<SearchModal isOpen={true} onClose={mockClose} onSelect={mockSelect} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'Anthropic');

    expect(screen.getByText('Anthropic')).toBeInTheDocument();
  });
});
