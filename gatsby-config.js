/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `ADBLIND Materiały do rolet dzień i noc`,
    description: `Materiały do rolet`,
    siteUrl: "http://adblind.pl/",
    author: `Paweł Bujna`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-HLWGHB3BDY",
      },
    },
  ],
}
