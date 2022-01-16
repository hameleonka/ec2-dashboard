import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Header from './Header';
import Userfront from '@userfront/react';

test('renders Header heading', () => {
  const { getByText } = render(<Header />);

  getByText('Amazon EC2');
});

test('calls onClick function when clicked', () => {
  const spy = jest.spyOn(Userfront, 'logout');
  const { getByRole } = render(<Header />);
  const logoutBtn = getByRole('button', { name: 'Logout' });

  userEvent.click(logoutBtn);
  expect(spy).toHaveBeenCalled();
});