import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/ThemeContext"
import { linkResolver } from "./../../utils/linkResolver"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null

  return (
    <section className="auto-grid col-2 iconInfoSection">
      <div>
        <img
          className="icon"
          src={
            dark ? slice.primary.icon_white.url : slice.primary.icon_black.url
          }
          alt={
            dark ? slice.primary.icon_white.alt : slice.primary.icon_black.alt
          }
        />
        <h2 className="title">{RichText.asText(slice.primary.info_title)}</h2>
        <p>{RichText.asText(slice.primary.info_text)}</p>
      </div>
      <div className="description">
        {RichText.render(slice.primary.info_desc, linkResolver)}
      </div>
    </section>
  )
}
