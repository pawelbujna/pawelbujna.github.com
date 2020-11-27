import React from "react"
import { useTranslation } from "react-i18next"

const Tips = () => {
  const { t } = useTranslation()
  return (
    <div className="tips p-6">
      <div className="columns">
        <div className="column" data-aos="fade-up">
          <svg
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
            <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
            <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
            <line x1="17" y1="17" x2="17" y2="17.01" />
          </svg>

          <p className="mt-4 is-size-4">{t("tips.colors")}</p>
        </div>
        <div className="column" data-aos="fade-up">
          <svg
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="15" cy="15" r="3" />
            <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
            <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
            <line x1="6" y1="9" x2="18" y2="9" />
            <line x1="6" y1="12" x2="9" y2="12" />
            <line x1="6" y1="15" x2="8" y2="15" />
          </svg>

          <p className="mt-4 is-size-4">{t("tips.quality")}</p>
        </div>
        <div className="column" data-aos="fade-up">
          <svg
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>

          <p className="mt-4 is-size-4">{t("tips.settings")}</p>
        </div>
      </div>
    </div>
  )
}

export { Tips }
