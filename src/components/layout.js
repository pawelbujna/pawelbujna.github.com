import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Header } from "./header"
import { SEO } from "./seo"
import { ThemeProvider } from "./themeContext"
import AOS from "aos"

import { Footer } from "components/footer"
import { Loader } from "components/loader"

import "./i18n"

import "animate.css/animate.min.css"
import "styles/index.scss"
import "aos/dist/aos.css"

const Layout = ({ children, location }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false)

      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }, 2000)
  }, [])

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <ThemeProvider>
      {isLoading && <Loader isAnimating={isAnimating} />}
      <SEO />
      <Header location={location} />
      <div id="page-wrap">
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
