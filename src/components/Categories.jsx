import CategoryCard from "./CategoryCard"

function Categories() {

  const categories = [
    {
      title: "Potters",
      icon: "🏺",
      description:
        "Traditional pottery and handmade clay craftsmanship.",
    },
    {
      title: "Tailors",
      icon: "🧵",
      description:
        "Custom stitching and local tailoring services.",
    },
    {
      title: "Cobblers",
      icon: "👞",
      description:
        "Professional shoe repair and leather craftsmanship.",
    },
    {
      title: "Artisans",
      icon: "🎨",
      description:
        "Unique handmade art and creative products.",
    },
  ]

  return (
    <section id="categories" className="py-20 px-6 bg-[#fffaf5]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <h1 className="text-4xl font-bold text-gray-800">
            Explore Categories
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Discover talented local professionals and traditional skills.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              icon={category.icon}
              description={category.description}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Categories