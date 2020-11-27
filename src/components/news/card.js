import React from "react"
import { useTranslation } from "react-i18next"

const { CMS_URL } = process.env
console.log(process.env)
const Card = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation()

  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={CMS_URL + item.image[0].url} />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p>{item[`description_${language}`]}</p>
          <br />
          <time datetime={item.date}>{item.date}</time>
        </div>
      </div>
    </div>
  )
}

export { Card }
