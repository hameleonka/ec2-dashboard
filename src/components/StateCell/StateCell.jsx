import React from 'react';

import classes from './StateCell.module.scss';

function StateCell({ cell: { value } }) {
  let stateClass = '';

  switch (value) {
    case 'pending':
      stateClass = classes.yellow;
      break;
    case 'running':
      stateClass = classes.green;
      break;
    case 'stopping':
      stateClass = classes.orange;
      break;
    case 'stopped':
      stateClass = classes.red;
      break;
    case 'shutting-down':
      stateClass = classes.grey;
      break;
    case 'terminated':
      stateClass = classes.dark_grey;
      break;
    default:
      stateClass = '';
      break;
  }

  return <span className={stateClass}>{value}</span>;
}

export default StateCell;
