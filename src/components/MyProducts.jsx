import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { ProductContext } from "../context/ProductContext"
import { toast } from "react-toastify"

function MyProducts() {

  const { user } = useContext(AuthContext)

  const {
    products,
    deleteProduct,
    updateProduct,
  } = useContext(ProductContext)

  const [editingProduct, setEditingProduct] =
    useState(null)

  const [editTitle, setEditTitle] =
    useState("")

  const [editPrice, setEditPrice] =
    useState("")

  const handleEdit = (product) => {

    setEditingProduct(product)

    setEditTitle(product.title)

    setEditPrice(
      product.price.replace("₹", "")
    )
  }

  const handleUpdate = () => {

    updateProduct(
      editingProduct.id,
      {
        title: editTitle,
        price: `₹${editPrice}`,
      }
    )

    toast.success(
      "Product Updated Successfully ✅"
    )

    setEditingProduct(null)
  }

  return (

    <section
      id="my-products"
      className="py-24 px-6 bg-[#fffaf5]"
    >

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          My Products
        </h1>

        <p className="text-gray-600 mb-2">
          Products listed by {user?.firstName || "Artisan"}
        </p>

        <p className="text-orange-600 font-semibold mb-10">
          Total Products: {products.length}
        </p>

        {products.length === 0 ? (

          <div className="bg-white p-10 rounded-3xl shadow text-center">

            <h2 className="text-2xl font-bold">
              No Products Added Yet
            </h2>

            <p className="text-gray-500 mt-3">
              Add your first product to start selling.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-3xl shadow overflow-hidden"
              >

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {product.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {product.artisan}
                  </p>

                  <p className="text-orange-600 mt-3 font-semibold text-lg">
                    {product.price}
                  </p>

                  <div className="flex gap-3 mt-6">

                    <button
                      onClick={() =>
                        handleEdit(product)
                      }
                      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-2xl"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteProduct(product.id)
                      }
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* Edit Modal */}

      {editingProduct && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-8 rounded-3xl w-full max-w-md">

            <h2 className="text-3xl font-bold mb-6">
              Edit Product
            </h2>

            <input
              type="text"
              value={editTitle}
              onChange={(e) =>
                setEditTitle(e.target.value)
              }
              className="w-full border p-4 rounded-2xl mb-4"
            />

            <input
              type="number"
              value={editPrice}
              onChange={(e) =>
                setEditPrice(e.target.value)
              }
              className="w-full border p-4 rounded-2xl mb-6"
            />

            <div className="flex gap-4">

              <button
                onClick={handleUpdate}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl"
              >
                Save
              </button>

              <button
                onClick={() =>
                  setEditingProduct(null)
                }
                className="flex-1 bg-gray-300 hover:bg-gray-400 py-3 rounded-2xl"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </section>

  )
}

export default MyProducts