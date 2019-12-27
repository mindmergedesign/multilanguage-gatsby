import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/ThemeContext"
import customData from "./../../utils/local"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null

  const data = slice.primary;

  return (
    <section className="auto-grid col-2 callToAction">
      <div>
        <h1>{data.action_title ? RichText.asText(data.action_title) : customData.defaultTitle}</h1>
        <p>{data.action_text ? RichText.asText(data.action_text) : customData.defaultText}</p>
      </div>
      <div className="download">
        <img
          src={
            dark
              ? ( data.white_button !== null
                ? data.white_button.url
                : customData.images.light.sm )
              : ( data.black_button !== null
              ? data.black_button.url
              : customData.images.dark.sm )
          }
          alt={
            dark
              ? ( data.white_button !== null
                ? data.white_button.alt
                : customData.images.defaultAlt )
              : ( data.black_button !== null
              ? data.black_button.alt
              : customData.images.defaultAlt )
          }
        />
      </div>
    </section>
  )
}
