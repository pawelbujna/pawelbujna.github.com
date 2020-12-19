import React from "react"
import { useTranslation } from "react-i18next"
import { Title } from "components/title"

import image2 from "./assets/2.webp"
import image3 from "./assets/3.webp"
import image4 from "./assets/4.webp"
import image1 from "./assets/1.webp"
import image6 from "./assets/6.webp"
import image11 from "./assets/11.webp"
import image5 from "./assets/5.webp"
import image8 from "./assets/8.webp"
import image12 from "./assets/12.webp"
import image7 from "./assets/7.webp"
import image9 from "./assets/9.webp"
import image10 from "./assets/10.webp"

const images = [
  image2,
  image3,
  image4,
  image1,
  image6,
  image11,
  image5,
  image8,
  image12,
  image7,
  image9,
  image10,
]

const Inspirations = () => {
  const { t } = useTranslation()

  return (
    <div id="inspirations" className="inspirations p-6">
      <div className="container">
        <Title text={t("inspirations.title")} />

        <div className="columns is-multiline">
          {images.map((image, index) => (
            <div
              className="column is-3"
              data-aos="fade-up"
              key={`image_${index}`}
            >
              <div
                className="inspirations-image"
                style={{
                  background: `url(${image})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Inspirations }
