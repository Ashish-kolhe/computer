const programs = [
  {
    title: "Diploma",
    duration: "3 Years",
    eligibility: "10th Pass",
    icon: "🎓",
  },
  {
    title: "B.Tech",
    duration: "4 Years",
    eligibility: "12th (PCM)",
    icon: "🏫",
  },
  {
    title: "M.Tech",
    duration: "2 Years",
    eligibility: "B.E./B.Tech",
    icon: "📘",
  },
  {
    title: "Ph.D.",
    duration: "3-5 Years",
    eligibility: "M.Tech / M.E.",
    icon: "🔬",
  },
];

export default function Programs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Programs Offered
          </h2>
          <p className="text-gray-600 mt-3">
            Explore our undergraduate, postgraduate and research programs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 text-center"
            >
              <div className="text-5xl mb-4">
                {program.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                {program.title}
              </h3>

              <p className="mt-3 text-gray-600">
                <strong>Duration:</strong> {program.duration}
              </p>

              <p className="mt-2 text-gray-600">
                <strong>Eligibility:</strong> {program.eligibility}
              </p>

              <button className="mt-6 bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                Apply Now
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}