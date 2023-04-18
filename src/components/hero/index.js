import React from "react"
import SwiperCore, { EffectFade, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { useTranslation } from "react-i18next"

import hero2 from "./assets/9.webp"
import hero3 from "./assets/8.webp"
import hero7 from "./assets/7.webp"

import "swiper/swiper.scss"

SwiperCore.use([EffectFade, Autoplay])

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
      effect="fade"
      speed={3000}
      autoplay={{
        delay: 5000,
      }}
    >
      {data.map(item => (
        <SwiperSlide key={item.title}>
          <div>
            <div
              className="slider-image"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPositionY: "37%",
              }}
            ></div>
            <div className="cover">
              <p className="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-light">
                {item.title}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export { Hero }
