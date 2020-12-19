import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import { Title } from "components/title"

const numberAnimationDuration = 2.5

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  const setVisibility = visibility => {
    setIsVisible(visibility)
  }

  const data = [
    {
      counter: (
        <CountUp
          duration={numberAnimationDuration}
          end={isVisible ? 4000000 : 0}
          suffix=" m"
          separator=" "
        />
      ),
      prefix: t("services.over"),
      title: t("services.curtains.title"),
      animationDelay: 100,
    },
    {
      counter: (
        <CountUp
          duration={numberAnimationDuration}
          end={isVisible ? 50 : 0}
          separator=" "
        />
      ),
      prefix: t("services.over"),
      title: t("services.blinds.title"),
      animationDelay: 200,
    },
    {
      counter: (
        <CountUp
          duration={numberAnimationDuration}
          end={isVisible ? 10 : 0}
          separator=" "
        />
      ),
      prefix: t("services.over"),
      title: t("services.something.title"),
      animationDelay: 300,
    },
  ]

  return (
    <div id="services" className="services p-6">
      <div className="container">
        <Title text={t("services.title")} />

        <VisibilitySensor partialVisibility onChange={setVisibility}>
          <div className="services-cards columns">
            {data.map((service, index) => (
              <div
                key={index}
                data-aos-delay={`${service.animationDelay}`}
                className="services-card column mt-4 m-2"
                data-aos="fade-up"
              >
                <div className="services-card-title is-size-5-desktop">
                  {service.prefix}
                </div>
                <div className="services-card-counter is-size-1-widescreen is-size-3-desktop  is-size-3-tablet is-size-3-mobile has-text-weight-light">
                  {service.counter}
                </div>
                <div>
                  <p className="services-card-title under is-size-5-desktop">
                    {service.title}
                  </p>
                </div>
                {/* <p className="services-card-description">{service.description}</p> */}
              </div>
            ))}
          </div>
        </VisibilitySensor>
      </div>
    </div>
  )
}

export { Services }
