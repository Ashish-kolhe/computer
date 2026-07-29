// export default function Hero() {
//   return (
//     <section className="bg-blue-700 text-white py-24 text-center">
//       <h1 className="text-5xl font-bold">
//         Academics
//       </h1>

//       <p className="mt-4">
//         Excellence in Engineering Education
//       </p>
//     </section>
//   );
// }

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            Academics
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Excellence in <br />
            Engineering Education
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            Our academic programs are designed to develop technical knowledge,
            innovation, leadership, and industry-ready skills through
            experienced faculty, modern laboratories, and research-driven
            learning.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Explore Programs
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700"
            alt="Engineering College"
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}