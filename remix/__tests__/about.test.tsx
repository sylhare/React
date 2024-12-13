import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import AboutPage, { loader } from '~/routes/about';

describe('AboutPage', () => {
  const RemixStub = createRemixStub([
    {
      path: '/about',
      Component: AboutPage,
      loader,
    },
  ]);

  beforeEach(() => {
    render(<RemixStub initialEntries={['/about']} />);
  });

  it('should render the "About Us" message', async () => {
    await waitFor(() => screen.getByText('About us'));
    expect(screen.getByText('About us')).toBeInTheDocument();
  });
});