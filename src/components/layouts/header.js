import React from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../../utils/linkResolver"

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
          {props.docs.menu_links.map((btn, i) => {
            return (
              <li key={i}>
                <Link to={linkResolver(btn.link._meta)}>
                  {RichText.render(btn.label, linkResolver)}
                </Link>
              </li>
            )
          })}
          <li>
            {props.activeDoc.alternateLanguages.map((btn, i) => {
              return (
                <Link key={i} to={linkResolver(btn)}>
                  <p>{btn.lang.slice(0, 2).toUpperCase()}</p>
                </Link>
              )
            })}
            {"/"}
            <Link to={linkResolver(props.activeDoc)}>
              <p>{props.activeDoc.lang.slice(0, 2).toUpperCase()}</p>
            </Link>
          </li>
          <li>
            {/* Add the toggle function to the onClick */}
            <a onClick={toggle}>
              <img
                className="theme"
                src={dark ? DarkMode : LightMode}
                alt="coor mode"
              />
            </a>
          </li>
        </ul>
      </section>
    </header>
  )
}
