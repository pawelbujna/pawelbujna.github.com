import React, { useState, useContext, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "components/themeContext"
import { FiSun, FiMoon, FiFacebook } from "react-icons/fi"
import { Link, navigate } from "gatsby"
import logo from "./logo.png"

const Navigation = ({ location }) => {
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
  const scrollToSection = () => {
    const element = document.getElementById(currentElement.name)
    window.scrollTo(0, element.offsetTop - currentElement.offset)
  }

  useEffect(() => {
    if (location.pathname !== "/") {
      setTimeout(() => {
        scrollToSection()
      }, 1000)
    } else {
      scrollToSection()
    }
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
          {location.pathname === "/" ? (
            <span
              className="navbar-item logo is-clickable"
              onClick={() => {
                setCurrentElement({ name: "hero", offset: 150 })
              }}
            >
              <img alt="logo" src={logo} />
            </span>
          ) : (
            <Link className="navbar-item logo" to={"/"}>
              <img alt="logo" src={logo} />
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
            <span
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6 is-clickable"
              onClick={() => {
                navigate("/")
                setCurrentElement({ name: "about-us", offset: 110 })
                hideMenu()
              }}
            >
              <span>{t("navbar.about")}</span>
            </span>

            <span
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6 is-clickable"
              onClick={() => {
                navigate("/")
                setCurrentElement({ name: "collections", offset: 110 })
                hideMenu()
              }}
            >
              <span>{t("navbar.collections")}</span>
            </span>

            <span
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6 is-clickable"
              onClick={() => {
                navigate("/")
                setCurrentElement({ name: "inspirations", offset: 110 })
                hideMenu()
              }}
            >
              <span>{t("navbar.inspirations")}</span>
            </span>

            <span
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6 is-clickable"
              onClick={() => {
                navigate("/")
                setCurrentElement({ name: "filters", offset: 110 })
                hideMenu()
              }}
            >
              <span>{t("navbar.filters")}</span>
            </span>

            <span
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6 is-clickable"
              onClick={() => {
                navigate("/")
                setCurrentElement({ name: "news", offset: 110 })
                hideMenu()
              }}
            >
              <span>{t("navbar.news")}</span>
            </span>

            {i18n.language === "pl" && (
              <Link
                className="navbar-item has-text-weight-semibold is-uppercase is-size-6"
                to={"/work"}
              >
                <span>{t("navbar.work")}</span>
              </Link>
            )}

            <span
              className="navbar-item has-text-weight-semibold is-uppercase is-size-6 is-clickable"
              onClick={() => {
                navigate("/")
                setCurrentElement({ name: "contact", offset: 110 })
                hideMenu()
              }}
            >
              <span>{t("navbar.contact")}</span>
            </span>

            <span
              className="navbar-item is-size-6 is-clickable"
              onClick={() => {
                setIsDarkTheme(!isDarkTheme)
                hideMenu()
              }}
            >
              <span>{isDarkTheme ? <FiSun /> : <FiMoon />}</span>
            </span>

            <a
              className="navbar-item is-size-6 is-clickable"
              href="https://www.facebook.com/AdBlind-642400769246086"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FiFacebook />
              </span>
            </a>

            {location.pathname === "/" && (
              <>
                {i18n.language === "en" ? (
                  <span
                    className="navbar-item is-size-6 is-clickable"
                    onClick={() => {
                      changeLanguage("pl")
                      hideMenu()
                    }}
                  >
                    <span>PL</span>
                  </span>
                ) : (
                  <span
                    className="navbar-item is-size-6 is-clickable"
                    onClick={() => {
                      changeLanguage("en")
                      hideMenu()
                    }}
                  >
                    <span>EN</span>
                  </span>
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
