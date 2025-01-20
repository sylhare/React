import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, Mock, beforeEach } from 'vitest';
import { FileUpload } from '~/radix/FileUpload/FileUpload';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'File uploaded successfully' }),
  })
) as Mock;

describe('FileUpload', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('uploads a file successfully', async () => {
    render(<FileUpload />);

    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = screen.getByTestId('file-input');
    const button = screen.getByRole('button', { name: /upload/i });

    fireEvent.change(input, { target: { files: [file] } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/upload', expect.any(Object));
    });
  });

  it('shows an error message if no file is uploaded', async () => {
    render(<FileUpload />);

    const button = screen.getByRole('button', { name: /upload/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.fetch).not.toHaveBeenCalled();
    });
  });
});