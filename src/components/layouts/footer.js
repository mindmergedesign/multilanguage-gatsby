import React from "react"
import { ThemeContext } from "../../context/ThemeContext"
import DarkTwitter from "./../../images/darkTwitter.png"
import LightTwitter from "./../../images/lightTwitter.png"
import DarkInstagram from "./../../images/darkInstagram.png"
import LightInstagram from "./../../images/lightInstagram.png"
import DarkFacebook from "./../../images/darkFacebook.png"
import LightFacebook from "./../../images/lightFacebook.png"

export default () => {
  const { dark } = React.useContext(ThemeContext)

  return (
    <footer>
      <section className="auto-grid col-2">
        <div className="copyright">
          <p>© 2019 Todoapp-Powered by Prismic</p>
        </div>
        <div className="social">
          <a href="/">
            <img src={dark ? DarkFacebook : LightFacebook} alt="social icon" />
          </a>
          <a href="/">
            <img
              src={dark ? DarkInstagram : LightInstagram}
              alt="social icon"
            />
          </a>
          <a href="/">
            <img src={dark ? DarkTwitter : LightTwitter} alt="social icon" />
          </a>
        </div>
      </section>
    </footer>
  )
}
