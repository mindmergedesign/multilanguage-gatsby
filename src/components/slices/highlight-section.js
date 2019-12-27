import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/ThemeContext"
import customData from "./../../utils/local"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null

  const data = slice.primary;

  return (
    <section className="auto-grid col-2 highlight">
      <div className="imgDesktop">
        <img
          className="img"
          src={data.highlight_image ? data.highlight_image.url : customData.images.light.md}
          alt={data.highlight_image ? data.highlight_image.alt : customData.images.defaultAlt}
        />
      </div>
      <div>
        <img
          className="icon"
          src={
            dark
              ? ( data.icon_white !== null
                ? data.icon_white.url
                : customData.images.light.sm )
              : ( data.icon_black !== null
              ? data.icon_black.url
              : customData.images.dark.sm )
          }
          alt={
            dark
              ? ( data.icon_white !== null
                ? data.icon_white.alt
                : customData.images.defaultAlt )
              : ( data.icon_black !== null
              ? data.icon_black.alt
              : customData.images.defaultAlt )
          }
        />
        <h2>{data.highlight_title ? RichText.asText(data.highlight_title) : customData.defaultTitle}</h2>
        <div className="description">
          {data.highlight_text ? RichText.render(data.highlight_text) : customData.defaultTitle}
        </div>
      </div>
      <div className="imgMobile">
      <img
          className="img"
          src={data.highlight_image ? data.highlight_image.url : customData.images.light.md}
          alt={data.highlight_image ? data.highlight_image.alt : customData.images.defaultAlt}
        />
      </div>
    </section>
  )
}
