import React from 'react';
import Userfront from '@userfront/react';
import classes from './Header.module.scss';
import awsIcon from '../../icons/aws-icon.svg';

function Header() {
  return (
    <header className={classes.header}>
      <img
        className={classes['header-logo']}
        src={awsIcon}
        alt="amazon web services logo"
      />
      <h1 className={classes['header-title']}>Amazon EC2</h1>
      <button
        className={classes['header-btn-logout']}
        onClick={Userfront.logout}
        type="button"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
