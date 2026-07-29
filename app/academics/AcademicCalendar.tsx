import { CalendarDays, Clock3 } from "lucide-react";

const events = [
  {
    activity: "Semester Begins",
    date: "15 July 2026",
    status: "Upcoming",
  },
  {
    activity: "Internal Assessment - I",
    date: "10 September 2026",
    status: "Upcoming",
  },
  {
    activity: "Practical Examination",
    date: "20 November 2026",
    status: "Upcoming",
  },
  {
    activity: "End Semester Examination",
    date: "01 December 2026",
    status: "Upcoming",
  },
  {
    activity: "Result Declaration",
    date: "20 December 2026",
    status: "Pending",
  },
];

export default function AcademicCalendar() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            Academic Schedule
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
            Academic Calendar
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stay updated with semester activities, examinations,
            practicals and important academic events.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-blue-900 text-white">

                <tr>

                  <th className="px-8 py-5 text-left">
                    Activity
                  </th>

                  <th className="px-8 py-5 text-left">
                    Date
                  </th>

                  <th className="px-8 py-5 text-center">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {events.map((event, index) => (

                  <tr
                    key={index}
                    className="border-b hover:bg-blue-50 transition duration-300"
                  >

                    <td className="px-8 py-5">

                      <div className="flex items-center gap-3">

                        <CalendarDays
                          size={20}
                          className="text-blue-700"
                        />

                        <span className="font-medium text-slate-700">
                          {event.activity}
                        </span>

                      </div>

                    </td>

                    <td className="px-8 py-5">

                      <div className="flex items-center gap-2 text-gray-600">

                        <Clock3
                          size={18}
                          className="text-blue-600"
                        />

                        {event.date}

                      </div>

                    </td>

                    <td className="px-8 py-5 text-center">

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          event.status === "Upcoming"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {event.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  );
}