import React from "react"
import PropTypes from "prop-types"
import { Header } from "./header"
import { SEO } from "./seo"
import { ThemeProvider } from "./themeContext"
import "./i18n"

import "styles/index.scss"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <SEO />
      <Header />
      <div id="page-wrap">
        <main>{children}</main>
        <footer>{/* <Footer /> */}</footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
