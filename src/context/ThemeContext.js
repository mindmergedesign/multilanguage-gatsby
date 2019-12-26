import React from "react"
import useDarkMode from "use-dark-mode"

// Create a context provider to create the Theme handler

// Create the context and assing it an initial value of false
const initValue = false
const ThemeContext = React.createContext(initValue)

function ThemeProvider({ children }) {

  // useDarkMode will help you toggle the theme by 
  // just assigning the initValue handled by a function passed to the header
  const darkMode = useDarkMode(initValue)

  // Filter the styles based on the theme selected
  const theme = darkMode.value ? "Dark" : "Light"

  // Finally, wrap the application inside the provider 
  // to make the data available within all child components
  return (
    <ThemeContext.Provider
      value={{ theme, dark: darkMode.value, toggle: darkMode.toggle }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
