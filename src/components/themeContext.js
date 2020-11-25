import React, { useState, createContext, useEffect } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")

    if (theme === "dark") {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
