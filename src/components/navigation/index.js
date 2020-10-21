import React, { useState, useContext } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import { ThemeContext } from "components/themeContext"
import { FiSun, FiMoon } from "react-icons/fi"

const Navigation = () => {
  const { t, i18n } = useTranslation()
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const changeLanguage = lang => {
    i18n.changeLanguage(lang)
  }

  return (
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item logo" to={"/"}>
          <span className="is-size-3 has-text-weight-semibold">ADBLIND</span>
        </Link>

        <div
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => {
            setIsMenuOpened(!isMenuOpened)
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={`navbar-menu ${isMenuOpened ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link
            className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
            to={`/about`}
          >
            {t("navbar.about")}
          </Link>
          <Link
            className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
            to={`/collections`}
          >
            {t("navbar.collections")}
          </Link>
          <Link
            className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
            to={`/gallery`}
          >
            {t("navbar.gallery")}
          </Link>

          <div
            className="navbar-item is-size-6 is-clickable"
            onClick={() => {
              setIsDarkTheme(!isDarkTheme)
            }}
          >
            {isDarkTheme ? <FiSun /> : <FiMoon />}
          </div>

          {i18n.language === "en" ? (
            <div
              className="navbar-item is-size-6 is-clickable"
              onClick={() => {
                changeLanguage("pl")
              }}
            >
              PL
            </div>
          ) : (
            <div
              className="navbar-item is-size-6 is-clickable"
              onClick={() => {
                changeLanguage("en")
              }}
            >
              EN
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export { Navigation }
