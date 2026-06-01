import { createContext, useState } from "react"

export const ReviewContext = createContext()

function ReviewProvider({ children }) {

  const [reviews, setReviews] = useState(() => {

    const savedReviews =
      localStorage.getItem("hunarhub-reviews")

    return savedReviews
      ? JSON.parse(savedReviews)
      : []

  })

  const addReview = (review) => {

    const updatedReviews = [
      ...reviews,
      {
        id: Date.now(),
        ...review,
      },
    ]

    setReviews(updatedReviews)

    localStorage.setItem(
      "hunarhub-reviews",
      JSON.stringify(updatedReviews)
    )
  }

  return (

    <ReviewContext.Provider
      value={{
        reviews,
        addReview,
      }}
    >

      {children}

    </ReviewContext.Provider>

  )
}

export default ReviewProvider