import React from "react"

import { Layout } from "components/layout"
import { Hero } from "components/hero"
import { AboutUs } from "components/about-us"
import { Services } from "components/services"
import { Collections } from "components/collections"
import { OurCollections } from "components/our-collections"
import { Contact } from "components/contact"
import { ContactUs } from "components/contact-us"
import { Banner } from "components/banner"
import { Filters } from "components/filters"
import { News } from "components/news"
import { Tips } from "components/tips"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Tips />
      <AboutUs />
      {/* <OurCollections /> */}
      <Services />
      <Collections />
      <Filters />
      <News />
      <Contact />
      <Banner />
      {/* <ContactUs /> */}
    </Layout>
  )
}
