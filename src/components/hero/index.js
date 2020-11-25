import React from "react"
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { useTranslation } from "react-i18next"

import hero2 from "./assets/hero-2.jpg"
import hero3 from "./assets/hero-3.jpg"
import hero7 from "./assets/hero-7.jpg"

import "swiper/swiper.scss"
import styles from "swiper/components/pagination/pagination.scss"
console.log({ styles })

SwiperCore.use([EffectCoverflow, Pagination, Autoplay])

const Hero = () => {
  const { t } = useTranslation()
  const data = [
    {
      image: hero3,
      title: t("hero.winterCollection.title"),
      description: t("hero.winterCollection.description"),
    },
    {
      image: hero7,
      title: t("hero.summerCollection.title"),
      description: t("hero.winterCollection.description"),
    },
    {
      image: hero2,
      title: t("hero.autumnCollection.title"),
      description: t("hero.autumnCollection.description"),
    },
  ]

  return (
    <Swiper
      id="hero"
      effect="coverflow"
      coverflowEffect={{ rotate: 50 }}
      direction="horizontal"
      autoplay={{
        delay: 10000,
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet-active",
        renderBullet: (index, className) => {
          return `<span class="${className}"></span>`
        },
      }}
    >
      {data.map(item => (
        <SwiperSlide
          key={item.title}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
          }}
        >
          <div className="cover">
            <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile is-uppercase">
              {item.description}
            </p>
            <p className="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-weight-semibold is-uppercase">
              {item.title}
            </p>
            <a className="button is-primary is-uppercase" href="#collections">
              {t("hero.button")}
            </a>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-pagination"></div>
    </Swiper>
  )
}

export { Hero }
