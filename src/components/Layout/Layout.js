import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header/Header';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { muTheme } from '../../theme/theme';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <ThemeProvider theme={muTheme}>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
