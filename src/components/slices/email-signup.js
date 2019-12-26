/* eslint-disable prettier/prettier */
import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/ThemeContext"
// import { linkResolver } from "./../../utils/linkResolver"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null

  return (
    <section className="auto-grid col-2 contact">
      <div className="description">
        <h2>{RichText.asText(slice.primary.email_title)}</h2>
        <p>{RichText.asText(slice.primary.email_text)}</p>
      </div>
      <div className="form">
        <h6>{RichText.asText(slice.primary.label)}</h6>
        <input
          className={`mail ${dark ? "light-mail" : "dark-mail"}`}
          type="text"
          name="FirstName"
          value={slice.primary.placeholder}
          readOnly
        />
        <input
          className={`btn ${dark ? "light-btn" : "dark-btn"}`}
          type="submit"
          value={RichText.asText(slice.primary.button_text)}
        />
      </div>
    </section>
  )
}
