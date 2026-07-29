const events = [
  {
    activity: "Semester Start",
    date: "15 July 2026",
  },
  {
    activity: "Internal Exam",
    date: "10 Sept 2026",
  },
  {
    activity: "Practical Exam",
    date: "20 Nov 2026",
  },
  {
    activity: "End Semester Exam",
    date: "1 Dec 2026",
  },
];

export default function AcademicCalendar() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-5">

      <h2 className="text-3xl font-bold mb-8">
        Academic Calendar
      </h2>

      <table className="w-full bg-white shadow">

        <thead className="bg-blue-900 text-white">

          <tr>
            <th className="p-4">Activity</th>
            <th className="p-4">Date</th>
          </tr>

        </thead>

        <tbody>

          {events.map((event, index) => (

            <tr key={index} className="border">

              <td className="p-4">
                {event.activity}
              </td>

              <td className="p-4">
                {event.date}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}