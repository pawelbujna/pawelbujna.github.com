import React from "react"

import { Layout } from "components/layout"
import { Hero } from "components/hero"
import { AboutUs } from "components/about-us"
import { Services } from "components/services"
import { Collections } from "components/collections"
import { Inspirations } from "components/inspirations"
import { Contact } from "components/contact"
import { Filters } from "components/filters"
import { News } from "components/news"
import { Tips } from "components/tips"

export default function Home({ location } = { location: { pathname: "/" } }) {
  return (
    <Layout location={location}>
      <Hero />
      <Tips />
      <AboutUs />
      <Services />
      <Collections />
      <Inspirations />
      <Filters />
      <News />
      <Contact />
    </Layout>
  )
}
