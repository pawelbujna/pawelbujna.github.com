import React from "react"
import { useTranslation } from "react-i18next"

const Services = () => {
  const { t } = useTranslation()

  const data = [
    {
      icon: (
        <div className="services-icon mb-5">
          <svg
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c0.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
        </div>
      ),
      title: t("services.curtains.title"),
      description: t("services.curtains.description"),
      animationDelay: 100,
    },
    {
      icon: (
        <div className="services-icon mb-5">
          <svg
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
        </div>
      ),
      title: t("services.blinds.title"),
      description: t("services.blinds.description"),
      animationDelay: 200,
    },
    {
      icon: (
        <div className="services-icon mb-5">
          <svg
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </div>
      ),
      title: t("services.something.title"),
      description: t("services.something.description"),
      animationDelay: 300,
    },
  ]

  return (
    <div id="services" className="services px-6">
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

        <div className="services-cards">
          {data.map((service, index) => (
            <div
              key={index}
              data-aos-delay={`${service.animationDelay}`}
              className="services-card mt-4"
              data-aos="fade-up"
            >
              {service.icon}
              <div className="mb-4">
                <p className="services-card-title is-size-5-desktop mb-4">
                  {service.title}
                </p>
              </div>
              <p className="services-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Services }
