import { useContext, useState, useEffect } from "react"
import { ProductContext } from "../context/ProductContext"

import productsData from "../data/products"

import ProductCard from "./ProductCard"
import ProductModal from "./ProductModal"
import LoadingSkeleton from "./LoadingSkeleton"

function Marketplace() {

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("")

  const { products } = useContext(ProductContext)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)

  }, [])

  const categories = [
    "All",
    "Pottery",
    "Tailoring",
    "Repair",
    "Art",
  ]

  const allProducts = [
    ...productsData,
    ...products,
  ]

  const filteredProducts = allProducts
    .filter((product) => {

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory

      return matchesSearch && matchesCategory

    })
    .sort((a, b) => {

      const priceA = Number(
        a.price.replace(/[^0-9.]/g, "")
      )

      const priceB = Number(
        b.price.replace(/[^0-9.]/g, "")
      )

      switch (sortBy) {

        case "low":
          return priceA - priceB

        case "high":
          return priceB - priceA

        case "az":
          return a.title.localeCompare(b.title)

        case "za":
          return b.title.localeCompare(a.title)

        default:
          return 0
      }

    })

  return (

    <section
      id="marketplace"
      className="py-24 px-6 bg-[#fffaf5]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Marketplace
          </h1>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore handmade products and local artisan services.
          </p>

        </div>

        {/* Search */}
        <div className="mb-6">

          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
          />

        </div>

        {/* Sort Dropdown */}
        <div className="mb-8">

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="p-4 border rounded-2xl bg-white"
          >

            <option value="">
              Sort Products
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>

            <option value="az">
              Name: A to Z
            </option>

            <option value="za">
              Name: Z to A
            </option>

          </select>

        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`px-5 py-3 rounded-2xl transition font-medium ${
                selectedCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {loading ? (

            Array(4)
              .fill("")
              .map((_, index) => (
                <LoadingSkeleton key={index} />
              ))

          ) : filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                openModal={setSelectedProduct}
              />

            ))

          ) : (

            <div className="col-span-full text-center">

              <h2 className="text-2xl font-semibold text-gray-700">
                No Products Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try another search or category.
              </p>

            </div>

          )}

        </div>

      </div>

      <ProductModal
        product={selectedProduct}
        closeModal={() => setSelectedProduct(null)}
      />

    </section>

  )
}

export default Marketplace