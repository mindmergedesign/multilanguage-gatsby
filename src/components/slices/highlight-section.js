import React from "react"
import { RichText } from "prismic-reactjs"
import { ThemeContext } from "../../context/theme-context"

const HighlightSection = ({ slice }) => {
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
    <section className="highlight-section">
      <div className="highlight-image">
        <picture>
          <source
            srcSet={slice.primary.highlight_image.Mobileview.url}
            alt={slice.primary.highlight_image.Mobileview.alt}
            media="(max-width: 500px)"
          />
          <source
            srcSet={slice.primary.highlight_image.Tabletview.url}
            alt={slice.primary.highlight_image.Tabletview.alt}
            media="(max-width: 1100px)"
          />
          <img
            src={slice.primary.highlight_image.url}
            alt={slice.primary.highlight_image.alt}
          />
        </picture>
      </div>
      <div className="highlight-content">
        <img
          src={isDark ? whiteIcon.url : blackIcon.url}
          alt={isDark ? whiteIcon.alt : blackIcon.alt}
        />
        {slice.primary.highlight_title
          ? RichText.render(slice.primary.highlight_title)
          : "Untitled"}
        {slice.primary.highlight_text
          ? RichText.render(slice.primary.highlight_text)
          : " "}
      </div>
    </section>
  )
}

export default HighlightSection
