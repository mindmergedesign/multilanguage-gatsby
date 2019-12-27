import React from "react"
import { ThemeContext } from "../../context/ThemeContext"
import customData from "./../../utils/local"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null
  
  const data = slice.primary;

  return (
    <section className="auto-grid hero">
      <div className="hero-img">
        <img
          className="about-img"
          src={
            dark
              ? ( data.image_white !== null
                ? data.image_white.url
                : customData.images.light.lg )
              : ( data.image_black !== null
              ? data.image_black.url
              : customData.images.dark.lg )
          }
          alt={
            dark
              ? ( data.image_white !== null
                ? data.image_white.alt
                : customData.images.defaultAlt )
              : ( data.image_black !== null
              ? data.image_black.alt
              : customData.images.defaultAlt )
          }
        />
      </div>
      <div
        className={`background ${
          data.background_image_position === "left"
            ? "leftBg"
            : "rightBg"
        }`}
      >
        <img
          className={`${dark ? "darkBg" : "lightBg"}`}
          src={data.background_image ? data.background_image.url : customData.images.dark.lg }
          alt={data.background_image ? data.background_image.alt : customData.images.defaultAlt}
        />
      </div>
    </section>
  )
}
