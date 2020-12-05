import React from "react"
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { useTranslation } from "react-i18next"

import hero2 from "./assets/hero-2.webp"
import hero3 from "./assets/hero-3.webp"
import hero7 from "./assets/hero-7.webp"

import "swiper/swiper.scss"
import styles from "swiper/components/pagination/pagination.scss"
console.log({ styles })

SwiperCore.use([EffectCoverflow, Pagination, Autoplay])

const Hero = () => {
  const { t } = useTranslation()
  const data = [
    {
      image: hero3,
      title: t("hero.quotes.0.quote"),
      description: t("hero.quotes.0.author"),
    },
    {
      image: hero7,
      title: t("hero.quotes.1.quote"),
      description: t("hero.quotes.1.author"),
    },
    {
      image: hero2,
      title: t("hero.quotes.2.quote"),
      description: t("hero.quotes.2.author"),
    },
  ]

  return (
    <Swiper
      id="hero"
      effect="coverflow"
      coverflowEffect={{ rotate: 50 }}
      direction="horizontal"
      autoplay={{
        delay: 5000,
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
            <p className="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-weight-light">
              {item.title}
            </p>
            <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile m-0">
              {item.description}
            </p>
            {/* <a className="button is-primary is-uppercase" href="#collections">
              {t("hero.button")}
            </a> */}
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-pagination"></div>
    </Swiper>
  )
}

export { Hero }
