import { render } from '@testing-library/react';
import StateCell from './StateCell';

test(`renders stateCell component with value of 'pending' and class 'yellow'`, () => {
  const { getByText } = render(<StateCell cell={{ value: 'pending' }} />);

  expect(getByText('pending')).toHaveClass('yellow');
});

test(`renders stateCell component with value of 'running' and class 'green'`, () => {
  const { getByText } = render(<StateCell cell={{ value: 'running' }} />);

  expect(getByText('running')).toHaveClass('green');
});

test(`renders stateCell component with value of 'stopping' and class 'orange'`, () => {
  const { getByText } = render(<StateCell cell={{ value: 'stopping' }} />);

  expect(getByText('stopping')).toHaveClass('orange');
});

test(`renders stateCell component with value of 'stopped' and class 'red'`, () => {
  const { getByText } = render(<StateCell cell={{ value: 'stopped' }} />);

  expect(getByText('stopped')).toHaveClass('red');
});

test(`renders stateCell component with value of 'shutting-down' and class 'grey'`, () => {
  const { getByText } = render(<StateCell cell={{ value: 'shutting-down' }} />);

  expect(getByText('shutting-down')).toHaveClass('grey');
});

test(`renders stateCell component with value of 'terminated' and class 'dark_grey'`, () => {
  const { getByText } = render(<StateCell cell={{ value: 'terminated' }} />);

  expect(getByText('terminated')).toHaveClass('dark_grey');
});

test(`renders stateCell component without value if the state is 'unknown'`, () => {
  const { getByText } = render(<StateCell cell={{ value: 'unknown' }} />);

  expect(getByText('unknown')).not.toHaveClass();
});