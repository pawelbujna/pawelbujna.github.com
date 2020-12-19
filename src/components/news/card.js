import React from "react"
import { useTranslation } from "react-i18next"

const Card = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation()

  return (
    <div className="card" data-aos="fade-up">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            alt={item[`title_${language}`]}
            src={item.image.childImageSharp.fluid.src}
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="content">
          <p>{item[`description_${language}`]}</p>
          <br />
          <time dateTime={item.date}>{item.date}</time>
        </div>
      </div>
    </div>
  )
}

export { Card }
