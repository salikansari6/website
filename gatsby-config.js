const { siteMetaData } = require('./site-metadata')

module.exports = {
  siteMetadata: siteMetaData,
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: 'h24e4kpuyms4'
      }
    }
  ]
}
