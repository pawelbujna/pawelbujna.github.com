import React from "react"
import { useTranslation } from "react-i18next"

import DN1 from "./assets/day-and-night/1.webp"
import DN2 from "./assets/day-and-night/2.webp"
import DN3 from "./assets/day-and-night/3.webp"
import DN4 from "./assets/day-and-night/4.webp"
import DN5 from "./assets/day-and-night/5.webp"

const DayAndNight = () => {
  const { t } = useTranslation()

  const description = t("collections.dayAndNight.description")
  const contactDescription = t("collections.dayAndNight.contactDescription")
  const images = [DN1, DN2, DN3, DN4, DN5]

  return (
    <>
      <div
        className="collections-description has-text-centered is-size-5"
        data-aos="fade-up"
      >
        <p>{description}</p>
      </div>

      <div className="collections-gallery" data-aos="fade-up">
        <div className="collections-gallery-grid">
          <div>
            <div
              style={{
                backgroundImage: `url(${images[0]})`,
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${images[1]})`,
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${images[2]})`,
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${images[3]})`,
              }}
            ></div>
          </div>
        </div>
        <div className="collections-gallery-hero">
          <div
            style={{
              backgroundImage: `url(${images[4]})`,
            }}
          ></div>
        </div>
      </div>

      <div
        className="collections-contact-description has-text-centered is-size-5"
        data-aos="fade-up"
      >
        {contactDescription}

        <div className="mt-6">
          <a className="button is-primary is-uppercase" href="#contact">
            {t("collections.button")}
          </a>
        </div>
      </div>
    </>
  )
}

export { DayAndNight }
