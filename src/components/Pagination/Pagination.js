import classes from './Pagination.module.scss';

function Pagination(props) {
  return (
    <div className={classes.pagination}>
      <button onClick={() => props.gotoPage(0)} disabled={!props.canPreviousPage} className={classes['pagination-btn']}>
        {'<<'}
      </button>{' '}
      <button onClick={() => props.previousPage()} disabled={!props.canPreviousPage} className={classes['pagination-btn']}>
        {'<'}
      </button>{' '}
      <button onClick={() => props.nextPage()} disabled={!props.canNextPage} className={classes['pagination-btn']}>
        {'>'}
      </button>{' '}
      <button onClick={() => props.gotoPage(props.pageCount - 1)} disabled={!props.canNextPage} className={classes['pagination-btn']}>
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {props.pageIndex + 1} of {props.pageOptions.length}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <input className={classes['page-input']}
          type="number"
          defaultValue={props.pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            props.gotoPage(page)
          }}
        />
      </span>{' '}
      <select className={classes['show-input']}
        value={props.pageSize}
        onChange={e => {
          props.setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Pagination;