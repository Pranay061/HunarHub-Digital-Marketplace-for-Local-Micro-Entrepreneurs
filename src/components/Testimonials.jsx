function Testimonials() {

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Customer",
      feedback:
        "HunarHub helped me discover talented local artisans near my city. The experience was smooth and trustworthy.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },

    {
      name: "Ramesh Kumar",
      role: "Potter",
      feedback:
        "After joining HunarHub, I started receiving online orders regularly and my income improved a lot.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },

    {
      name: "Lakshmi Devi",
      role: "Tailor",
      feedback:
        "This platform gave digital visibility to my tailoring business and helped me connect with more customers.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ]

  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#fffaf5]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Success Stories
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Hear from customers and entrepreneurs using HunarHub.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              <div className="flex items-center gap-4 mb-6">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-orange-600">
                    {item.role}
                  </p>
                </div>

              </div>

              <p className="text-gray-600 leading-relaxed">
                "{item.feedback}"
              </p>

              {/* View Profile Button */}
              <button
  onClick={() => {
    window.alert(`Viewing ${item.name}'s artisan profile 🚀`)
  }}
  className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-xl transition"
>
  View Profile
</button>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials