import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/ThemeContext"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null

  return (
    <section className="auto-grid col-2 callToAction">
      <div>
        <h1>{RichText.asText(slice.primary.action_title)}</h1>
        <p>{RichText.asText(slice.primary.action_text)}</p>
      </div>
      <div className="download">
        <img
          src={
            dark
              ? slice.primary.white_button.url
              : slice.primary.black_button.url
          }
          alt={
            dark
              ? slice.primary.white_button.alt
              : slice.primary.black_button.alt
          }
        />
      </div>
    </section>
  )
}
