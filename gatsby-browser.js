import * as React from 'react';
import './src/styles/global.css';
import Layout from './src/components/Layout/Layout';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
