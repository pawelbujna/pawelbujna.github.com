import React from "react"
import SwiperCore, { EffectFade, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { useTranslation } from "react-i18next"

import hero2 from "./assets/hero-2.webp"
import hero3 from "./assets/hero-3.webp"
import hero7 from "./assets/hero-7.webp"

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
        delay: 8000,
      }}
    >
      {data.map(item => (
        <SwiperSlide
          key={item.title}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPositionY: "20%",
          }}
        >
          <div className="cover">
            <p className="is-size-3-desktop is-size-4-tablet is-size-4-mobile has-text-weight-light">
              {item.title}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export { Hero }
