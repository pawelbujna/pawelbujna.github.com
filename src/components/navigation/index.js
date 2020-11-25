import React, { useState, useContext, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "components/themeContext"
import { FiSun, FiMoon } from "react-icons/fi"
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

  const dupa = () => {
    const element = document.getElementById(currentElement.name)
    window.scrollTo({
      top: element.offsetTop - currentElement.offset,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    dupa()
  }, [currentElement])

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`navbar is-fixed-top  ${isScrolled ? "navbar-shrink" : ""}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item logo"
            onClick={() => {
              setCurrentElement({ name: "hero", offset: 150 })
            }}
          >
            {/* <span className="is-size-3 has-text-weight-semibold">ADBLIND</span> */}

            <img src={logo} />
          </a>

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
            <a
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
              onClick={() => {
                setCurrentElement({ name: "about-us", offset: 110 })
              }}
            >
              {t("navbar.about")}
            </a>
            <a
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
              onClick={() => {
                setCurrentElement({ name: "services", offset: 110 })
              }}
            >
              {t("navbar.services")}
            </a>
            <a
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
              onClick={() => {
                setCurrentElement({ name: "collections", offset: 110 })
              }}
            >
              {t("navbar.collections")}
            </a>
            <a
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
              onClick={() => {
                setCurrentElement({ name: "contact", offset: 110 })
              }}
            >
              {t("navbar.contact")}
            </a>

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
      </div>
    </nav>
  )
}

export { Navigation }
