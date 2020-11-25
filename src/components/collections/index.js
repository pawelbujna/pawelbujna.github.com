import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import ImageViewer from "react-simple-image-viewer"

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

import E1 from "./assets/examples/1.jpg"
import E2 from "./assets/examples/2.jpg"
import E3 from "./assets/examples/3.jpg"
import E4 from "./assets/examples/4.jpg"
import E5 from "./assets/examples/5.jpg"
import E6 from "./assets/examples/6.jpg"

const Collections = () => {
  const { t } = useTranslation()
  const [currentType, setCurrentType] = useState("all")
  const [activeGallery, setActiveGallery] = useState([])
  const [imagesArray, setImagesArray] = useState([])
  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const data = [
    {
      src: W1,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: W2,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: W3,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: W4,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: W5,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: W6,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: W7,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: W8,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: W9,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: W10,
      description: t("collections.item.description"),
      type: ["all", "wood"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N1,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N2,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N3,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N4,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N5,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N6,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N7,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N8,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N9,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N10,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N11,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: N12,
      description: t("collections.item.description"),
      type: ["all", "natural"],
      info1: "2mm",
      info2: "20m",
      info3: t("collections.item.silk"),
    },
    {
      src: E1,
      description: t("collections.item.description"),
      type: ["all", "example"],
    },
    {
      src: E2,
      description: t("collections.item.description"),
      type: ["all", "example"],
    },
    {
      src: E3,
      description: t("collections.item.description"),
      type: ["all", "example"],
    },
    {
      src: E4,
      description: t("collections.item.description"),
      type: ["all", "example"],
    },
    {
      src: E5,
      description: t("collections.item.description"),
      type: ["all", "example"],
    },
    {
      src: E6,
      description: t("collections.item.description"),
      type: ["all", "example"],
    },
  ]

  const getImagesStrings = type =>
    data
      .map(item => {
        if (item.type.includes(type)) {
          return item.src
        }
      })
      .filter(Boolean)

  const filterImages = type => data.filter(item => item.type.includes(type))

  const getAnimationDelay = index => index * 30

  useEffect(() => {
    setActiveGallery(filterImages(currentType))
    setImagesArray(getImagesStrings(currentType))
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
          <div
            className={`has-text-weight-semibold is-size-6 ${
              currentType === "example" ? "is-active" : ""
            }`}
          >
            <span
              onClick={() => {
                setCurrentType("example")
              }}
            >
              {t("collections.menu.examples")}{" "}
            </span>
          </div>
        </div>

        <div className="collections-gallery mt-6">
          <div className="columns is-multiline">
            {activeGallery.map((item, index) => (
              <div className="column collections-item is-3-desktop is-6-tablet is-12-mobile pb-5">
                <div style={{ overflow: "hidden", position: "relative" }}>
                  <div
                    aria-haspopup="true"
                    data-aos-delay={getAnimationDelay(index)}
                    data-aos="fade-up"
                    style={{
                      background: `center / cover no-repeat url(${item.src})`,
                      height: "400px",
                    }}
                  ></div>
                  <div className="collections-overlay">
                    <p className="collections-overlay-title is-size-6-desktop is-size-6-tablet is-size-6-mobile is-uppercase has-text-weight-semibold">
                      {t(item.description)}
                    </p>
                    {item.info1 && item.info2 && item.info3 && (
                      <div className="collections-overlay-details">
                        <div className="is-size-7">
                          <p className="m-0">
                            {`${t("collections.item.thickness")}:`}
                          </p>
                          <p className="m-0 has-text-weight-semibold">
                            {`${item.info1}`}
                          </p>
                        </div>
                        <div className="is-size-7">
                          <p className="m-0">{`${t(
                            "collections.item.long"
                          )}:`}</p>
                          <p className="m-0 has-text-weight-semibold">
                            {`${item.info2}`}
                          </p>
                        </div>
                        <div className="is-size-7">
                          <p className="m-0">
                            {`${t("collections.item.fabric")}:`}
                          </p>
                          <p className="m-0 has-text-weight-semibold">
                            {`${item.info3}`}
                          </p>
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => {
                        setCurrentIndex(index)
                        setVisible(true)
                      }}
                      className="button is-primary is-uppercase"
                    >
                      {t("collections.gallery.zoomIn")}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {visible && (
              <ImageViewer
                src={imagesArray}
                currentIndex={currentIndex}
                onClose={() => {
                  setCurrentIndex(0)
                  setVisible(false)
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Collections }
