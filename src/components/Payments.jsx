import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { OrderContext } from "../context/OrderContext"
import { toast } from "react-toastify"

function Payment() {

  const { cartItems, clearCart } =
    useContext(CartContext)

  const { addOrder } =
    useContext(OrderContext)

  const [paymentMethod, setPaymentMethod] =
    useState("UPI")

  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      Number(
        item.price.replace("₹", "")
      ),
    0
  )

  const handlePayment = () => {

    if (cartItems.length === 0) {

      toast.error(
        "Cart is empty"
      )

      return
    }

    addOrder(cartItems, total)

    clearCart()

    toast.success(
      "Payment Successful 🎉"
    )
  }

  return (

    <section
      id="payment"
      className="py-24 px-6 bg-[#fffaf5]"
    >

      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow">

        <h1 className="text-4xl font-bold mb-8">
          Checkout Payment
        </h1>

        <div className="space-y-4">

          <label className="flex gap-3">

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

            UPI

          </label>

          <label className="flex gap-3">

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

            Credit / Debit Card

          </label>

          <label className="flex gap-3">

            <input
              type="radio"
              value="COD"
              checked={
                paymentMethod === "COD"
              }
              onChange={(e) =>
                setPaymentMethod(
                  e.target.value
                )
              }
            />

            Cash On Delivery

          </label>

        </div>

        <div className="mt-8">

          <h2 className="text-2xl font-bold text-orange-600">
            Total: ₹{total}
          </h2>

        </div>

        <button
          onClick={handlePayment}
          className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl"
        >
          Pay Now
        </button>

      </div>

    </section>
  )
}

export default Payment