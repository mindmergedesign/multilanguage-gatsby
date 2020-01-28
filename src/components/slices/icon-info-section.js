import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/theme-context"
import { linkResolver } from "./../../utils/link-resolver"

const IconInfoSection = ({ slice }) => {
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

  const whiteIcon = slice.primary.icon_white
    ? slice.primary.icon_white
    : slice.primary.icon_black
  const blackIcon = slice.primary.icon_black
    ? slice.primary.icon_black
    : slice.primary.icon_white

  return (
    <section className="icon-info-section">
      <div className="title">
        <img
          src={isDark ? whiteIcon.url : blackIcon.url }
          alt={isDark ? whiteIcon.alt : blackIcon.alt }
        />
        {slice.primary.info_title
          ? RichText.render(slice.primary.info_title)
          : "Untitled"}
        {slice.primary.info_text
          ? RichText.render(slice.primary.info_text)
          : " "}
      </div>
      <div className="description">
        {slice.primary.info_desc
          ? RichText.render(slice.primary.info_desc, linkResolver)
          : " "}
      </div>
    </section>
  )
}

export default IconInfoSection
