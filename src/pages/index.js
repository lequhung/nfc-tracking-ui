import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout/Layout';
import { Button } from '@material-ui/core';

const abs = {
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: '100%'
}

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <Layout>
        <StaticImage alt="background" src="../images/background.webp" layout="fixed" style={abs} />
        <Button variant="contained">Test</Button>
      </Layout>
    </>
  );
};

export default IndexPage;
