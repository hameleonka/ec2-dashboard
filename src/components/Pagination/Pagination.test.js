import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

const gotoPage = jest.fn();
const nextPage = jest.fn();
const previousPage = jest.fn();
const setPageSize = jest.fn();
const pageIndex = 2;
const pageSize = 10;
const pageOptions = { length: 15 };
const pageCount = 16;

test(`calls gotoPage(0) when clicked on '<<' btn and user is NOT on the 1st page`, () => {
  const canPreviousPage = true;
  const canNextPage = true;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const gotoFirstPageBtn = getByRole('button', { name: '<<' });
  userEvent.click(gotoFirstPageBtn);
  expect(gotoPage).toHaveBeenCalledWith(0);
});

test(`DOESN'T call gotoPage(0) when clicked on '<<' btn and user IS on the 1st page`, () => {
  const canPreviousPage = false;
  const canNextPage = true;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const gotoFirstPageBtn = getByRole('button', { name: '<<' });
  userEvent.click(gotoFirstPageBtn);
  expect(gotoPage).not.toHaveBeenCalledWith(0);
});

test(`calls previousPage function when clicked on '<' btn and user is NOT on the 1st page`, () => {
  const canPreviousPage = true;
  const canNextPage = true;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const gotoPreviousPageBtn = getByRole('button', { name: '<' });
  userEvent.click(gotoPreviousPageBtn);
  expect(previousPage).toHaveBeenCalled();
});

test(`DOESN'T call previousPage function when clicked on '<' btn and user IS on the 1st page`, () => {
  const canPreviousPage = false;
  const canNextPage = true;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const gotoPreviousPageBtn = getByRole('button', { name: '<' });
  userEvent.click(gotoPreviousPageBtn);
  expect(previousPage).not.toHaveBeenCalled();
});

test(`calls nextPage function when clicked on '>' btn and user is NOT on the last page`, () => {
  const canPreviousPage = true;
  const canNextPage = true;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const gotoNextPageBtn = getByRole('button', { name: '>' });
  userEvent.click(gotoNextPageBtn);
  expect(nextPage).toHaveBeenCalled();
});

test(`DOESN'T call nextPage function when clicked on '>' btn and user IS on the last page`, () => {
  const canPreviousPage = true;
  const canNextPage = false;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const gotoNextPageBtn = getByRole('button', { name: '>' });
  userEvent.click(gotoNextPageBtn);
  expect(nextPage).not.toHaveBeenCalled();
});

test(`calls gotoPage(last page) when clicked on '>>' btn and user is NOT on the last page`, () => {
  const canPreviousPage = true;
  const canNextPage = true;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const gotoLastPageBtn = getByRole('button', { name: '>>' });
  userEvent.click(gotoLastPageBtn);
  expect(gotoPage).toHaveBeenCalledWith(15);
});

test(`DOESN'T call gotoPage(last page) when clicked on '>>' btn and user IS on the last page`, () => {
  const canPreviousPage = true;
  const canNextPage = false;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const gotoLastPageBtn = getByRole('button', { name: '>>' });
  userEvent.click(gotoLastPageBtn);
  expect(gotoPage).not.toHaveBeenCalled();
});

test('renders {current page} of {all pages}', () => {
  const canPreviousPage = true;
  const canNextPage = true;

  const { getByText } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  getByText('3 of 15');
});

test('calls gotoPage(entered page) when user has entered page number', () => {
  const canPreviousPage = true;
  const canNextPage = true;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const gotoPageInput = getByRole('spinbutton');
  userEvent.clear(gotoPageInput);
  userEvent.type(gotoPageInput, '3');
  expect(gotoPageInput.value).toBe('3');
  expect(gotoPage).toHaveBeenCalledWith(2);
});

test('calls setPageSize(pageSizeSetting) when user has chooses pageSizeSetting', () => {
  const canPreviousPage = true;
  const canNextPage = true;

  const { getByRole } = render(<Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    pageOptions={pageOptions}
    pageCount={pageCount}
    gotoPage={gotoPage}
    nextPage={nextPage}
    previousPage={previousPage}
    setPageSize={setPageSize}
    pageIndex={pageIndex}
    pageSize={pageSize}
  />);

  const setPageSizeSelect = getByRole('combobox');
  userEvent.selectOptions(setPageSizeSelect, '20');

  expect(setPageSize).toHaveBeenCalledWith(20);
});




