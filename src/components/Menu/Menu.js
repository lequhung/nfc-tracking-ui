import * as React from 'react';
import * as styles from './menu.module.css';
import { Link } from '@material-ui/core';
import { navigate } from 'gatsby';

const Menu = () => {
  const onClick = (event) => {
    event.preventDefault();
    void navigate('/');
  };

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="" onClick={onClick}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
