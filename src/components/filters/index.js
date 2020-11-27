import React from "react"
import Filters1 from "./assets/filters-1.jpg"

import { useTranslation } from "react-i18next"

const Filters = () => {
  const { t } = useTranslation()

  return (
    <div id="filters" className="filters">
      <div className="filters-info p-6" data-aos="fade-up">
        <div>
          <div className="filters-title is-size-3-desktop is-size-4-tablet is-size-4-mobile is-uppercase has-text-weight-semibold mb-6">
            {t("filters.title")}
          </div>
          <p>{t("filters.description1")}</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="filters-photo"
        style={{
          backgroundImage: `url(${Filters1})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  )
}

export { Filters }
