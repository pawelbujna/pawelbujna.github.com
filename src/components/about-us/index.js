import React from "react"
import AboutUs1 from "./assets/about-us-1.webp"

import { useTranslation } from "react-i18next"
import { Title } from "components/title"

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div id="about-us" className="about-us">
      <div className="about-us-info p-6" data-aos="fade-up">
        <div>
          <Title text={t("aboutUs.title")} />

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
