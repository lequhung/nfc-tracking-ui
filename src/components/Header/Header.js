import * as React from 'react';
import * as Styles from './header.module.css';

import MyLocationTwoToneIcon from '@material-ui/icons/MyLocationTwoTone';
import { Typography } from '@material-ui/core';

const Header = () => {
  return <header className={Styles.container}>
    <div>
      <MyLocationTwoToneIcon fontSize="large" />
      <Typography>NFCTRACKING.COM</Typography>
    </div>
    <div></div>
  </header>
};

export default Header;