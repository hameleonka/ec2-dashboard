import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App, { AppRoutes } from './App';

let mockAccessToken = jest.fn();

jest.mock('@userfront/react', () => {
  const actualModule = jest.requireActual('@userfront/react');
  return {
    ...actualModule,
    tokens: { get accessToken() { return mockAccessToken() } }
  };
});

jest.mock('./components/Dashboard/Dashboard', () => () => {
  return <div> Dashboard mock</div>;
});

jest.mock('./components/Login/Login', () => () => {
  return <div> Login mock</div>;
});

test(`redirects from '/' to dashboard if user IS logged in`, () => {
  mockAccessToken.mockReturnValue(true);
  const { getByText } = render(<App />, { wrapper: MemoryRouter });

  getByText('Dashboard mock');
});

test(`redirects from '/' to login form if user is NOT logged in`, () => {
  mockAccessToken.mockReturnValue(false);
  const { getByText } = render(<App />, { wrapper: MemoryRouter });

  getByText('Login mock');
});

test(`renders '/dashboard' if user IS logged in`, () => {
  mockAccessToken.mockReturnValue(true);
  const { getByText } = render(<MemoryRouter initialEntries={[AppRoutes.DASHBOARD]} ><App /></MemoryRouter>);

  getByText('Dashboard mock');
});

test(`redirects from '/dashboard 'to login form if user is NOT logged in`, () => {
  mockAccessToken.mockReturnValue(false);
  const { getByText } = render(<MemoryRouter initialEntries={[AppRoutes.DASHBOARD]} ><App /></MemoryRouter>);

  getByText('Login mock');
});

test(`redirects from unknown path '/'`, () => {
  mockAccessToken.mockReturnValue(false);
  const { getByText } = render(<MemoryRouter initialEntries={['/unknown']} ><App /></MemoryRouter>);

  getByText('Login mock');
});