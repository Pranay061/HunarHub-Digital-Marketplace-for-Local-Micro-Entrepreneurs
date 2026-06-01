import { motion } from "framer-motion"

function Hero() {

  return (

    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#fffaf5] via-white to-orange-50 px-6 py-24 flex items-center"
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
            🇮🇳 Empowering Local Artisans Digitally
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mt-6">

            Discover
            <span className="text-orange-600"> Handmade </span>
            Products &

            <br />

            Local Skills

          </h1>

          <p className="text-gray-600 text-xl mt-8 leading-relaxed max-w-2xl">

            HunarHub connects talented artisans,
            potters, tailors, cobblers, and
            micro-entrepreneurs with customers seeking
            authentic handmade products and services.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#marketplace"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl text-lg shadow-lg hover:scale-105 transition"
            >
              Explore Marketplace
            </a>

            <a
              href="#login"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-2xl text-lg transition"
            >
              Become an Artisan
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14">

            <div className="bg-white p-5 rounded-2xl shadow text-center">

              <h2 className="text-3xl font-bold text-orange-600">
                500+
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Artisans
              </p>

            </div>

            <div className="bg-white p-5 rounded-2xl shadow text-center">

              <h2 className="text-3xl font-bold text-green-600">
                1200+
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Orders
              </p>

            </div>

            <div className="bg-white p-5 rounded-2xl shadow text-center">

              <h2 className="text-3xl font-bold text-purple-600">
                4.9★
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Rating
              </p>

            </div>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
            alt="Artisan"
            className="rounded-[40px] shadow-2xl w-full h-[450px] md:h-[700px] object-cover"
          />

          {/* Featured Artisan */}
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-3xl shadow-xl">

            <p className="text-gray-500">
              Featured Artisan
            </p>

            <h2 className="text-2xl font-bold mt-2">
              Ramesh Kumar
            </h2>

            <p className="text-orange-600">
              Traditional Potter
            </p>

          </div>

          {/* Floating Sales Card */}
          <div className="absolute top-8 right-8 bg-orange-600 text-white p-5 rounded-3xl shadow-xl">

            <p className="text-sm">
              Monthly Sales
            </p>

            <h2 className="text-3xl font-bold">
              ₹50K+
            </h2>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero