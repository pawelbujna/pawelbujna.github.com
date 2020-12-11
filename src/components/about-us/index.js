import React from "react"
import AboutUs1 from "./assets/about-us-1.webp"

import { useTranslation } from "react-i18next"

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div id="about-us" className="about-us">
      <div className="about-us-info p-6" data-aos="fade-up">
        <div>
          <div className="about-us-title is-size-3-desktop is-size-4-tablet is-size-4-mobile is-uppercase has-text-weight-semibold mb-6">
            {t("aboutUs.title")}
          </div>
          <p className="about-us-description">{t("aboutUs.description1")}</p>
          <br />
          <p className="about-us-description">{t("aboutUs.description2")}</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="about-us-photo"
        style={{
          backgroundImage: `url(${AboutUs1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  )
}

export { AboutUs }
