import React from "react"
import { useTranslation } from "react-i18next"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact-titles">
          <p
            className="contact-title is-uppercase has-text-weight-semibold is-size-3-desktop is-size-4-tablet is-size-4-mobile mb-6"
            data-aos="fade-up"
          >
            {t("contact.title")}
          </p>
          <div></div>
        </div>
        <div className="columns">
          <div className="column">
            <div
              className="contact-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  stroke-width="0.5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </div>
              <a className="is-size-5-desktop" href="tel:+48 519 517 083">
                {" "}
                +48 519 517 083
              </a>
            </div>
          </div>
          <div className="column">
            <div
              className="contact-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  stroke-width="0.5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                </svg>
              </div>
              <a className="is-size-5-desktop" href="mailto:biuro@adblind.pl">
                biuro@adblind.pl
              </a>
            </div>
          </div>
          <div className="column">
            <div
              className="contact-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  stroke-width="0.5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </div>
              <a
                className="is-size-5-desktop"
                href="https://www.facebook.com/AdBlind-642400769246086"
                target="_blank"
              >
                /AdBlind
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contact }
