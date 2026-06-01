import { useState, useContext } from "react"
import { toast } from "react-toastify"

import { ProductContext } from "../context/ProductContext"
import { AuthContext } from "../context/AuthContext"

function AddProduct() {

  const { addProduct } = useContext(ProductContext)
  const { user } = useContext(AuthContext)

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {

    e.preventDefault()

    if (
      !title.trim() ||
      !price ||
      !category.trim() ||
      !image
    ) {

      toast.error(
        "Please fill all fields"
      )

      return
    }

    addProduct({
      title,
      price: `₹${price}`,
      category,
      image,
      artisan:
        user?.firstName || "Local Artisan",
    })

    toast.success(
      "Product Added Successfully 🚀"
    )

    setTitle("")
    setPrice("")
    setCategory("")
    setImage(null)
  }

  return (

    <section
      id="add-product"
      className="py-24 px-6 bg-[#fffaf5]"
    >

      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow">

        <h1 className="text-4xl font-bold mb-8">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Product Name"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full border p-4 rounded-2xl"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="w-full border p-4 rounded-2xl"
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full border p-4 rounded-2xl"
            required
          />

          {/* Image Upload */}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {

              const file = e.target.files[0]

              if (!file) return

              const reader = new FileReader()

              reader.onloadend = () => {
                setImage(reader.result)
              }

              reader.readAsDataURL(file)

            }}
            className="w-full border p-4 rounded-2xl"
          />

          {/* Image Preview */}

          {image && (

            <img
              src={image}
              alt="Preview"
              className="w-full h-56 object-cover rounded-2xl"
            />

          )}

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl transition"
          >
            Add Product
          </button>

        </form>

      </div>

    </section>
  )
}

export default AddProduct