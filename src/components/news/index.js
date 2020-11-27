import React from "react"
import { useTranslation } from "react-i18next"
import { Card } from "./card"

const data = [
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/5d4bc9ef1d80190001a4b482/1569497808267-P8GCG7QGA8LJS3ZEYEIG/ke17ZwdGBToddI8pDm48kCrNPKB8xSe_BQR9Q6xTmXx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZo9jTfS9mnqDAEkWhoT-2cGcZu8cWlK9Ql81HCbB0j1VMfZ_fU2mqhXiOYZfVnqnQ/orchid-1.jpg?format=1500w",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque illo sapiente perspiciatis rerum. Excepturi facere, soluta aut dolor illo eligendi praesentium cupiditate aperiam quia libero dolores nobis cumque fugit.",
  },
  {
    image:
      "https://wellcome-home.com/wp-content/uploads/2019/07/minimalizm-1024x684.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque illo sapiente perspiciatis rerum. Excepturi facere, soluta aut dolor illo eligendi praesentium cupiditate aperiam quia libero dolores nobis cumque fugit.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyf4elR8qHaV7gJJn3Z-LElCI0is1tOjmoA&usqp=CAU",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque illo sapiente perspiciatis rerum. Excepturi facere, soluta aut dolor illo eligendi praesentium cupiditate aperiam quia libero dolores nobis cumque fugit.",
  },
]

const News = () => {
  const { t } = useTranslation()
  return (
    <div className="news p-6" id="news">
      <div className="container">
        <div className="news-titles">
          <p
            className="news-title is-uppercase has-text-weight-semibold is-size-3-desktop is-size-4-tablet is-size-4-mobile mb-6"
            data-aos="fade-up"
          >
            {t("news.title")}
          </p>
          <div></div>
        </div>

        <div className="columns">
          <div className="column">
            <div data-aos="fade-up">
              <Card item={data[0]} />
            </div>
          </div>
          <div className="column">
            <div data-aos="fade-up">
              <Card item={data[1]} />
            </div>
          </div>
          <div className="column">
            <div data-aos="fade-up">
              <Card item={data[2]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { News }
