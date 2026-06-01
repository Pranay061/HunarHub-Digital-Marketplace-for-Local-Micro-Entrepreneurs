import { createContext, useState } from "react"

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

  const savedCart = localStorage.getItem("hunarhub-cart")

  return savedCart
    ? JSON.parse(savedCart)
    : []

})
  const addToCart = (product) => {

  const updatedCart = [...cartItems, product]

  setCartItems(updatedCart)

  localStorage.setItem(
    "hunarhub-cart",
    JSON.stringify(updatedCart)
  )
}

  const removeFromCart = (id) => {

  const updatedCart = cartItems.filter(
    (item) => item.id !== id
  )

  setCartItems(updatedCart)

  localStorage.setItem(
    "hunarhub-cart",
    JSON.stringify(updatedCart)
  )
}

  const clearCart = () => {

  setCartItems([])

  localStorage.removeItem("hunarhub-cart")
}

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>
  )
}

export default CartProvider