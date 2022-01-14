import React from "react";
import { useTable, useSortBy, usePagination } from 'react-table';
import { generateData } from "../../helper";

import Userfront from "@userfront/react";

import classes from './Dashboard.module.scss';
import awsIcon from '../../icons/aws-icon.svg';

function Dashboard() {
  const data = React.useMemo(() => generateData(), []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'AZ',
        accessor: 'az',
      },
      {
        Header: 'Public IP',
        accessor: 'publicIP',
      },
      {
        Header: 'Private IP',
        accessor: 'privateIP',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 20 } }, useSortBy, usePagination);

  Userfront.init("vbqq5wjb");

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img className={classes['header-logo']}
          src={awsIcon}
          alt="amazon web services logo"
        />
        <h1 className={classes['header-title']}>Amazon EC2</h1>
        <button className={classes['header-btn-logout']} onClick={Userfront.logout}>Logout</button>
      </header>

      <table {...getTableProps()} className={classes.table}>
        <thead>
          {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                  headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {// Render the header
                        column.render('Header')}
                      {/* Add a sort direction indicator */}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  ))}
              </tr>
            ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
            page.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {// Render the cell contents
                            cell.render('Cell')}
                        </td>
                      )
                    })}
                </tr>
              )
            })}
        </tbody>
      </table>
      <div className={classes.pagination}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className={classes['pagination-btn']}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className={classes['pagination-btn']}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage} className={classes['pagination-btn']}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className={classes['pagination-btn']}>
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
          <input className={classes['page-input']}
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
          />
        </span>{' '}
        <select className={classes['show-input']}
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )

}

export default Dashboard;