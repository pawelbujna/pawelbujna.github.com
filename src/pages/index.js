import React from "react"

import { Layout } from "components/layout"
import { Hero } from "components/hero"
import { AboutUs } from "components/about-us"
import { Services } from "components/services"
import { Collections } from "components/collections"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Services />
      <Collections />
    </Layout>
  )
}
