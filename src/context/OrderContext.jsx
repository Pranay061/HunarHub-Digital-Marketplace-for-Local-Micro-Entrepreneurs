import { createContext, useState } from "react"

export const OrderContext = createContext()

function OrderProvider({ children }) {

  const [orders, setOrders] = useState(() => {

    const savedOrders =
      localStorage.getItem("hunarhub-orders")

    return savedOrders
      ? JSON.parse(savedOrders)
      : []

  })

  const addOrder = (
    items,
    total,
    paymentMethod
  ) => {

    const newOrder = {
      id: Date.now(),
      items,
      total,
      paymentMethod,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    }

    const updatedOrders = [
      ...orders,
      newOrder,
    ]

    setOrders(updatedOrders)

    localStorage.setItem(
      "hunarhub-orders",
      JSON.stringify(updatedOrders)
    )
  }

  const updateOrderStatus = (
    orderId,
    newStatus
  ) => {

    const updatedOrders = orders.map(
      (order) =>
        order.id === orderId
          ? {
              ...order,
              status: newStatus,
            }
          : order
    )

    setOrders(updatedOrders)

    localStorage.setItem(
      "hunarhub-orders",
      JSON.stringify(updatedOrders)
    )
  }

  const totalRevenue = orders.reduce(
    (sum, order) =>
      sum + Number(order.total || 0),
    0
  )

  const totalProductsSold = orders.reduce(
    (sum, order) =>
      sum + (order.items?.length || 0),
    0
  )

  return (

    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
        totalRevenue,
        totalProductsSold,
      }}
    >

      {children}

    </OrderContext.Provider>

  )
}

export default OrderProvider