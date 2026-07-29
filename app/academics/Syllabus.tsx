export default function Syllabus() {
  return (
    <section className="bg-white py-16">

      <h2 className="text-3xl font-bold text-center mb-8">
        Syllabus
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

        {[1,2,3,4,5,6,7,8].map((sem) => (

          <div
            key={sem}
            className="shadow rounded-xl p-6 text-center"
          >
            Semester {sem}
          </div>

        ))}

      </div>

    </section>
  );
}