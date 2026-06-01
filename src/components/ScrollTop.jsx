import { useEffect, useState } from "react"

function ScrollToTop() {

  const [visible, setVisible] =
    useState(false)

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener(
      "scroll",
      toggleVisibility
    )

    return () =>
      window.removeEventListener(
        "scroll",
        toggleVisibility
      )

  }, [])

  return (

    visible && (

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 bg-orange-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        ↑
      </button>

    )

  )
}

export default ScrollToTop