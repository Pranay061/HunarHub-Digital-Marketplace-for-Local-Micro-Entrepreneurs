import {
  Mail,
  Phone,
} from "lucide-react"

function Footer() {

  const currentYear =
    new Date().getFullYear()

  return (

    <footer className="bg-gray-900 text-white py-24 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>

          <h1 className="text-4xl font-bold text-orange-500">
            HunarHub
          </h1>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Empowering local artisans, craftsmen,
            and micro-entrepreneurs through
            digital opportunities.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>
              <a
                href="#home"
                className="hover:text-orange-500 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#marketplace"
                className="hover:text-orange-500 transition"
              >
                Marketplace
              </a>
            </li>

            <li>
              <a
                href="#categories"
                className="hover:text-orange-500 transition"
              >
                Categories
              </a>
            </li>

            <li>
              <a
                href="#dashboard"
                className="hover:text-orange-500 transition"
              >
                Dashboard
              </a>
            </li>

          </ul>

        </div>

        {/* Account */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Account
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>
              <a
                href="#orders"
                className="hover:text-orange-500 transition"
              >
                My Orders
              </a>
            </li>

            <li>
              <a
                href="#wishlist"
                className="hover:text-orange-500 transition"
              >
                Wishlist
              </a>
            </li>

            <li>
              <a
                href="#account-settings"
                className="hover:text-orange-500 transition"
              >
                Account Settings
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Contact
          </h2>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>
                support@hunarhub.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>
                +91 98765 43210
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">

        © {currentYear} HunarHub.
        Built with ❤️ for empowering local artisans.

      </div>

    </footer>

  )
}

export default Footer