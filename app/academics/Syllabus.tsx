import { BookOpen, Download } from "lucide-react";

const syllabusData = [
  {
    id: 1,
    semester: "Semester I",
    year: "First Year Engineering",
    pdf: "/syllabus/sem1.pdf",
  },
  {
    id: 2,
    semester: "Semester II",
    year: "First Year Engineering",
    pdf: "/syllabus/sem2.pdf",
  },
  {
    id: 3,
    semester: "Semester III",
    year: "Second Year Computer Engineering",
    pdf: "/syllabus/sem3.pdf",
  },
  {
    id: 4,
    semester: "Semester IV",
    year: "Second Year Computer Engineering",
    pdf: "/syllabus/sem4.pdf",
  },
  {
    id: 5,
    semester: "Semester V",
    year: "Third Year Computer Engineering",
    pdf: "/syllabus/sem5.pdf",
  },
  {
    id: 6,
    semester: "Semester VI",
    year: "Third Year Computer Engineering",
    pdf: "/syllabus/sem6.pdf",
  },
  {
    id: 7,
    semester: "Semester VII",
    year: "Final Year Computer Engineering",
    pdf: "/syllabus/sem7.pdf",
  },
  {
    id: 8,
    semester: "Semester VIII",
    year: "Final Year Computer Engineering",
    pdf: "/syllabus/sem8.pdf",
  },
];

export default function Syllabus() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Computer Engineering Syllabus
          </h2>

          <p className="text-gray-600 mt-3">
            Download semester-wise syllabus in PDF format.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {syllabusData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 text-center"
            >
              <BookOpen
                size={50}
                className="mx-auto text-blue-700 mb-4"
              />

              <h3 className="text-xl font-bold text-gray-800">
                {item.semester}
              </h3>

              <p className="text-gray-500 mt-2 mb-6">
                {item.year}
              </p>

              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg transition"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}