import React from "react"
import { useTranslation } from "react-i18next"

import collections from "./assets/collections.jpg"

const OurCollections = () => {
  const { t } = useTranslation()

  return (
    <div id="collections" className="collections px-6">
      <div className="container">
        <div className="collections-titles">
          <p
            className="collections-title is-uppercase has-text-weight-semibold is-size-3-desktop is-size-4-tablet is-size-4-mobile mb-6"
            data-aos="fade-up"
          >
            {t("collections.title")}
          </p>
          <div></div>
        </div>
      </div>

      <div className="container">
        <div className="collections-image">
          <a href={collections} target="_blank" rel="noreferrer">
            <img src={collections} />
          </a>
        </div>
      </div>
    </div>
  )
}

export { OurCollections }
