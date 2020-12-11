import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

import { DayAndNight } from "./dayAndNight"
import { DayAndNightWave } from "./dayAndNightWave"
import { Blackout } from "./blackout"

const Collections = () => {
  const { t } = useTranslation()

  const data = {
    dayAndNightWave: {},
    balckout: {},
  }

  const initialCollection = "dayAndNight"
  const [currentType, setCurrentType] = useState(initialCollection)

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

        {currentType === "dayAndNight" && <DayAndNight />}
        {currentType === "dayAndNightWave" && <DayAndNightWave />}
        {currentType === "balckout" && <Blackout />}
      </div>
    </div>
  )
}

export { Collections }
