import { useContext } from "react"
import { WishlistContext } from "../context/WishlistContext"

function Wishlist() {

  const {
    wishlistItems,
    removeFromWishlist,
  } = useContext(WishlistContext)

  return (

    <section
      id="wishlist"
      className="py-24 px-6 bg-white"
    >

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-3">
          Wishlist ❤️
        </h1>

        <p className="text-gray-600 mb-10">
          {wishlistItems.length} item(s) saved
        </p>

        {wishlistItems.length === 0 ? (

          <div className="text-center py-16">

            <div className="text-6xl mb-4">
              💔
            </div>

            <h2 className="text-2xl font-semibold text-gray-700">
              Your wishlist is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Save products you love and view them later.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {wishlistItems.map((product) => (

              <div
                key={product.id}
                className="bg-[#fffaf5] rounded-3xl shadow overflow-hidden hover:shadow-xl transition duration-300"
              >

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <h2 className="font-bold text-xl">
                    {product.title}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    By {product.artisan}
                  </p>

                  <p className="text-orange-600 text-lg font-semibold mt-3">
                    {product.price}
                  </p>

                  <button
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    className="mt-5 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl w-full transition"
                  >
                    Remove from Wishlist
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  )
}

export default Wishlist