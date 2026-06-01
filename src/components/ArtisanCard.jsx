function ArtisanCard({ artisan }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

      <img
        src={artisan.image}
        alt={artisan.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-semibold text-gray-800">
            {artisan.name}
          </h2>

          <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">
            Verified
          </span>

        </div>

        <p className="text-gray-600 mt-3">
          {artisan.category} • {artisan.location}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-yellow-500 font-medium">
            ⭐ {artisan.rating}
          </span>

          <button className="bg-orange-600 text-white px-5 py-2 rounded-xl hover:bg-orange-700 transition">
            View Profile
          </button>

        </div>

      </div>

    </div>
  )
}

export default ArtisanCard