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
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-HLWGHB3BDY",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          `news`,
        ],
        queryLimit: 100,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins:300,400,500,600,700"],
        },
      },
    },
  ],
}
