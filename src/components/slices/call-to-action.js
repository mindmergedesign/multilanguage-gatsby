import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/theme-context"

const CallToAction = ({ slice }) => {
  /*
   * After importing the Themecontext we will use the
   * isDark variable that will work as an indicator to choose
   * the className indicated for each theme.
   */
  const { isDark } = React.useContext(ThemeContext)

  /*
   * Use a ternary operator to check if the image matchign thr theme exists
   * if not, render an alternate image and then
   * use this variable to conditionaly render your images
   */
  const whiteButton = slice.primary.white_button
    ? slice.primary.white_button
    : slice.primary.black_button
  const blackButton = slice.primary.black_button
    ? slice.primary.black_button
    : slice.primary.white_button

  return (
    <section className="call-to-action">
      <div>
        {slice.primary.action_title
          ? RichText.render(slice.primary.action_title)
          : "Untitled"}
        {slice.primary.action_text
          ? RichText.render(slice.primary.action_text)
          : " "}
      </div>
      <div className="download">
        <img
          src={isDark ? whiteButton.url : blackButton.url}
          alt={isDark ? whiteButton.alt : blackButton.alt}
        />
      </div>
    </section>
  )
}

export default CallToAction
