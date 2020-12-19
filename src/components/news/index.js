import React from "react"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import { Card } from "./card"

const News = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    {
      allStrapiNews {
        edges {
          node {
            title_pl
            title_en
            description_pl
            description_en
            date
            image {
              childImageSharp {
                fluid(maxWidth: 1080) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

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
          {data.allStrapiNews.edges.map(item => (
            <div className="column" key={item.node.date}>
              <Card item={item.node} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { News }
