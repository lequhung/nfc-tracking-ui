import * as React from 'react';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>&copy; {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
