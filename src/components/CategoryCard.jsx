function CategoryCard({ title, icon, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">

      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">
        {title}
      </h2>

      <p className="text-gray-600 mt-3 leading-relaxed">
        {description}
      </p>

    </div>
  )
}

export default CategoryCard