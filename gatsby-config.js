/* eslint-disable @typescript-eslint/no-var-requires */
const { siteMetaData } = require('./site-metadata')

module.exports = {
  siteMetadata: siteMetaData,
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_WEBPACK_CACHE: true,
    FAST_DEV: true,
    FAST_REFRESH: true,
    PRESERVE_WEBPACK_CACHE: true
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: 'h24e4kpuyms4'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-112638181-1',
        head: true,
        cookieDomain: 'procedure.tech'
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ]
}
