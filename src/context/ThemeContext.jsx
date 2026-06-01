import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

function ThemeProvider({ children }) {

  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme =
      localStorage.getItem("hunarhub-theme")

    return savedTheme === "dark"

  })

  useEffect(() => {

    if (darkMode) {

      document.documentElement.classList.add("dark")

      localStorage.setItem(
        "hunarhub-theme",
        "dark"
      )

    } else {

      document.documentElement.classList.remove("dark")

      localStorage.setItem(
        "hunarhub-theme",
        "light"
      )

    }

  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (

    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  )
}

export default ThemeProvider