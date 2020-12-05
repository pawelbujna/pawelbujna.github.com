import React from "react"
import { useTranslation } from "react-i18next"

import ContactUs1 from "./assets/contact-us-1.jpg"

const ContactUs = () => {
  const { t } = useTranslation()

  return (
    <div className="contact-us">
      <div
        data-aos="fade-up"
        className="contact-us-photo"
        style={{
          backgroundImage: `url(${ContactUs1})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="contact-us-info px-6" data-aos="fade-up">
        <div>
          <p className="is-size-3-desktop is-size-4-tablet is-size-4-mobile is-uppercase has-text-weight-semibold mb-6">
            {t("contact.title")}
          </p>
        </div>
        <div className="contact-us-container">
          <div
            className="contact-us-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="contact-us-icon">
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

          <div
            className="contact-us-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="contact-us-icon">
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

          <div
            className="contact-us-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="contact-us-icon">
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
              rel="noreferrer"
            >
              /AdBlind
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ContactUs }
