import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import useSSR from "use-ssr"
import Recaptcha from "react-recaptcha"

const Contact = () => {
  const { t } = useTranslation()
  const [isVerified, setIsVerified] = useState(false)
  const { isBrowser } = useSSR()

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, t("contact.tooShort"))
      .max(50, t("contact.tooLong"))
      .required(t("contact.required")),

    phone: Yup.string()
      .min(5, t("contact.tooShort"))
      .max(50, t("contact.tooLong")),

    email: Yup.string()
      .email(t("contact.wrongEmail"))
      .required(t("contact.required")),

    subject: Yup.string().required(t("contact.required")),

    message: Yup.string()
      .min(5, t("contact.tooShort"))
      .required(t("contact.required")),
  })

  return (
    <div id="contact" className="contact p-6">
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

        <div className="columns contact-form">
          <div className="column is-8">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              }}
              validationSchema={contactSchema}
              onSubmit={console.log}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <div className="control">
                          <Field
                            name="name"
                            className={`input ${
                              errors.name && touched.name ? "is-danger" : ""
                            }`}
                            placeholder={t("contact.name")}
                          />

                          {errors.name && touched.name ? (
                            <div className="help is-danger">{errors.name}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <Field
                            name="phone"
                            className={`input ${
                              errors.phone && touched.phone ? "is-danger" : ""
                            }`}
                            placeholder={t("contact.phone")}
                          />
                          {errors.phone && touched.phone ? (
                            <div className="help is-danger">{errors.phone}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="column">
                      <div className="field">
                        <div className="control">
                          <Field
                            name="email"
                            type="email"
                            className={`input ${
                              errors.email && touched.email ? "is-danger" : ""
                            }`}
                            placeholder={t("contact.email")}
                          />
                          {errors.email && touched.email ? (
                            <div className="help is-danger">{errors.email}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <Field
                            name="subject"
                            className={`input ${
                              errors.subject && touched.subject
                                ? "is-danger"
                                : ""
                            }`}
                            placeholder={t("contact.subject")}
                          />
                          {errors.subject && touched.subject ? (
                            <div className="help is-danger">
                              {errors.subject}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="columns contact-textarea">
                    <div className="column">
                      <div className="field">
                        <div className="control">
                          <Field
                            name="message"
                            className={`input ${
                              errors.message && touched.message
                                ? "is-danger"
                                : ""
                            }`}
                            as="textarea"
                            rows="5"
                            placeholder={t("contact.message")}
                          />
                          {errors.message && touched.message ? (
                            <div className="help is-danger">
                              {errors.message}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="contact-submit mt-4">
                    {isBrowser && (
                      <Recaptcha
                        sitekey="6Ldise4ZAAAAAG_eQYNqkhopulKOZzsnleWImG2d"
                        render="explicit"
                        verifyCallback={() => setIsVerified(true)}
                      />
                    )}

                    <button
                      disabled={!isVerified}
                      className="button is-primary mt-5"
                      type="submit"
                    >
                      {t("contact.send")}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="column is-4">
            <div className="contact-info">
              <div className="contact-card" data-aos="fade-up">
                <div className="contact-icon">
                  <div>
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

                    <p className="is-uppercase has-text-weight-semibold">
                      {t("contact.phone")}
                    </p>
                  </div>
                </div>
                <div>
                  <a className="is-size-6-desktop" href="tel:+48 519 517 083">
                    {" "}
                    +48 519 517 083
                  </a>
                </div>
                <div>
                  <a className="is-size-6-desktop" href="tel:+48 507 510 684">
                    {" "}
                    +48 507 510 684
                  </a>
                </div>
              </div>

              <div className="contact-card" data-aos="fade-up">
                <div className="contact-icon">
                  <div>
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

                    <p className="is-uppercase has-text-weight-semibold">
                      {t("contact.email")}
                    </p>
                  </div>
                </div>
                <a className="is-size-6-desktop" href="mailto:biuro@adblind.pl">
                  biuro@adblind.pl
                </a>
              </div>

              <div className="contact-card" data-aos="fade-up">
                <div className="contact-icon">
                  <div>
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

                    <p className="is-uppercase has-text-weight-semibold">
                      {t("contact.phone")}
                    </p>
                  </div>
                </div>
                <a
                  className="is-size-6-desktop"
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
    </div>
  )
}

export { Contact }
