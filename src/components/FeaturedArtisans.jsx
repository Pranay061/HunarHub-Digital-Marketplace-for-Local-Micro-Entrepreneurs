import artisans from "../data/artisans"
import ArtisanCard from "./ArtisanCard"

function FeaturedArtisans() {
  return (
    <section className="py-20 px-6 bg-[#fff7ef]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <h1 className="text-4xl font-bold text-gray-800">
            Featured Artisans
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Meet talented local entrepreneurs and skilled creators.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {artisans.map((artisan) => (
            <ArtisanCard
              key={artisan.id}
              artisan={artisan}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default FeaturedArtisans