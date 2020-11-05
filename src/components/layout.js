import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Header } from "./header"
import { SEO } from "./seo"
import { ThemeProvider } from "./themeContext"
import AOS from "aos"

import "./i18n"

import "animate.css/animate.min.css"
import "styles/index.scss"
import "aos/dist/aos.css"

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

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
