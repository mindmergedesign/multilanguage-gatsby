import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"

import { ThemeContext } from "../../context/theme-context"
import { linkResolver } from "../../utils/link-resolver"

import DarkTodoop from "./../../images/darkTodoop.png"
import LightTodoop from "./../../images/lightTodoop.png"
import DarkMode from "./../../images/darkMode.png"
import LightMode from "./../../images/lightMode.png"

const Menu = props => {
  if (!props) return null
  /*
   * After importing the Themecontext we will use the toggle
   * function inside an onClick to modify the Theme of our site,
   * and the isDark variable that will work as an indicator to choose
   * the className indicated for each theme.
   */
  const { toggleTheme, isDark } = React.useContext(ThemeContext)

  return (
    <header>
      <div className="menu">
        <Link to={"/"}>
          <img
            className="logo"
            src={isDark ? DarkTodoop : LightTodoop}
            alt="logo"
          />
        </Link>
      </div>
      <div className="menu">
        <ul>
          {/* map the menu_links and render the navigation links */}
          {props.menuLinks
            ? props.menuLinks.menu_links.map((menuLink, index) => {
                return (
                  <li key={index}>
                    <Link to={linkResolver(menuLink.link._meta)}>
                      {menuLink.label
                        ? RichText.asText(menuLink.label)
                        : "Untitled"}
                    </Link>
                  </li>
                )
              })
            : null}
          <li>
            {/* map the alternateLanguages and render links for each one of them */}
            {props.activeDoc
              ? props.activeDoc.alternateLanguages.map((altLang, index) => {
                  return (
                    <Link
                      className="lang"
                      key={index}
                      to={linkResolver(altLang)}
                    >
                      {altLang.lang.slice(0, 2).toUpperCase()}
                    </Link>
                  )
                })
              : null}
            <span className="slash">{"/"}</span>
            <Link className="lang" to={linkResolver(props.activeDoc)}>
              {props.activeDoc.lang.slice(0, 2).toUpperCase()}
            </Link>
          </li>
          <li>
            {/* Add the toggle function to the onClick to manage the Dark/Light mode */}
            <img
              onClick={toggleTheme}
              src={isDark ? DarkMode : LightMode}
              alt="color mode"
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Menu
