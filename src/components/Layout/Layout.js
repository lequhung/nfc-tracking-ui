import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import '../../theme/global.css';
import Header from '../Header/Header';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { muTheme } from '../../theme/theme';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }`);

  return <ThemeProvider theme={muTheme}>
    <Header />
    <main>{children}</main>
  </ThemeProvider>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;