import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/theme-context"

const EmailSignup = ({ slice }) => {
  /*
   * After importing the Themecontext we will use the
   * isDark variable that will work as an indicator to choose
   * the className indicated for each theme.
   */
  const { isDark } = React.useContext(ThemeContext)

  return (
    <section className="email-signup">
      <div className="description">
        {slice.primary.email_title
          ? RichText.render(slice.primary.email_title)
          : "Untitled"}
        {slice.primary.email_text
          ? RichText.render(slice.primary.email_text)
          : " "}
      </div>
      <div className="form">
        {slice.primary.label ? RichText.render(slice.primary.label) : " "}
        <input
          className={`mail ${isDark ? "light-mail" : "dark-mail"}`}
          type="text"
          name="FirstName"
          value={slice.primary.placeholder}
          readOnly
        />
        <input
          className={`btn ${isDark ? "light-btn" : "dark-btn"}`}
          type="submit"
          value={RichText.asText(slice.primary.button_text)}
        />
      </div>
    </section>
  )
}

export default EmailSignup
