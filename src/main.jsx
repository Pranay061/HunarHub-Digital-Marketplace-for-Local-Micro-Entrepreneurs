import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import AuthProvider from "./context/AuthContext"
import CartProvider from "./context/CartContext"
import WishlistProvider from "./context/WishlistContext"
import ProductProvider from "./context/ProductContext"
import OrderProvider from "./context/OrderContext"
import ReviewProvider from "./context/ReviewContext"
import ThemeProvider from "./context/ThemeContext"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductProvider>
              <OrderProvider>
                <ReviewProvider>

                  <App />

                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                  />

                </ReviewProvider>
              </OrderProvider>
            </ProductProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)