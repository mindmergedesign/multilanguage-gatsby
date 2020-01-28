import React from "react"
import { ThemeContext } from "../../context/theme-context"

import DarkTwitter from "./../../images/darkTwitter.png"
import LightTwitter from "./../../images/lightTwitter.png"
import DarkInstagram from "./../../images/darkInstagram.png"
import LightInstagram from "./../../images/lightInstagram.png"
import DarkFacebook from "./../../images/darkFacebook.png"
import LightFacebook from "./../../images/lightFacebook.png"

const Footer = () => {
  /*
   * After importing the Themecontext we will use the
   * isDark variable that will work as an indicator to choose
   * the className indicated for each theme.
   */
  const { isDark } = React.useContext(ThemeContext)

  return (
    <footer>
      <p className="copyright">© 2019 Todoapp-Powered by Prismic</p>
      <div className="social">
        <img
          src={isDark ? DarkFacebook : LightFacebook}
          alt="Facebook social icon"
        />
        <img
          src={isDark ? DarkInstagram : LightInstagram}
          alt="intagram social icon"
        />
        <img
          src={isDark ? DarkTwitter : LightTwitter}
          alt="Twitter social icon"
        />
      </div>
    </footer>
  )
}

export default Footer
