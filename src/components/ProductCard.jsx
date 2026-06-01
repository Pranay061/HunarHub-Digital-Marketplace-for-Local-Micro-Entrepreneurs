import { motion } from "framer-motion"
import { useContext } from "react"
import { Heart } from "lucide-react"

import { CartContext } from "../context/CartContext"
import { WishlistContext } from "../context/WishlistContext"

function ProductCard({ product, openModal }) {

  const { addToCart } = useContext(CartContext)

  const {
    wishlistItems,
    toggleWishlist,
  } = useContext(WishlistContext)

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  )

  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
    >

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />

      {/* Product Content */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="text-gray-600 mt-2">
          By {product.artisan}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <h3 className="text-orange-600 text-3xl font-bold">
            {product.price}
          </h3>

          <button
            onClick={() => toggleWishlist(product)}
            className={`p-3 rounded-full transition duration-300 ${
              isWishlisted
                ? "bg-pink-500"
                : "bg-pink-100 hover:bg-pink-200"
            }`}
          >

            <Heart
              size={20}
              fill={
                isWishlisted
                  ? "white"
                  : "none"
              }
              className={
                isWishlisted
                  ? "text-white"
                  : "text-pink-600"
              }
            />

          </button>

        </div>

        <div className="flex flex-col gap-3 mt-6">

          <button
            onClick={() => addToCart(product)}
            className="bg-black hover:bg-gray-800 text-white py-3 rounded-2xl transition"
          >
            Add to Cart
          </button>

          <button
            onClick={() => openModal(product)}
            className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-2xl transition"
          >
            View Details
          </button>

        </div>

      </div>

    </motion.div>

  )
}

export default ProductCard