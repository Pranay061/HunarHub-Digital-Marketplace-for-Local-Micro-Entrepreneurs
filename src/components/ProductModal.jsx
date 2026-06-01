import { useContext } from "react"
import { toast } from "react-toastify"

import { CartContext } from "../context/CartContext"
import ProductReviews from "./ProductReviews"

function ProductModal({ product, closeModal }) {

  const { addToCart } = useContext(CartContext)

  if (!product) return null

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full text-xl z-10"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />

          {/* Product Details */}
          <div className="p-8">

            <h1 className="text-4xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Crafted by {product.artisan}
            </p>

            <p className="text-orange-600 text-3xl font-bold mt-6">
              {product.price}
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              This handmade product showcases traditional
              craftsmanship and authentic artisan skills from
              local entrepreneurs.
            </p>

            {/* Reviews Section */}
            <ProductReviews
              productId={product.id}
            />

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => {

                  addToCart(product)

                  toast.success(
                    "Added to Cart Successfully 🛒"
                  )

                  closeModal()

                }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {

                  toast.success(
                    "Order Placed Successfully 🚀"
                  )

                  closeModal()

                }}
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition"
              >
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default ProductModal