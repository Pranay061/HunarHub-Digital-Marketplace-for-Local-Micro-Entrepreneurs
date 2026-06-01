import { useContext, useState } from "react"
import { ReviewContext } from "../context/ReviewContext"

function ProductReviews({ productId }) {

  const { reviews, addReview } =
    useContext(ReviewContext)

  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")

  const productReviews = reviews.filter(
    (review) => review.productId === productId
  )

  const averageRating =
    productReviews.length > 0
      ? (
          productReviews.reduce(
            (sum, review) => sum + review.rating,
            0
          ) / productReviews.length
        ).toFixed(1)
      : 0

  const handleSubmit = () => {

    if (!comment.trim()) return

    addReview({
      productId,
      rating,
      comment,
    })

    setComment("")
    setRating(5)
  }

  return (

    <div className="mt-10">

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-2xl font-bold">
          Reviews
        </h2>

        <div className="text-orange-600 font-semibold">

          ⭐ {averageRating}
          {" "}
          ({productReviews.length} Reviews)

        </div>

      </div>

      {productReviews.length === 0 ? (

        <div className="bg-gray-50 p-4 rounded-2xl text-gray-500">

          No reviews yet. Be the first to review.

        </div>

      ) : (

        <div className="space-y-4">

          {productReviews.map((review) => (

            <div
              key={review.id}
              className="bg-gray-50 p-4 rounded-2xl"
            >

              <p className="text-yellow-500 text-lg">
                {"⭐".repeat(review.rating)}
              </p>

              <p className="mt-2 text-gray-700">
                {review.comment}
              </p>

            </div>

          ))}

        </div>

      )}

      <div className="mt-6 border-t pt-6">

        <h3 className="font-semibold mb-4">
          Leave a Review
        </h3>

        <select
          value={rating}
          onChange={(e) =>
            setRating(Number(e.target.value))
          }
          className="border p-3 rounded-xl"
        >
          <option value={5}>★★★★★</option>
          <option value={4}>★★★★</option>
          <option value={3}>★★★</option>
          <option value={2}>★★</option>
          <option value={1}>★</option>
        </select>

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
          className="w-full border p-4 rounded-2xl mt-4"
          rows="4"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl transition"
        >
          Submit Review
        </button>

      </div>

    </div>
  )
}

export default ProductReviews