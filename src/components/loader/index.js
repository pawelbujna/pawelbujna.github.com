import React, { useContext } from "react"
import { ThemeContext } from "../themeContext"

const Loader = ({ isAnimating }) => {
  return (
    <div className={`loader-page ${isAnimating ? "" : "hide"}`}>
      <div id="preloader">
        <div id="postloader"></div>
      </div>
    </div>
  )
}

export { Loader }
