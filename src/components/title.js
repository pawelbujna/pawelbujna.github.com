import React from "react"

const Title = ({ text, revert = false }) => {
  return (
    <div className={!revert ? "title" : "title-revert"}>
      <p
        className="is-uppercase has-text-weight-semibold is-size-3-desktop is-size-4-tablet is-size-4-mobile mb-6"
        data-aos="fade-up"
      >
        {text}
      </p>
      <div></div>
    </div>
  )
}

export { Title }
