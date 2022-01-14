import React from 'react';
import Header from '../Header/Header';
import Table from '../Table/Table';
import StateCell from '../StateCell/StateCell';
import { generateData } from '../../helper';

import classes from './Dashboard.module.scss';

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
        Cell: StateCell,
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

  return (
    <div className={classes.container}>
      <Header />
      <Table data={data} columns={columns} />
    </div>
  );
}

export default Dashboard;
