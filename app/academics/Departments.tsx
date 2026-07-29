const departments = [
  "Computer Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "AI & DS",
];

export default function Departments() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-5">

      <h2 className="text-3xl font-bold mb-8">
        Departments
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {departments.map((dept, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h3 className="font-bold">
              {dept}
            </h3>
          </div>

        ))}

      </div>

    </section>
  );
}