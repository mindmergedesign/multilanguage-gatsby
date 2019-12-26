import React from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null

  return (
    <section className="auto-grid hero">
      <div className="hero-img">
        <img
          className="about-img"
          src={
            dark ? slice.primary.image_white.url : slice.primary.image_black.url
          }
          alt={
            dark ? slice.primary.image_white.alt : slice.primary.image_black.alt
          }
        />
      </div>
      <div
        className={`background ${
          slice.primary.background_image_position === "left"
            ? "leftBg"
            : "rightBg"
        }`}
      >
        <img
          className={`${dark ? "darkBg" : "lightBg"}`}
          src={slice.primary.background_image.url}
          alt={slice.primary.background_image.alt}
        />
      </div>
    </section>
  )
}
