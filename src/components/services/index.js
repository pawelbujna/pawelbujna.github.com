import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const numberAnimationDuration = 2.5

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  const setVisibility = visibility => {
    if (!isVisible) {
      setIsVisible(visibility)
    }
  }

  const data = [
    {
      counter: (
        <CountUp
          duration={numberAnimationDuration}
          end={isVisible ? 4000000 : 0}
          separator=" "
          suffix="m"
        />
      ),
      title: t("services.curtains.title"),
      animationDelay: 100,
    },
    {
      counter: (
        <CountUp
          duration={numberAnimationDuration}
          end={isVisible ? 50 : 0}
          separator=" "
          prefix=">"
        />
      ),
      title: t("services.blinds.title"),
      animationDelay: 200,
    },
    {
      counter: (
        <CountUp
          duration={numberAnimationDuration}
          end={isVisible ? 20000 : 0}
          separator=" "
        />
      ),
      title: t("services.something.title"),
      animationDelay: 300,
    },
  ]

  return (
    <div id="services" className="services p-6">
      <div className="container">
        <div className="services-titles">
          <p
            className="services-title is-uppercase has-text-weight-semibold is-size-3-desktop is-size-4-tablet is-size-4-mobile mb-6"
            data-aos="fade-up"
          >
            {t("services.title")}
          </p>
          <div></div>
        </div>

        <VisibilitySensor onChange={setVisibility}>
          <div className="services-cards">
            {data.map((service, index) => (
              <div
                key={index}
                data-aos-delay={`${service.animationDelay}`}
                className="services-card mt-4"
                data-aos="fade-up"
              >
                <div className="services-card-counter is-size-1 has-text-weight-light">
                  {service.counter}
                </div>
                <div>
                  <p className="services-card-title is-size-5-desktop">
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
