import React, { useState, useContext, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "components/themeContext"
import { FiSun, FiMoon } from "react-icons/fi"
import { Link } from "gatsby"
import logo from "./logo.png"

const Navigation = () => {
  const { t, i18n } = useTranslation()
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentElement, setCurrentElement] = useState({
    name: "hero",
    offset: 150,
  })

  const changeLanguage = lang => {
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    const element = document.getElementById(currentElement.name)
    window.scrollTo({
      top: element.offsetTop - currentElement.offset,
      behavior: "smooth",
    })
  }, [currentElement])

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  const hideMenu = () => {
    if (isMenuOpened) {
      setIsMenuOpened(false)
    }
  }

  return (
    <nav
      className={`navbar is-fixed-top  ${isScrolled ? "navbar-shrink" : ""}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          {window.location.pathName === "/" ? (
            <a
              className="navbar-item logo"
              onClick={() => {
                setCurrentElement({ name: "hero", offset: 150 })
              }}
            >
              <img src={logo} />
            </a>
          ) : (
            <Link className="navbar-item logo" to={"/"}>
              <img src={logo} />
            </Link>
          )}

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
            {window.location.pathname === "/" ? (
              <>
                <a
                  className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
                  onClick={() => {
                    setCurrentElement({ name: "about-us", offset: 110 })
                    hideMenu()
                  }}
                >
                  <span>{t("navbar.about")}</span>
                </a>

                <a
                  className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
                  onClick={() => {
                    setCurrentElement({ name: "collections", offset: 110 })
                    hideMenu()
                  }}
                >
                  <span>{t("navbar.collections")}</span>
                </a>

                <a
                  className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
                  onClick={() => {
                    setCurrentElement({ name: "news", offset: 110 })
                    hideMenu()
                  }}
                >
                  <span>{t("navbar.news")}</span>
                </a>

                {i18n.language === "pl" && (
                  <Link
                    className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
                    to={"/work"}
                  >
                    <span>{t("navbar.work")}</span>
                  </Link>
                )}

                <a
                  className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
                  onClick={() => {
                    setCurrentElement({ name: "contact", offset: 110 })
                    hideMenu()
                  }}
                >
                  <span>{t("navbar.contact")}</span>
                </a>
              </>
            ) : null}

            <div
              className="navbar-item is-size-6 is-clickable"
              onClick={() => {
                setIsDarkTheme(!isDarkTheme)
                hideMenu()
              }}
            >
              <span>{isDarkTheme ? <FiSun /> : <FiMoon />}</span>
            </div>

            {window.location.pathname === "/" && (
              <>
                {i18n.language === "en" ? (
                  <div
                    className="navbar-item is-size-6 is-clickable"
                    onClick={() => {
                      changeLanguage("pl")
                      hideMenu()
                    }}
                  >
                    <span>PL</span>
                  </div>
                ) : (
                  <div
                    className="navbar-item is-size-6 is-clickable"
                    onClick={() => {
                      changeLanguage("en")
                      hideMenu()
                    }}
                  >
                    <span>EN</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export { Navigation }
