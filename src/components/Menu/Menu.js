import * as React from 'react';
import * as styles from './menu.module.css';
import { Link } from '@material-ui/core';

const Menu = () => {
  const onClick = (event) => {
    event.preventDefault();
    window.location.assign('/');
  };

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="" onClick={onClick}>
            Track an Item
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
