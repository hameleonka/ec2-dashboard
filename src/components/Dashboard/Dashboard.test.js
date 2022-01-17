import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('../Header/Header', () => () => {
  return <h1> Header mock</h1>;
});

jest.mock('../Table/Table', () => () => {
  return <div> Table mock</div>;
});

test('renders Header and Table components', () => {
  const { getByText } = render(<Dashboard />);

  getByText('Header mock');
  getByText('Table mock');
});