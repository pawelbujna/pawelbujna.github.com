import React from "react"

import { Layout } from "components/layout"
import { Hero } from "components/hero"
import { Work as WorkComponent } from "components/work"
import { NoFormContact } from "components/no-form-contact"

export default function Work(
  { location } = { location: { pathname: "/work" } }
) {
  return (
    <Layout location={location}>
      <Hero />
      <WorkComponent />
      <NoFormContact />
    </Layout>
  )
}
