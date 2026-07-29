// export default function Downloads() {
//   return (
//     <section className="max-w-7xl mx-auto py-16 text-center">

//       <h2 className="text-3xl font-bold mb-8">
//         Downloads
//       </h2>

//       <div className="flex justify-center gap-4 flex-wrap">

//         <button className="bg-blue-900 text-white px-5 py-2 rounded">
//           Academic Calendar
//         </button>

//         <button className="bg-blue-900 text-white px-5 py-2 rounded">
//           Syllabus
//         </button>

//         <button className="bg-blue-900 text-white px-5 py-2 rounded">
//           Time Table
//         </button>

//       </div>

//     </section>
//   );
// }

const downloads = [
  {
    title: "Academic Calendar",
    icon: "📅",
    description: "Download the latest academic calendar for the current academic year.",
  },
  {
    title: "Syllabus",
    icon: "📚",
    description: "Semester-wise syllabus for all engineering programs.",
  },
  {
    title: "Time Table",
    icon: "🕒",
    description: "Class timetable for all departments and semesters.",
  },
  {
    title: "Question Papers",
    icon: "📝",
    description: "Previous year university question papers.",
  },
  {
    title: "Exam Schedule",
    icon: "📄",
    description: "Mid-semester and end-semester examination schedule.",
  },
  {
    title: "Holiday List",
    icon: "🎉",
    description: "Official list of holidays for the academic year.",
  },
];

export default function Downloads() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Downloads
          </h2>

          <p className="mt-3 text-gray-600">
            Access important academic documents and resources.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {downloads.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 text-center"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-blue-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.description}
              </p>

              <button className="mt-6 w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Download PDF
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}