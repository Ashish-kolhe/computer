const programs = [
  "Diploma",
  "B.Tech",
  "M.Tech",
  "PhD",
];

export default function Programs() {
  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-8">
          Programs
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {programs.map((program, index) => (

            <div
              key={index}
              className="shadow rounded-xl p-6 text-center"
            >
              {program}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}