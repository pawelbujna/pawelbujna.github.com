import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

import DN1 from "./assets/day-and-night/1.webp"
import DN2 from "./assets/day-and-night/2.webp"
import DN3 from "./assets/day-and-night/3.webp"
import DN4 from "./assets/day-and-night/4.webp"
import DN5 from "./assets/day-and-night/5.webp"

import DNW1 from "./assets/day-and-night-wave/1.webp"
import DNW2 from "./assets/day-and-night-wave/2.webp"
import DNW3 from "./assets/day-and-night-wave/3.webp"
import DNW4 from "./assets/day-and-night-wave/4.webp"
import DNW5 from "./assets/day-and-night-wave/5.webp"

import B1 from "./assets/blackout/1.webp"
import B2 from "./assets/blackout/2.webp"
import B3 from "./assets/blackout/3.webp"
import B4 from "./assets/blackout/4.webp"
import B5 from "./assets/blackout/5.webp"

const Collections = () => {
  const { t } = useTranslation()

  const data = {
    dayAndNight: {
      description: t("collections.dayAndNight.description"),
      contactDescription: t("collections.dayAndNight.contactDescription"),
      images: [DN1, DN2, DN3, DN4, DN5],
    },
    dayAndNightWave: {
      description: t("collections.dayAndNightWave.description"),
      contactDescription: t("collections.dayAndNightWave.contactDescription"),
      images: [DNW5, DNW2, DNW3, DNW4, DNW1],
    },
    balckout: {
      description: t("collections.balckout.description"),
      contactDescription: t("collections.balckout.contactDescription"),
      images: [B5, B2, B3, B4, B1],
    },
  }

  const initialCollection = "dayAndNight"
  const [currentType, setCurrentType] = useState(initialCollection)
  const [currentColection, setCurrentCollection] = useState(
    data[initialCollection]
  )

  useEffect(() => {
    setCurrentCollection(data[currentType])
  }, [currentType])

  return (
    <div id="collections" className="collections p-6">
      <div>
        <div className="collections-titles">
          <p
            className="collections-title is-uppercase has-text-weight-semibold is-size-3-desktop is-size-4-tablet is-size-4-mobile mb-6"
            data-aos="fade-up"
          >
            {t("collections.title")}
          </p>
          <div></div>
        </div>

        <div className="collections-menu is-uppercase" data-aos="fade-up">
          <div className="has-text-weight-semibold is-size-6">
            <span
              className={`${currentType === "dayAndNight" ? "is-active" : ""}`}
              onClick={() => {
                setCurrentType("dayAndNight")
              }}
            >
              {t("collections.menu.dayAndNight")}
            </span>
          </div>
          <div className="has-text-weight-semibold is-size-6">
            <span
              className={`${
                currentType === "dayAndNightWave" ? "is-active" : ""
              }`}
              onClick={() => {
                setCurrentType("dayAndNightWave")
              }}
            >
              {t("collections.menu.dayAndNightWave")}
            </span>
          </div>
          <div className="has-text-weight-semibold is-size-6">
            <span
              className={`${currentType === "balckout" ? "is-active" : ""}`}
              onClick={() => {
                setCurrentType("balckout")
              }}
            >
              {t("collections.menu.blackout")}{" "}
            </span>
          </div>
        </div>

        <div
          className="collections-description has-text-centered is-size-5"
          data-aos="fade-up"
        >
          {currentColection.description}
        </div>

        <div className="collections-gallery" data-aos="fade-up">
          <div className="collections-gallery-grid">
            <div
              style={{
                backgroundImage: `url(${currentColection.images[0]})`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${currentColection.images[1]})`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${currentColection.images[2]})`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${currentColection.images[3]})`,
              }}
            ></div>
          </div>
          <div className="collections-gallery-hero">
            <div
              style={{
                backgroundImage: `url(${currentColection.images[4]})`,
              }}
            ></div>
          </div>
        </div>

        <div
          className="collections-contact-description has-text-centered is-size-5"
          data-aos="fade-up"
        >
          {currentColection.contactDescription}

          <div className="mt-6">
            <a className="button is-primary is-uppercase" href="#contact">
              {t("collections.button")}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Collections }
