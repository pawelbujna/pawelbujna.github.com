/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import Helmet from "react-helmet"
import { ThemeContext } from "./themeContext"

function SEO() {
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <Helmet
      htmlAttributes={{
        "data-theme": isDarkTheme ? "dark" : "light",
      }}
      title={"ADBlind"}
    />
  )
}

export { SEO }
