/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import Helmet from "react-helmet"
import { ThemeContext } from "./themeContext"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { isDarkTheme } = useContext(ThemeContext)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        "data-theme": isDarkTheme ? "dark" : "light",
      }}
      title={site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

export { SEO }
