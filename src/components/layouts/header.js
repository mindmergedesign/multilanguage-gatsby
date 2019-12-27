import React from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../../utils/linkResolver"
import customData from "./../../utils/local"

import DarkTodoop from "./../../images/darkTodoop.png"
import LightTodoop from "./../../images/lightTodoop.png"
import DarkMode from "./../../images/darkMode.png"
import LightMode from "./../../images/lightMode.png"

export default function Header(props) {
  // Use the application context created on context/ThemeContext.js
  // to toggle the theme and verify whether the theme is dark or light
  const { toggle, dark } = React.useContext(ThemeContext)
  if (!props) return null

  return (
    <header>
      <section>
        <a href="/">
          <img
            className="logo"
            src={dark ? DarkTodoop : LightTodoop}
            alt="logo"
          />
        </a>
      </section>
      <section>
        <ul>
          {props.docs ? props.docs.menu_links.map((btn, i) => {
            if (!btn) return null
            return (
              <li key={i}>
                <Link to={btn.link ? linkResolver(btn.link._meta) : "/"}>
                  {btn.label ? RichText.render(btn.label, linkResolver) : customData.defaultTitle}
                </Link>
              </li>
            )
          }) : null }
          <li>
            {props.activeDoc ? props.activeDoc.alternateLanguages.map((btn, i) => {
              if (!btn) return null
              return (
                <Link className="lang" key={i} to={btn ? linkResolver(btn) : "/"}>
                  <p>
                    {btn ? btn.lang.slice(0, 2).toUpperCase() : customData.lang}
                    <span className="slash">{"/"}</span>
                  </p>
                </Link>
              )
            }) : null }
            <Link className="lang" to={props.activeDoc ? linkResolver(props.activeDoc) : "/"}>
              <p>
                {props.activeDoc.lang
                  ? props.activeDoc.lang.slice(0, 2).toUpperCase()
                  : customData.lang}
              </p>
            </Link>
          </li>
          <li>
            {/* Add the toggle function to the onClick */}
            <a onClick={toggle}>
              <img
                className="theme"
                src={dark ? DarkMode : LightMode}
                alt="color mode"
              />
            </a>
          </li>
        </ul>
      </section>
    </header>
  )
}
