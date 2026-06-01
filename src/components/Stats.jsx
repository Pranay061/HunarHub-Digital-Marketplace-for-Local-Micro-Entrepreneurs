function Stats() {

  const stats = [
    {
      number: "500+",
      title: "Local Artisans",
    },

    {
      number: "1200+",
      title: "Orders Completed",
    },

    {
      number: "300+",
      title: "Handmade Products",
    },

    {
      number: "4.9★",
      title: "Customer Rating",
    },
  ]

  return (
    <section className="py-24 px-6 bg-orange-600">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-500"
            >

              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {stat.number}
              </h1>

              <p className="text-orange-100 text-xl mt-4">
                {stat.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Stats