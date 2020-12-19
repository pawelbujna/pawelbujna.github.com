import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import Lightbox from "react-awesome-lightbox"
import "react-awesome-lightbox/build/style.css"

import DN1 from "./assets/day-and-night/1.webp"
import DN2 from "./assets/day-and-night/2.webp"
import DN3 from "./assets/day-and-night/3.webp"
import DN4 from "./assets/day-and-night/4.webp"
import DN5 from "./assets/day-and-night/5.webp"

import naturalCollectionPdf from "./assets/natural.pdf"
import woodCollectionPdf from "./assets/wood.pdf"

const DayAndNight = () => {
  const { t } = useTranslation()
  const [isOpened, setIsOpened] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const description = t("collections.dayAndNight.description")
  const description2 = t("collections.dayAndNight.description2")
  const contactDescription = t("collections.dayAndNight.contactDescription")
  const naturalCollectionLinkText = t(
    "collections.dayAndNight.naturalCollectionLinkText"
  )
  const woodCollectionLinkText = t(
    "collections.dayAndNight.woodCollectionLinkText"
  )
  const images = [DN1, DN2, DN3, DN4, DN5]

  return (
    <>
      <div
        className="collections-description has-text-centered is-size-5"
        data-aos="fade-up"
      >
        {isOpened && (
          <Lightbox
            image={currentImage}
            onClose={() => {
              setIsOpened(false)
            }}
          />
        )}

        <p>{description}</p>

        <p className="mt-4">{description2}</p>

        <div>
          <a
            className="button is-primary mt-5 mr-4"
            href={naturalCollectionPdf}
            target="_blank"
            rel="noreferrer"
          >
            {naturalCollectionLinkText}
          </a>
          <a
            className="button is-primary mt-5"
            href={woodCollectionPdf}
            target="_blank"
            rel="noreferrer"
          >
            {woodCollectionLinkText}
          </a>
        </div>
      </div>

      <div className="collections-gallery" data-aos="fade-up">
        <div className="collections-gallery-grid">
          <div>
            <div
              onClick={() => {
                setCurrentImage(images[0])
                setIsOpened(true)
              }}
              style={{
                backgroundImage: `url(${images[0]})`,
                cursor: "pointer",
              }}
            ></div>
          </div>
          <div>
            <div
              onClick={() => {
                setCurrentImage(images[1])
                setIsOpened(true)
              }}
              style={{
                backgroundImage: `url(${images[1]})`,
                cursor: "pointer",
              }}
            ></div>
          </div>
          <div>
            <div
              onClick={() => {
                setCurrentImage(images[2])
                setIsOpened(true)
              }}
              style={{
                backgroundImage: `url(${images[2]})`,
                cursor: "pointer",
              }}
            ></div>
          </div>
          <div>
            <div
              onClick={() => {
                setCurrentImage(images[3])
                setIsOpened(true)
              }}
              style={{
                backgroundImage: `url(${images[3]})`,
                cursor: "pointer",
              }}
            ></div>
          </div>
        </div>
        <div className="collections-gallery-hero">
          <div
            onClick={() => {
              setCurrentImage(images[4])
              setIsOpened(true)
            }}
            style={{
              backgroundImage: `url(${images[4]})`,
              cursor: "pointer",
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
          <a
            className="button is-primary is-uppercase"
            href="#contact"
            rel="noreferrer"
          >
            {t("collections.button")}
          </a>
        </div>
      </div>
    </>
  )
}

export { DayAndNight }
