import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/ThemeContext"
import { linkResolver } from "./../../utils/linkResolver"
import customData from "./../../utils/local"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null

  const data = slice.primary;

  return (
    <section className="auto-grid col-2 iconInfoSection">
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
        <h2 className="title">{data.info_title ? RichText.asText(data.info_title) : customData.defaultTitle }</h2>
        <p>{data.info_text ? RichText.asText(data.info_text) : customData.defaultTitle }</p>
      </div>
      <div className="description">
        {data.info_desc ? RichText.render(data.info_desc, linkResolver) : customData.defaultTitle }
      </div>
    </section>
  )
}
