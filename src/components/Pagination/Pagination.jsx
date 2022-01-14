import React from 'react';

import classes from './Pagination.module.scss';

function Pagination({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
}) {
  return (
    <div className={classes.pagination}>
      <button
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
        className={classes['pagination-btn']}
        type="button"
      >
        {'<<'}
      </button>{' '}
      <button
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
        className={classes['pagination-btn']}
        type="button"
      >
        {'<'}
      </button>{' '}
      <button
        onClick={() => nextPage()}
        disabled={!canNextPage}
        className={classes['pagination-btn']}
        type="button"
      >
        {'>'}
      </button>{' '}
      <button
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
        className={classes['pagination-btn']}
        type="button"
      >
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <input
          className={classes['page-input']}
          type="number"
          min="1"
          max={pageOptions.length}
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
        />
      </span>{' '}
      <select
        className={classes['show-input']}
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSizeSetting) => (
          <option key={pageSizeSetting} value={pageSizeSetting}>
            Show {pageSizeSetting}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Pagination;
