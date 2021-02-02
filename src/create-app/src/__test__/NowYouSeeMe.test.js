import React from 'react';
// 1
import { render, screen, fireEvent } from '@testing-library/react';

// 2
import '@testing-library/jest-dom';
import NowYouSeeMe from '../components/NowYouSeeMe';

describe('<NowYouSeeMe />', () => {
  it('Should toggle the cat image div', () => {
    render(<NowYouSeeMe />);
    // Before clicking the toggle button, the image is NOT visible
    expect(screen.queryByText(/look at this pretty cat/i)).not.toBeVisible();

    // 3
    fireEvent.click(screen.queryByText(/toggle image/i));
    expect(screen.queryByText(/look at this pretty cat/i)).toBeVisible();
  });
});
