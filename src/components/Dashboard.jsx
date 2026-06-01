import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"
import { ProductContext } from "../context/ProductContext"
import { OrderContext } from "../context/OrderContext"
import { WishlistContext } from "../context/WishlistContext"
import { CartContext } from "../context/CartContext"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

function Dashboard() {

  const { user } = useContext(AuthContext)

  const { products } =
    useContext(ProductContext)

  const {
    orders,
    totalRevenue,
    totalProductsSold,
  } = useContext(OrderContext)

  const { wishlistItems } =
    useContext(WishlistContext)

  const { cartItems } =
    useContext(CartContext)

  const productCount = {}

  orders.forEach((order) => {

    order.items?.forEach((item) => {

      productCount[item.title] =
        (productCount[item.title] || 0) + 1

    })

  })

  const bestSeller =
    Object.keys(productCount).sort(
      (a, b) =>
        productCount[b] -
        productCount[a]
    )[0]

  const chartData = [
    {
      name: "Products",
      value: products.length,
    },
    {
      name: "Orders",
      value: orders.length,
    },
    {
      name: "Wishlist",
      value: wishlistItems.length,
    },
    {
      name: "Cart",
      value: cartItems.length,
    },
  ]

  const COLORS = [
    "#f97316",
    "#22c55e",
    "#ec4899",
    "#3b82f6",
  ]

  return (

    <section
      id="dashboard"
      className="py-24 px-6 bg-[#fffaf5]"
    >

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Dashboard
        </h1>

        <p className="text-gray-600 text-lg mb-12">

          Welcome back{" "}

          <span className="font-bold text-orange-600">
            {user?.firstName || "Artisan"}
          </span>

        </p>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-gray-500">
              Products
            </h2>

            <p className="text-4xl font-bold text-orange-600 mt-2">
              {products.length}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-gray-500">
              Orders
            </h2>

            <p className="text-4xl font-bold text-green-600 mt-2">
              {orders.length}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-gray-500">
              Wishlist
            </h2>

            <p className="text-4xl font-bold text-pink-600 mt-2">
              {wishlistItems.length}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-gray-500">
              Cart Items
            </h2>

            <p className="text-4xl font-bold text-blue-600 mt-2">
              {cartItems.length}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-gray-500">
              Revenue
            </h2>

            <p className="text-4xl font-bold text-green-700 mt-2">
              ₹{totalRevenue}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-gray-500">
              Products Sold
            </h2>

            <p className="text-4xl font-bold text-purple-600 mt-2">
              {totalProductsSold}
            </p>
          </div>

        </div>

        {/* Best Seller */}

        <div className="mt-10 bg-white p-8 rounded-3xl shadow">

          <h2 className="text-2xl font-bold mb-4">
            🏆 Best Selling Product
          </h2>

          <p className="text-orange-600 text-xl font-semibold">
            {bestSeller || "No Sales Yet"}
          </p>

        </div>

        {/* Charts */}

        <div className="mt-10 grid lg:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow">

            <h2 className="text-2xl font-bold mb-6">
              Platform Overview
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart data={chartData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#f97316"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow">

            <h2 className="text-2xl font-bold mb-6">
              Activity Distribution
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={chartData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >

                  {chartData.map(
                    (entry, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-10 bg-white p-8 rounded-3xl shadow">

          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <a
              href="#add-product"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl"
            >
              Add Product
            </a>

            <a
              href="#my-products"
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-2xl"
            >
              My Products
            </a>

            <a
              href="#orders"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl"
            >
              View Orders
            </a>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Dashboard