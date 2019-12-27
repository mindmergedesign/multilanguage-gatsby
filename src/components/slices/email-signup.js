/* eslint-disable prettier/prettier */
import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/ThemeContext"
import { linkResolver } from "./../../utils/linkResolver"
import customData from "./../../utils/local"

export default ({ slice }) => {
  const { dark } = React.useContext(ThemeContext)

  if (!slice) return null

  const data = slice.primary

  return (
    <section className="auto-grid col-2 contact">
      <div className="description">
        <h2>{data.email_title ? RichText.asText(slice.primary.email_title) : customData.defaultTitle }</h2>
        <p>{data.email_text ? RichText.asText(slice.primary.email_text) : customData.defaultTitle}</p>
      </div>
      <div className="form">
        <h6>{data.label ? RichText.asText(slice.primary.label) : customData.defaultTitle}</h6>
        <input
          className={`mail ${dark ? "light-mail" : "dark-mail"}`}
          type="text"
          name="FirstName"
          value={data.placeholder ? slice.primary.placeholder : customData.defaultTitle}
          readOnly
        />
        <input
          className={`btn ${dark ? "light-btn" : "dark-btn"}`}
          type="submit"
          value={data.button_text ? RichText.asText(slice.primary.button_text) : customData.defaultTitle}
        />
      </div>
    </section>
  )
}
