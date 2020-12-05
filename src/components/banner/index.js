import React from "react"
import ContactUs1 from "./assets/contact-us-1.webp"

const Banner = () => {
  return (
    <div
      style={{
        height: "500px",
      }}
    >
      <div
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${ContactUs1})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          height: "500px",
        }}
      ></div>
    </div>
  )
}

export { Banner }
