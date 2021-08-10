module.exports = {
  siteMetadata: {
    title: 'NFC Tracking',
    siteUrl: 'https://nfctracking.com.au'
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NFC Tracking`,
        short_name: `NFCT`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#0073e6`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};
