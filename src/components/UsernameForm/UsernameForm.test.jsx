import React from 'react';
import user from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import UsernameForm from './UsernameForm';

test('renders properly', () => {
  const handleUpdateUsername = jest.fn(() => Promise.resolve());
  const { container } = render(<UsernameForm updateUsername={handleUpdateUsername} />);
  expect(container).toMatchSnapshot();
});

test('calls updateUsername with the new username', async () => {
  const handleUpdateUsername = jest.fn(() => Promise.resolve());
  const fakeUsername = 'sonicTheHedgehog';

  render(<UsernameForm updateUsername={handleUpdateUsername} />);
  const usernameInput = screen.getByLabelText(/username/i);
  user.type(usernameInput, fakeUsername);
  user.click(screen.getByText(/submit/i));

  expect(handleUpdateUsername).toBeCalledWith(fakeUsername);
  await waitForElementToBeRemoved(() => screen.queryByText(/Saving.../i));
});
