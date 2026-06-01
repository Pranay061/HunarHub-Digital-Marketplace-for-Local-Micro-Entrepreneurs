import { createContext, useState } from "react"

export const ProductContext = createContext()

function ProductProvider({ children }) {

  const [products, setProducts] = useState(() => {

    const savedProducts = localStorage.getItem(
      "hunarhub-products"
    )

    return savedProducts
      ? JSON.parse(savedProducts)
      : []

  })

  const addProduct = (product) => {

    const updatedProducts = [
      ...products,
      {
        id: Date.now(),
        createdAt: new Date().toLocaleDateString(),
        ...product,
      },
    ]

    setProducts(updatedProducts)

    localStorage.setItem(
      "hunarhub-products",
      JSON.stringify(updatedProducts)
    )
  }

  const deleteProduct = (id) => {

    const updatedProducts = products.filter(
      (product) => product.id !== id
    )

    setProducts(updatedProducts)

    localStorage.setItem(
      "hunarhub-products",
      JSON.stringify(updatedProducts)
    )
  }

  const updateProduct = (id, updatedData) => {

    const updatedProducts = products.map((product) =>

      product.id === id
        ? { ...product, ...updatedData }
        : product

    )

    setProducts(updatedProducts)

    localStorage.setItem(
      "hunarhub-products",
      JSON.stringify(updatedProducts)
    )
  }

  return (

    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >

      {children}

    </ProductContext.Provider>

  )
}

export default ProductProvider