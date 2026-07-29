"use client";

type PlacementStudent = {
  id: number;
  name: string;
  company: string;
  role: string;
  package: number;
};

type TopPerformer = {
  id: number;
  name: string;
  company: string;
  package: number;
  year: string;
  image: string;
};

type AcademicYear = {
  year: string;
  totalStudents: number;
  placedStudents: number;
  placementPercentage: number;
  highestPackage: number;
  averagePackage: number;
  companies: number;
  students: PlacementStudent[];
};

/* =========================================================
   TOP PERFORMERS
========================================================= */

const topPerformers: TopPerformer[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    company: "Microsoft",
    package: 18,
    year: "2025–26",
    image: "/root/Sir.png",
  },
  {
    id: 2,
    name: "Priya Patil",
    company: "Amazon",
    package: 16,
    year: "2025–26",
    image: "/root/Madam.png",
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    company: "Google",
    package: 14,
    year: "2024–25",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    company: "Infosys",
    package: 12,
    year: "2024–25",
    image: "https://i.pravatar.cc/300?img=44",
  },
  {
    id: 5,
    name: "Aditya Jadhav",
    company: "TCS",
    package: 11,
    year: "2023–24",
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    id: 6,
    name: "Neha Shinde",
    company: "Accenture",
    package: 10,
    year: "2023–24",
    image: "https://i.pravatar.cc/300?img=45",
  },
];

/* =========================================================
   2025–26 DATA
========================================================= */

const placement2025_26: PlacementStudent[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    company: "Microsoft",
    role: "Software Engineer",
    package: 18,
  },
  {
    id: 2,
    name: "Priya Patil",
    company: "Amazon",
    role: "Software Developer",
    package: 16,
  },
  {
    id: 3,
    name: "Rahul More",
    company: "Infosys",
    role: "System Engineer",
    package: 9,
  },
  {
    id: 4,
    name: "Sneha Joshi",
    company: "TCS",
    role: "Graduate Engineer",
    package: 8,
  },
];

/* =========================================================
   2024–25 DATA
========================================================= */

const placement2024_25: PlacementStudent[] = [
  {
    id: 1,
    name: "Rohan Deshmukh",
    company: "Google",
    role: "Software Engineer",
    package: 14,
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    company: "Infosys",
    role: "Technology Analyst",
    package: 12,
  },
  {
    id: 3,
    name: "Akash Pawar",
    company: "Accenture",
    role: "Associate Software Engineer",
    package: 8,
  },
];

/* =========================================================
   2023–24 DATA
========================================================= */

const placement2023_24: PlacementStudent[] = [
  {
    id: 1,
    name: "Aditya Jadhav",
    company: "TCS",
    role: "Software Developer",
    package: 11,
  },
  {
    id: 2,
    name: "Neha Shinde",
    company: "Accenture",
    role: "Application Developer",
    package: 10,
  },
  {
    id: 3,
    name: "Vishal Patil",
    company: "Wipro",
    role: "Project Engineer",
    package: 7,
  },
];

/* =========================================================
   2022–23 DATA
========================================================= */

const placement2022_23: PlacementStudent[] = [
  {
    id: 1,
    name: "Siddharth More",
    company: "Cognizant",
    role: "Programmer Analyst",
    package: 9,
  },
  {
    id: 2,
    name: "Pooja Shinde",
    company: "Capgemini",
    role: "Software Engineer",
    package: 8,
  },
];

/* =========================================================
   2021–22 DATA
========================================================= */

const placement2021_22: PlacementStudent[] = [
  {
    id: 1,
    name: "Kunal Jadhav",
    company: "Infosys",
    role: "System Engineer",
    package: 7,
  },
  {
    id: 2,
    name: "Anjali Patil",
    company: "TCS",
    role: "Assistant System Engineer",
    package: 6.5,
  },
];

/* =========================================================
   2020–21 DATA
========================================================= */

const placement2020_21: PlacementStudent[] = [
  {
    id: 1,
    name: "Amit Deshmukh",
    company: "Wipro",
    role: "Project Engineer",
    package: 6,
  },
  {
    id: 2,
    name: "Snehal More",
    company: "Cognizant",
    role: "Programmer Analyst",
    package: 5.5,
  },
];

/* =========================================================
   2019–20 DATA
========================================================= */

const placement2019_20: PlacementStudent[] = [
  {
    id: 1,
    name: "Vivek Patil",
    company: "TCS",
    role: "System Engineer",
    package: 5,
  },
  {
    id: 2,
    name: "Rutuja Jadhav",
    company: "Infosys",
    role: "System Engineer",
    package: 4.5,
  },
];

/* =========================================================
   ACADEMIC YEAR DATA
========================================================= */

const academicYears: AcademicYear[] = [
  {
    year: "2025–26",
    totalStudents: 120,
    placedStudents: 108,
    placementPercentage: 90,
    highestPackage: 18,
    averagePackage: 7.8,
    companies: 32,
    students: placement2025_26,
  },
  {
    year: "2024–25",
    totalStudents: 115,
    placedStudents: 99,
    placementPercentage: 86,
    highestPackage: 14,
    averagePackage: 7.2,
    companies: 28,
    students: placement2024_25,
  },
  {
    year: "2023–24",
    totalStudents: 110,
    placedStudents: 92,
    placementPercentage: 84,
    highestPackage: 11,
    averagePackage: 6.8,
    companies: 25,
    students: placement2023_24,
  },
  {
    year: "2022–23",
    totalStudents: 105,
    placedStudents: 84,
    placementPercentage: 80,
    highestPackage: 9,
    averagePackage: 6.1,
    companies: 22,
    students: placement2022_23,
  },
  {
    year: "2021–22",
    totalStudents: 100,
    placedStudents: 76,
    placementPercentage: 76,
    highestPackage: 7,
    averagePackage: 5.6,
    companies: 20,
    students: placement2021_22,
  },
  {
    year: "2020–21",
    totalStudents: 95,
    placedStudents: 68,
    placementPercentage: 72,
    highestPackage: 6,
    averagePackage: 5.1,
    companies: 18,
    students: placement2020_21,
  },
  {
    year: "2019–20",
    totalStudents: 90,
    placedStudents: 60,
    placementPercentage: 67,
    highestPackage: 5,
    averagePackage: 4.5,
    companies: 16,
    students: placement2019_20,
  },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Page() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      


      {/* =====================================================
          TOP PERFORMERS
      ====================================================== */}

      <section className="overflow-hidden py-20">

        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
            Student Achievements
          </p>

          <h2 className="mt-3 text-4xl font-bold text-primary">
            Our Top Performers
          </h2>

          <p className="mt-3 text-slate-500">
            Celebrating students who achieved excellence
            in campus placements.
          </p>
        </div>


        {/* Horizontal Infinite Scroll */}

        <div className="mt-12 overflow-hidden">

          <div className="flex w-max gap-6 animate-[placementScroll_35s_linear_infinite] hover:[animation-play-state:paused]">

            {[...topPerformers, ...topPerformers].map(
              (student, index) => (
                <div
                  key={`${student.id}-${index}`}
                  className="w-[270px] shrink-0 rounded-3xl  bg-white p-6 text-center  transition hover:-translate-y-2 "
                >

                  {/* Student Photo */}

                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full  ">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="h-full w-full object-cover"
                    />
                  </div>


                  {/* Package */}

                  <div className="mt-6">
                    <p className="text-3xl font-bold text-slate-900">
                      ₹{student.package} LPA
                    </p>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Package
                    </p>
                  </div>


                  {/* Student Name */}

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {student.name}
                  </h3>


                  {/* Company */}

                  <p className="mt-1 text-sm text-slate-500">
                    {student.company}
                  </p>


                  {/* Year */}

                  <span className="mt-4 inline-block rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
                    {student.year}
                  </span>

                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          OVERALL PLACEMENT SUMMARY
      ====================================================== */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl  bg-white p-8 ">

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                Placement Overview
              </p>

              <h2 className="mt-2 text-3xl text-primary font-bold">
                Our Placement Journey
              </h2>
            </div>


            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Highest Package",
                  value: "₹18 LPA",
                },
                {
                  title: "Average Package",
                  value: "₹7.8 LPA",
                },
                {
                  title: "Students Placed",
                  value: "108+",
                },
                {
                  title: "Recruiting Companies",
                  value: "32+",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6"
                >
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <p className="mt-3 text-3xl font-bold text-slate-900">
                    {item.value}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          YEAR-WISE PLACEMENT RECORDS
      ====================================================== */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
              Historical Data
            </p>

            <h2 className="mt-3 text-4xl font-bold text-primary">
          
              Placement Records
            </h2>

          </div>


          {/* 2025–26 → 2019–20 */}

          {academicYears.map((academicYear) => (

            <div
              key={academicYear.year}
              className="mb-16"
            >

              {/* Year Header */}

              <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">

                <div>
                  <p className="text-sm font-medium text-black">
                    Academic Year
                  </p>

                  <h3 className="mt-1 text-3xl font-bold text-primary">
                    {academicYear.year}
                  </h3>
                </div>


                <div className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">
                  {academicYear.placementPercentage}% Placement
                </div>

              </div>


              {/* Statistics */}

              <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-5">

                {[
                  {
                    label: "Total Students",
                    value: academicYear.totalStudents,
                  },
                  {
                    label: "Students Placed",
                    value: academicYear.placedStudents,
                  },
                  {
                    label: "Highest Package",
                    value: `₹${academicYear.highestPackage} LPA`,
                  },
                  {
                    label: "Average Package",
                    value: `₹${academicYear.averagePackage} LPA`,
                  },
                  {
                    label: "Companies",
                    value: academicYear.companies,
                  },
                ].map((stat) => (

                  <div
                    key={stat.label}
                    className="rounded-2xl  bg-white p-5"
                  >
                    <p className="text-xs font-medium text-slate-500">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>

                  </div>

                ))}

              </div>


              {/* Placement Table */}

              <div className="overflow-hidden rounded-3xl ">

                <div className="overflow-x-auto">

                  <table className="w-full min-w-[700px]">

                    <thead>

                      <tr className="border-b border-slate-200 bg-slate-50">

                        <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                          Student
                        </th>

                        <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                          Company
                        </th>

                        <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                          Role
                        </th>

                        <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                          Package
                        </th>

                      </tr>

                    </thead>


                    <tbody className="divide-y divide-slate-100">

                      {academicYear.students.map(
                        (student) => (

                          <tr
                            key={student.id}
                            className="transition hover:bg-slate-50"
                          >

                            <td className="px-6 py-5">

                              <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                  {student.name.charAt(0)}
                                </div>

                                <span className="font-semibold text-slate-800">
                                  {student.name}
                                </span>

                              </div>

                            </td>


                            <td className="px-6 py-5 font-medium text-slate-600">
                              {student.company}
                            </td>


                            <td className="px-6 py-5 text-slate-500">
                              {student.role}
                            </td>


                            <td className="px-6 py-5 text-right">

                              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-900">
                                ₹{student.package} LPA
                              </span>

                            </td>

                          </tr>

                        )
                      )}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

     

      {/* =====================================================
          INFINITE SCROLL ANIMATION
      ====================================================== */}

      <style jsx>{`
        @keyframes placementScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </main>
  );
}