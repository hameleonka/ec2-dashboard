import { render } from '@testing-library/react';
import Login from './Login';

jest.mock('@userfront/react', () => {
  const actualModule = jest.requireActual('@userfront/react');
  return {
    ...actualModule,
    build: () => () => <button>Login btn mock</button>
  };
});

test('renders login form', () => {
  const { getByRole } = render(<Login />);

  getByRole('button', { name: 'Login btn mock' });
});


