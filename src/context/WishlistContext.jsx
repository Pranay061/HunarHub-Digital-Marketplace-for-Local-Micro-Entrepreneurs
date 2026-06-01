import { createContext, useState } from "react"

export const WishlistContext = createContext()

function WishlistProvider({ children }) {

  const [wishlistItems, setWishlistItems] = useState(() => {

    const savedWishlist = localStorage.getItem(
      "hunarhub-wishlist"
    )

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : []

  })

  const addToWishlist = (product) => {

    const alreadyExists = wishlistItems.find(
      (item) => item.id === product.id
    )

    if (alreadyExists) return

    const updatedWishlist = [
      ...wishlistItems,
      product,
    ]

    setWishlistItems(updatedWishlist)

    localStorage.setItem(
      "hunarhub-wishlist",
      JSON.stringify(updatedWishlist)
    )
  }

  const removeFromWishlist = (id) => {

    const updatedWishlist =
      wishlistItems.filter(
        (item) => item.id !== id
      )

    setWishlistItems(updatedWishlist)

    localStorage.setItem(
      "hunarhub-wishlist",
      JSON.stringify(updatedWishlist)
    )
  }

  const toggleWishlist = (product) => {

    const exists = wishlistItems.some(
      (item) => item.id === product.id
    )

    if (exists) {

      const updatedWishlist =
        wishlistItems.filter(
          (item) => item.id !== product.id
        )

      setWishlistItems(updatedWishlist)

      localStorage.setItem(
        "hunarhub-wishlist",
        JSON.stringify(updatedWishlist)
      )

    } else {

      const updatedWishlist = [
        ...wishlistItems,
        product,
      ]

      setWishlistItems(updatedWishlist)

      localStorage.setItem(
        "hunarhub-wishlist",
        JSON.stringify(updatedWishlist)
      )
    }
  }

  const clearWishlist = () => {

    setWishlistItems([])

    localStorage.removeItem(
      "hunarhub-wishlist"
    )
  }

  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
      }}
    >

      {children}

    </WishlistContext.Provider>

  )
}

export default WishlistProvider