import React from "react"
import { ThemeContext } from "../../context/theme-context"

const FullWidthImage = ({ slice }) => {
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
  const whiteMainImg = slice.primary.image_white
    ? slice.primary.image_white
    : slice.primary.image_black
  const blackMainImg = slice.primary.image_black
    ? slice.primary.image_black
    : slice.primary.image_white

  /* We're going to do the same conditional for the background image position */
  const position =
    slice.primary.background_image_position === "left" ? "left-bg" : "right-bg"

  return (
    <section className="full-width-image auto-grid">
      <div className="hero-img">
        <img
          className="main-img"
          src={isDark ? whiteMainImg.url : blackMainImg.url}
          alt={isDark ? whiteMainImg.alt : blackMainImg.alt}
        />
      </div>
      <div className={`background ${position}`}>
        <img
          className={`${isDark ? "dark-bg" : "light-bg"}`}
          src={
            slice.primary.background_image
              ? slice.primary.background_image.url
              : null
          }
          alt={
            slice.primary.background_image
              ? slice.primary.background_image.alt
              : " "
          }
        />
      </div>
    </section>
  )
}

export default FullWidthImage
