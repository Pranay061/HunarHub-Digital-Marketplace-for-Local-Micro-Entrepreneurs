function Features() {

  const features = [
    {
      title: "Verified Entrepreneurs",
      icon: "✅",
      description:
        "Trusted and verified local artisans for safe service booking.",
    },

    {
      title: "Affordable Pricing",
      icon: "💰",
      description:
        "Transparent pricing without middlemen or hidden charges.",
    },

    {
      title: "Support Local Talent",
      icon: "❤️",
      description:
        "Empowering small vendors and preserving traditional skills.",
    },

    {
      title: "Easy Booking",
      icon: "📱",
      description:
        "Simple and responsive booking experience for customers.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <h1 className="text-4xl font-bold text-gray-800">
            Why Choose HunarHub?
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Building stronger local economies through digital empowerment.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#fff7ef] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h2 className="text-2xl font-semibold text-gray-800">
                {feature.title}
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Features