function Newsletter() {

  return (
    <section id="newsletter" className="py-20 px-6 bg-orange-600">

      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Stay Connected with HunarHub
        </h1>

        <p className="text-orange-100 text-lg mt-6 leading-relaxed">
          Get updates about local artisans, handmade products,
          special offers, and community stories directly to your inbox.
        </p>

        {/* Input Section */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-2xl outline-none text-gray-700 bg-white"
          />

          <button className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-2xl hover:bg-orange-100 transition">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  )
}

export default Newsletter