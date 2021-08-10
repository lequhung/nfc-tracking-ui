import * as React from 'react';
import * as styles from './header.module.css';
import MyLocationTwoToneIcon from '@material-ui/icons/MyLocationTwoTone';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <MyLocationTwoToneIcon fontSize="large" />
        <span>NFCT</span>
      </div>
      <div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
