import { useEffect, useState } from "react"

function ThemeToggle() {

  const [darkMode, setDarkMode] = useState(() => {

    return localStorage.getItem("theme") === "dark"

  })

  useEffect(() => {

    if (darkMode) {

      document.body.classList.add("dark")

      localStorage.setItem(
        "theme",
        "dark"
      )

    } else {

      document.body.classList.remove("dark")

      localStorage.setItem(
        "theme",
        "light"
      )

    }

  }, [darkMode])

  return (

    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="
      bg-orange-600
      text-white
      px-4
      py-2
      rounded-xl
      hover:bg-orange-700
      transition
      "
    >

      {darkMode
        ? "☀ Light Mode"
        : "🌙 Dark Mode"}

    </button>

  )
}

export default ThemeToggle