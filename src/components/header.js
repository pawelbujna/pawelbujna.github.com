import React from "react"

import { Navigation } from "components/navigation"

const Header = ({ location }) => {
  return (
    <header>
      <Navigation location={location} />
    </header>
  )
}

export { Header }
