import { motion, AnimatePresence } from "framer-motion"

function OrderSuccessModal({
  show,
  closeModal,
  orderTotal,
}) {

  const orderId = Math.floor(
    100000 + Math.random() * 900000
  )

  return (

    <AnimatePresence>

      {show && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        >

          <motion.div
            initial={{
              scale: 0.7,
              opacity: 0,
              y: 100,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center"
          >

            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 180,
              }}
              className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center"
            >

              <span className="text-5xl">
                🎉
              </span>

            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800 mt-6">
              Order Placed!
            </h2>

            <p className="text-gray-600 mt-3">
              Your order has been placed successfully.
            </p>

            {/* Order Details */}
            <div className="bg-[#fffaf5] rounded-2xl p-5 mt-6">

              <p className="text-gray-500 text-sm">
                Order ID
              </p>

              <h3 className="font-bold text-lg">
                #{orderId}
              </h3>

              <div className="border-t my-4"></div>

              <p className="text-gray-500 text-sm">
                Total Amount
              </p>

              <h3 className="text-2xl font-bold text-orange-600">
                ₹{orderTotal}
              </h3>

            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">

              <button
                onClick={closeModal}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-2xl transition"
              >
                Continue Shopping
              </button>

              <a
                href="#orders"
                onClick={closeModal}
                className="flex-1 border border-orange-600 text-orange-600 hover:bg-orange-50 py-3 rounded-2xl transition"
              >
                View Orders
              </a>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  )
}

export default OrderSuccessModal