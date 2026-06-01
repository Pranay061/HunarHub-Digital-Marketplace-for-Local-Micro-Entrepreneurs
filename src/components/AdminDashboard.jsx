function AdminDashboard() {

  const stats = [
    {
      title: "Total Users",
      value: "2,540",
    },

    {
      title: "Active Artisans",
      value: "580",
    },

    {
      title: "Orders Completed",
      value: "1,240",
    },

    {
      title: "Revenue Generated",
      value: "₹4.5L",
    },
  ]

  return (
    <section className="py-24 px-6 bg-[#fffaf5]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Admin Dashboard
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Platform insights and entrepreneur analytics.
          </p>

        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500"
            >

              <p className="text-gray-500 text-lg">
                {item.title}
              </p>

              <h2 className="text-4xl font-bold text-orange-600 mt-4">
                {item.value}
              </h2>

            </div>
          ))}

        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-lg mt-16 p-10">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Recent Activities
          </h2>

          <div className="space-y-6">

            <div className="flex justify-between border-b pb-4">

              <p className="text-gray-700">
                New artisan registration approved
              </p>

              <span className="text-orange-600 font-semibold">
                Today
              </span>

            </div>

            <div className="flex justify-between border-b pb-4">

              <p className="text-gray-700">
                15 new product orders received
              </p>

              <span className="text-orange-600 font-semibold">
                2 Hours Ago
              </span>

            </div>

            <div className="flex justify-between">

              <p className="text-gray-700">
                Platform revenue updated
              </p>

              <span className="text-orange-600 font-semibold">
                Yesterday
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AdminDashboard