import React from "react"
import { useTranslation } from "react-i18next"

import termo from "./assets/termo.webp"

const Blackout = () => {
  const { t } = useTranslation()
  const description = t("collections.balckout.description")
  const contactDescription = t("collections.balckout.contactDescription")
  const image = termo

  return (
    <>
      <div
        className="collections-description has-text-centered is-size-5"
        data-aos="fade-up"
      >
        {description}
      </div>

      <div
        className="collections-description-detailed has-text-centered is-size-5"
        data-aos="fade-up"
      >
        <p className="mb-4">{t("collections.balckout.header")}</p>
        <p className="mb-2">{t("collections.balckout.point1")}</p>
        <p className="mb-2">{t("collections.balckout.point2")}</p>
        <p className="mb-6">{t("collections.balckout.point3")}</p>
        <p className="mb-4">{t("collections.balckout.specification")}</p>
        <p>{t("collections.balckout.spec1")}</p>
        <p>{t("collections.balckout.spec2")}</p>
        <p>{t("collections.balckout.spec3")}</p>
      </div>

      <div
        className="collections-image-blackout"
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

export { Blackout }
