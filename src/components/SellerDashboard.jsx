import { useContext } from "react"

import { ProductContext } from "../context/ProductContext"
import { OrderContext } from "../context/OrderContext"
import { WishlistContext } from "../context/WishlistContext"

function SellerDashboard() {

  const { products } = useContext(ProductContext)
  const { orders } = useContext(OrderContext)
  const { wishlistItems } = useContext(WishlistContext)

  const revenue = orders.reduce(
    (sum, order) => sum + Number(order.total),
    0
  )

  return (

    <section
      id="dashboard"
      className="py-24 px-6 bg-white"
    >

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-12">
          Seller Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-orange-100 p-8 rounded-3xl">

            <h3 className="text-gray-600">
              Products
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {products.length}
            </h2>

          </div>

          <div className="bg-blue-100 p-8 rounded-3xl">

            <h3 className="text-gray-600">
              Orders
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {orders.length}
            </h2>

          </div>

          <div className="bg-pink-100 p-8 rounded-3xl">

            <h3 className="text-gray-600">
              Wishlist
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {wishlistItems.length}
            </h2>

          </div>

          <div className="bg-green-100 p-8 rounded-3xl">

            <h3 className="text-gray-600">
              Revenue
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              ₹{revenue}
            </h2>

          </div>

        </div>

      </div>

    </section>

  )
}

export default SellerDashboard