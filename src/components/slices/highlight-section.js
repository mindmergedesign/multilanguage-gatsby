import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/ThemeContext"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null
  return (
    <section className="auto-grid col-2 highlight">
      <div className="imgDesktop">
        <img
          className="img"
          src={slice.primary.highlight_image.url}
          alt={slice.primary.highlight_image.alt}
        />
      </div>
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
        <h2>{RichText.asText(slice.primary.highlight_title)}</h2>
        <div className="description">
          {RichText.render(slice.primary.highlight_text)}
        </div>
      </div>
      <div className="imgMobile">
        <img
          className="img"
          src={slice.primary.highlight_image.url}
          alt={slice.primary.highlight_image.alt}
        />
      </div>
    </section>
  )
}
