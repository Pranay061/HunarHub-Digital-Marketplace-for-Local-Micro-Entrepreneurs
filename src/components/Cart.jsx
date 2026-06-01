import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { OrderContext } from "../context/OrderContext"
import OrderSuccessModal from "./OrderSuccessModal"

function Cart() {

  const {
    cartItems,
    removeFromCart,
    clearCart,
  } = useContext(CartContext)

  const { addOrder } =
    useContext(OrderContext)

  const [showOrderSuccess, setShowOrderSuccess] =
    useState(false)

  const [orderTotal, setOrderTotal] =
    useState(0)

  const [paymentMethod, setPaymentMethod] =
    useState("UPI")

  const total = cartItems.reduce(
    (sum, item) => {

      const price = Number(
        item.price.replace(/[^0-9.]/g, "")
      )

      return sum + price

    },
    0
  )

  const placeOrder = () => {

    setOrderTotal(total)

    addOrder(
      cartItems,
      total,
      paymentMethod
    )

    clearCart()

    setShowOrderSuccess(true)
  }

  return (

    <section
      id="cart"
      className="py-24 px-6 bg-[#fffaf5]"
    >

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (

          <p className="text-lg text-gray-600">
            Your cart is empty.
          </p>

        ) : (

          <>

            <div className="space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow flex justify-between items-center"
                >

                  <div>

                    <h2 className="font-bold text-xl">
                      {item.title}
                    </h2>

                    <p className="text-orange-600 mt-1">
                      {item.price}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            <div className="mt-10 bg-white p-6 rounded-2xl shadow">

              <h2 className="text-2xl font-bold mb-6">
                Total: ₹{total}
              </h2>

              <h3 className="font-semibold mb-4">
                Select Payment Method
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">

                <label className="border p-4 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    value="UPI"
                    checked={
                      paymentMethod === "UPI"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />
                  <span className="ml-2">
                    UPI
                  </span>
                </label>

                <label className="border p-4 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    value="Card"
                    checked={
                      paymentMethod === "Card"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />
                  <span className="ml-2">
                    Credit / Debit Card
                  </span>
                </label>

                <label className="border p-4 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    value="Net Banking"
                    checked={
                      paymentMethod ===
                      "Net Banking"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />
                  <span className="ml-2">
                    Net Banking
                  </span>
                </label>

                <label className="border p-4 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    value="Cash On Delivery"
                    checked={
                      paymentMethod ===
                      "Cash On Delivery"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />
                  <span className="ml-2">
                    Cash On Delivery
                  </span>
                </label>

              </div>

              <button
                onClick={placeOrder}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl transition"
              >
                Place Order
              </button>

            </div>

          </>

        )}

      </div>

      <OrderSuccessModal
        show={showOrderSuccess}
        orderTotal={orderTotal}
        closeModal={() =>
          setShowOrderSuccess(false)
        }
      />

    </section>
  )
}

export default Cart