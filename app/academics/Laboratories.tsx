export default function Laboratories() {
  const labs = [
    "Programming Lab",
    "Networking Lab",
    "Cloud Lab",
    "AI Lab",
    "Database Lab",
    "Project Lab",
  ];

  return (
    <section className="bg-white py-16">

      <h2 className="text-3xl font-bold text-center mb-8">
        Laboratories
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        {labs.map((lab, index) => (

          <div
            key={index}
            className="shadow rounded-xl p-6"
          >
            {lab}
          </div>

        ))}

      </div>

    </section>
  );
}