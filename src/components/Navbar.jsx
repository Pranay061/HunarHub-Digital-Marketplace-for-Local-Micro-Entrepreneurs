import { useContext, useState } from "react"
import { Menu, X, User } from "lucide-react"
import { AuthContext } from "../context/AuthContext"
import { CartContext } from "../context/CartContext"
import ThemeToggle from "./ThemeToggle"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const { user, logout } = useContext(AuthContext)
  const { cartItems } = useContext(CartContext)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-[9999]">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-orange-600"
        >
          HunarHub
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-700 dark:text-gray-200">

          <li>
            <a href="#home" className="hover:text-orange-600">
              Home
            </a>
          </li>

          <li>
            <a href="#marketplace" className="hover:text-orange-600">
              Marketplace
            </a>
          </li>

          <li>
            <a href="#categories" className="hover:text-orange-600">
              Categories
            </a>
          </li>

          <li>
            <a
              href="#cart"
              className="hover:text-orange-600 flex items-center gap-2"
            >
              Cart

              <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
            </a>
          </li>

          <li>
            <a href="#dashboard" className="hover:text-orange-600">
              Dashboard
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-orange-600">
              About
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4 relative">

          <ThemeToggle />

          {user ? (

            <div className="relative">

              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-2 bg-orange-100 dark:bg-gray-800 px-5 py-3 rounded-2xl"
              >
                <User
                  size={20}
                  className="text-orange-600"
                />

                <span className="font-medium text-orange-700 dark:text-orange-400">
                  {user.firstName}
                </span>

              </button>

              {showProfile && (

                <div className="absolute right-0 mt-4 bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-6 w-80 border z-50">

                  <div className="flex items-center gap-3">

                    <div className="bg-orange-100 p-3 rounded-full">
                      <User
                        size={24}
                        className="text-orange-600"
                      />
                    </div>

                    <div>

                      <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                        {user.firstName} {user.lastName}
                      </h2>

                      <p className="text-gray-500 text-sm">
                        {user.email}
                      </p>

                    </div>

                  </div>

                  <div className="border-t my-5"></div>

                  <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-200">

                    <a
                      href="#dashboard"
                      onClick={() => setShowProfile(false)}
                    >
                      Dashboard
                    </a>

                    <a
                      href="#orders"
                      onClick={() => setShowProfile(false)}
                    >
                      My Orders
                    </a>

                    <a
                      href="#my-products"
                      onClick={() => setShowProfile(false)}
                    >
                      My Products
                    </a>

                    <a
                      href="#account-settings"
                      onClick={() => setShowProfile(false)}
                    >
                      Account Settings
                    </a>

                    <button
                      onClick={() => {
                        logout()
                        setShowProfile(false)
                      }}
                      className="bg-black hover:bg-gray-800 text-white py-3 rounded-xl"
                    >
                      Logout
                    </button>

                  </div>

                </div>

              )}

            </div>

          ) : (

            <a
              href="#login"
              className="bg-orange-600 text-white px-6 py-3 rounded-2xl"
            >
              Login
            </a>

          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (

        <div className="md:hidden bg-white dark:bg-gray-900 border-t shadow-2xl">

          <ul className="flex flex-col py-4">

            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-black dark:text-white hover:bg-orange-50 dark:hover:bg-gray-800"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#marketplace"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-black dark:text-white hover:bg-orange-50 dark:hover:bg-gray-800"
              >
                Marketplace
              </a>
            </li>

            <li>
              <a
                href="#categories"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-black dark:text-white hover:bg-orange-50 dark:hover:bg-gray-800"
              >
                Categories
              </a>
            </li>

            <li>
              <a
                href="#dashboard"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-black dark:text-white hover:bg-orange-50 dark:hover:bg-gray-800"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#cart"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-black dark:text-white hover:bg-orange-50 dark:hover:bg-gray-800"
              >
                Cart ({cartItems.length})
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-black dark:text-white hover:bg-orange-50 dark:hover:bg-gray-800"
              >
                About
              </a>
            </li>

            <li className="px-6 py-4">
              <ThemeToggle />
            </li>

          </ul>

        </div>

      )}

    </nav>
  )
}

export default Navbar