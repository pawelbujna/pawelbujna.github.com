/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const { CMS_URL } = process.env

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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: CMS_URL,
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
