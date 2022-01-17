import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Table from './Table';

const data = [
  {
    column1: 'C1 1',
    column2: 'C2 1'
  },
  {
    column1: 'C1 2',
    column2: 'C2 2'
  },
];
const columns = [
  {
    Header: 'Column1',
    accessor: 'column1',
  },
  {
    Header: 'Column2',
    accessor: 'column2',
  },
];

test('renders table with correct data', () => {
  const { getByText } = render(<Table data={data} columns={columns} />);

  getByText('C1 1');
  getByText('C2 1');
  getByText('C1 2');
  getByText('C2 2');
});

test('on click sorts data in columns in ascending/descending  order', () => {
  const { getByText, getAllByText } = render(<Table data={data} columns={columns} />);

  userEvent.click(getByText('Column1'));
  let c1data = getAllByText(/C1/).map(element => element.innerHTML);
  expect(c1data).toEqual(['C1 1', 'C1 2']);

  userEvent.click(getByText('Column1'));
  c1data = getAllByText(/C1/).map(element => element.innerHTML);
  expect(c1data).toEqual(['C1 2', 'C1 1']);
});

test('render 1 page for 2 data rows', () => {
  const { getByText } = render(<Table data={data} columns={columns} />);

  getByText('1 of 1');
});
