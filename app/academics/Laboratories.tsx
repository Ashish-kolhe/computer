// export default function Laboratories() {
//   const labs = [
//     "Programming Lab",
//     "Networking Lab",
//     "Cloud Lab",
//     "AI Lab",
//     "Database Lab",
//     "Project Lab",
//   ];

//   return (
//     <section className="bg-white py-16">

//       <h2 className="text-3xl font-bold text-center mb-8">
//         Laboratories
//       </h2>

//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

//         {labs.map((lab, index) => (

//           <div
//             key={index}
//             className="shadow rounded-xl p-6"
//           >
//             {lab}
//           </div>

//         ))}

//       </div>

//     </section>
//   );
// }

const labs = [
  {
    name: "Programming Lab",
    icon: "💻",
    description: "Equipped with modern computers for programming and software development.",
    facilities: "C, C++, Java, Python, VS Code",
  },
  {
    name: "Networking Lab",
    icon: "🌐",
    description: "Hands-on networking practice with routers, switches, and servers.",
    facilities: "Cisco Routers, Switches, LAN Setup",
  },
  {
    name: "Cloud Computing Lab",
    icon: "☁️",
    description: "Learn cloud technologies and virtualization platforms.",
    facilities: "AWS, Azure, VirtualBox",
  },
  {
    name: "Artificial Intelligence Lab",
    icon: "🤖",
    description: "Build AI and Machine Learning models using modern tools.",
    facilities: "Python, TensorFlow, Jupyter",
  },
  {
    name: "Database Lab",
    icon: "🗄️",
    description: "Practice SQL queries and database management systems.",
    facilities: "MySQL, MongoDB, Oracle",
  },
  {
    name: "Project Lab",
    icon: "🚀",
    description: "Dedicated space for final-year projects and innovation.",
    facilities: "IoT Kits, Raspberry Pi, Arduino",
  },
];

export default function Laboratories() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Laboratories
          </h2>
          <p className="mt-3 text-gray-600">
            State-of-the-art laboratories with modern equipment and software.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {labs.map((lab, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6"
            >
              <div className="text-5xl mb-4">{lab.icon}</div>

              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                {lab.name}
              </h3>

              <p className="text-gray-600 mb-4">
                {lab.description}
              </p>

              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-gray-700">
                  Facilities
                </p>
                <p className="text-gray-500 mt-1">
                  {lab.facilities}
                </p>
              </div>

              <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Explore Lab
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}