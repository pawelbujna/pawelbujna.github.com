import React from "react"
import { useTranslation } from "react-i18next"

import wave from "./assets/wave.webp"

const DayAndNightWave = () => {
  const { t } = useTranslation()

  const description = t("collections.dayAndNightWave.description")
  const description1 = t("collections.dayAndNightWave.description1")
  const description2 = t("collections.dayAndNightWave.description2")
  const contactDescription = t("collections.dayAndNightWave.contactDescription")
  const image = wave

  return (
    <>
      <div
        className="collections-description has-text-centered is-size-5"
        data-aos="fade-up"
      >
        <p className="mb-4">{description}</p>
        <p className="mb-4">{description1}</p>
        <p className="mb-2">{description2}</p>
      </div>

      <div
        className="collections-image-wave"
        style={{
          backgroundImage: `url(${image})`,
        }}
        data-aos="fade-up"
      ></div>

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

export { DayAndNightWave }
