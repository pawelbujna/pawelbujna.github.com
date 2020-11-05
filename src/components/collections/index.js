import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

import W1 from "./assets/seriawood/1.jpg"
import W2 from "./assets/seriawood/2.jpg"
import W3 from "./assets/seriawood/3.jpg"
import W4 from "./assets/seriawood/4.jpg"
import W5 from "./assets/seriawood/5.jpg"
import W6 from "./assets/seriawood/6.jpg"
import W7 from "./assets/seriawood/7.jpg"
import W8 from "./assets/seriawood/8.jpg"
import W9 from "./assets/seriawood/9.jpg"
import W10 from "./assets/seriawood/10.jpg"

import WT1 from "./assets/seriawood/thumb/1.jpg"
import WT2 from "./assets/seriawood/thumb/2.jpg"
import WT3 from "./assets/seriawood/thumb/3.jpg"
import WT4 from "./assets/seriawood/thumb/4.jpg"
import WT5 from "./assets/seriawood/thumb/5.jpg"
import WT6 from "./assets/seriawood/thumb/6.jpg"
import WT7 from "./assets/seriawood/thumb/7.jpg"
import WT8 from "./assets/seriawood/thumb/8.jpg"
import WT9 from "./assets/seriawood/thumb/9.jpg"
import WT10 from "./assets/seriawood/thumb/10.jpg"

import N1 from "./assets/serianatural/1.jpg"
import N2 from "./assets/serianatural/2.jpg"
import N3 from "./assets/serianatural/3.jpg"
import N4 from "./assets/serianatural/4.jpg"
import N5 from "./assets/serianatural/5.jpg"
import N6 from "./assets/serianatural/6.jpg"
import N7 from "./assets/serianatural/7.jpg"
import N8 from "./assets/serianatural/8.jpg"
import N9 from "./assets/serianatural/9.jpg"
import N10 from "./assets/serianatural/10.jpg"
import N11 from "./assets/serianatural/11.jpg"
import N12 from "./assets/serianatural/12.jpg"

import NT1 from "./assets/serianatural/thumb/1.jpg"
import NT2 from "./assets/serianatural/thumb/2.jpg"
import NT3 from "./assets/serianatural/thumb/3.jpg"
import NT4 from "./assets/serianatural/thumb/4.jpg"
import NT5 from "./assets/serianatural/thumb/5.jpg"
import NT6 from "./assets/serianatural/thumb/6.jpg"
import NT7 from "./assets/serianatural/thumb/7.jpg"
import NT8 from "./assets/serianatural/thumb/8.jpg"
import NT9 from "./assets/serianatural/thumb/9.jpg"
import NT10 from "./assets/serianatural/thumb/10.jpg"
import NT11 from "./assets/serianatural/thumb/11.jpg"
import NT12 from "./assets/serianatural/thumb/12.jpg"

const Collections = () => {
  const { t } = useTranslation()
  const [currentType, setCurrentType] = useState("all")
  const [activeGallery, setActiveGallery] = useState([])
  const data = [
    {
      image: W1,
      thumb: WT1,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: W2,
      thumb: WT2,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: W3,
      thumb: WT3,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: W4,
      thumb: WT4,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: W5,
      thumb: WT5,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: W6,
      thumb: WT6,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: W7,
      thumb: WT7,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: W8,
      thumb: WT8,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: W9,
      thumb: WT9,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: W10,
      thumb: WT10,
      description: t("collections.item.description"),
      type: "wood",
    },
    {
      image: N1,
      thumb: NT1,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N2,
      thumb: NT2,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N3,
      thumb: NT3,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N4,
      thumb: NT4,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N5,
      thumb: NT5,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N6,
      thumb: NT6,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N7,
      thumb: NT7,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N8,
      thumb: NT8,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N9,
      thumb: NT9,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N10,
      thumb: NT10,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N11,
      thumb: NT11,
      description: t("collections.item.description"),
      type: "natural",
    },
    {
      image: N12,
      thumb: NT12,
      description: t("collections.item.description"),
      type: "natural",
    },
  ]

  const filterImages = type => data.filter(item => item.type === type)

  const getAnimationDelay = index => index * 60

  useEffect(() => {
    currentType === "all"
      ? setActiveGallery(data)
      : setActiveGallery(filterImages(currentType))
  }, [currentType])

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

        <div className="collections-menu" data-aos="fade-up">
          <div
            className={`has-text-weight-semibold is-size-6 ${
              currentType === "all" ? "is-active" : ""
            }`}
          >
            <span
              onClick={() => {
                setCurrentType("all")
              }}
            >
              {t("collections.menu.all")}
            </span>
          </div>
          <div
            className={`has-text-weight-semibold is-size-6 ${
              currentType === "wood" ? "is-active" : ""
            }`}
          >
            <span
              onClick={() => {
                setCurrentType("wood")
              }}
            >
              {t("collections.menu.wood")}
            </span>
          </div>
          <div
            className={`has-text-weight-semibold is-size-6 ${
              currentType === "natural" ? "is-active" : ""
            }`}
          >
            <span
              onClick={() => {
                setCurrentType("natural")
              }}
            >
              {t("collections.menu.natural")}{" "}
            </span>
          </div>
        </div>

        <div className="collections-gallery mt-6">
          <div className="columns is-multiline">
            {activeGallery.map((item, index) => (
              <div className="column collections-item is-3-desktop is-6-tablet is-12-mobile pb-5">
                <div
                  aria-haspopup="true"
                  data-aos-delay={getAnimationDelay(index)}
                  data-aos="fade-up"
                  style={{
                    backgroundImage: `url(${item.thumb})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "400px",
                  }}
                ></div>
                <div className="collections-overlay">
                  <p className="is-size-6-desktop is-size-6-tablet is-size-6-mobile is-uppercase">
                    {t(item.description)}
                  </p>
                  <button className="button is-primary is-uppercase">
                    {t("collections.gallery.zoomIn")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Collections }
