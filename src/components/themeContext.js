import React, { useState, createContext } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

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
