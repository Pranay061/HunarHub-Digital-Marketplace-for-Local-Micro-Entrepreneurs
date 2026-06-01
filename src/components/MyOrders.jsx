import { useContext } from "react"
import { OrderContext } from "../context/OrderContext"
import jsPDF from "jspdf"

function MyOrders() {

  const { orders } = useContext(OrderContext)

  const getStatusColor = (status) => {

    switch (status) {

      case "Pending":
        return "bg-yellow-100 text-yellow-700"

      case "Processing":
        return "bg-blue-100 text-blue-700"

      case "Shipped":
        return "bg-purple-100 text-purple-700"

      case "Delivered":
        return "bg-green-100 text-green-700"

      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const downloadInvoice = (order) => {

    const doc = new jsPDF()

    doc.setFontSize(22)
    doc.text("HunarHub Invoice", 20, 20)

    doc.setFontSize(12)

    doc.text(
      `Order ID: ${order.id}`,
      20,
      40
    )

    doc.text(
      `Date: ${order.date}`,
      20,
      50
    )

    doc.text(
      `Status: ${order.status}`,
      20,
      60
    )

    doc.text(
      `Payment: ${order.paymentMethod}`,
      20,
      70
    )

    let y = 90

    doc.text(
      "Products:",
      20,
      y
    )

    y += 10

    order.items?.forEach((item) => {

      doc.text(
        `${item.title} - ${item.price}`,
        25,
        y
      )

      y += 10

    })

    y += 10

    doc.setFontSize(14)

    doc.text(
      `Total: ₹${order.total}`,
      20,
      y
    )

    doc.save(
      `invoice-${order.id}.pdf`
    )
  }

  return (

    <section
      id="orders"
      className="py-24 px-6 bg-white"
    >

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          My Orders
        </h1>

        {orders.length === 0 ? (

          <div className="bg-[#fffaf5] p-10 rounded-3xl text-center">

            <h2 className="text-2xl font-bold">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mt-3">
              Start shopping to see your orders here.
            </p>

          </div>

        ) : (

          <div className="space-y-8">

            {orders.map((order) => (

              <div
                key={order.id}
                className="bg-[#fffaf5] p-6 rounded-3xl shadow"
              >

                <div className="flex flex-wrap justify-between items-center gap-4">

                  <div>

                    <h2 className="text-xl font-bold">
                      Order #{order.id}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {order.date}
                    </p>

                    <p className="text-gray-600 mt-2">

                      Payment Method:

                      <span className="font-semibold ml-2">
                        {order.paymentMethod}
                      </span>

                    </p>

                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>

                </div>

                <div className="mt-6">

                  <h3 className="font-semibold mb-4">
                    Ordered Products
                  </h3>

                  <div className="space-y-3">

                    {order.items?.map(
                      (item, index) => (

                        <div
                          key={index}
                          className="flex justify-between bg-white p-4 rounded-2xl"
                        >

                          <span>
                            {item.title}
                          </span>

                          <span className="font-semibold">
                            {item.price}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>

                <div className="mt-6 flex flex-wrap justify-between items-center gap-4">

                  <p className="text-2xl font-bold text-orange-600">
                    Total: ₹{order.total}
                  </p>

                  <button
                    onClick={() =>
                      downloadInvoice(order)
                    }
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-2xl transition"
                  >
                    Download Invoice
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  )
}

export default MyOrders