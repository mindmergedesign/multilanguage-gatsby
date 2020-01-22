import React from "react"
import useDarkMode from "use-dark-mode"

/* "use-dark-mode" Will help you toggle a light/dark theme easily 
* by wrapping our application inside a theme provider with React Hooks and React Context
*/


/* 1.- The isLightTheme is going to determine
 * whether you are using the light theme or not
 * we will set the initial value to false.
 */

const isLightTheme = false

/* 2.-  Create a context using createContext() 
and assign the isLightTheme variable */

const ThemeContext = React.createContext(isLightTheme)

/* */
const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode(isLightTheme)
  const theme = darkMode.value ? "Dark" : "Light"

  /* Return a JSX template that contains the 
  * ThemeContext and use the .Provider tag 
  * this is going to wrap the children components that we add to it
  * and the data will be available for those components. we're going to 
  * The data that we're going to provide is going to be passed in the value attribute
  * here we're going to provide an object that has the color theme that will help us do 
  * things like making conditionally render images, and the actual toggle function to use in the menu.
  */

  return (
    <ThemeContext.Provider
      value={{ theme, isDark: darkMode.value, toggleTheme: darkMode.toggle }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
