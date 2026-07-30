"use client"
import {
    ArrowRight,
    BadgeCheck,
    BookOpen,
    BriefcaseBusiness,
    Building2,
    GraduationCap,
    Lightbulb,
    Calendar,
    CalendarDays,
    Download, FileText
} from "lucide-react";
const highlights = [
    {
        title: "Outcome Based Education",
        description:
            "Curriculum focused on measurable learning outcomes and continuous improvement.",
        icon: GraduationCap,
    },
    {
        title: "Industry Focused",
        description:
            "Regular workshops, guest lectures and industry interaction.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Project Based Learning",
        description:
            "Students solve practical problems through real-world projects.",
        icon: Lightbulb,
    },
    {
        title: "Modern Infrastructure",
        description:
            "Well-equipped laboratories with latest software and computing facilities.",
        icon: Building2,
    },
];
const academicCalendar = [
    {
        month: "July",
        title: "Commencement of Academic Year",
        description: "Orientation program and beginning of classes.",
    },
    {
        month: "August",
        title: "Regular Academic Sessions",
        description: "Theory classes, practical sessions and assignments.",
    },
    {
        month: "September",
        title: "Internal Assessment I",
        description: "Continuous assessment and practical evaluations.",
    },
    {
        month: "October",
        title: "Technical Activities",
        description: "Workshops, seminars and departmental events.",
    },
    {
        month: "November",
        title: "Mid Semester Examination",
        description: "University prescribed internal examinations.",
    },
    {
        month: "December",
        title: "Semester End Examination",
        description: "Practical and theory examinations.",
    },
];
const timeTables = [
    {
        year: "Second Year (SE)",
        semester: "Semester III & IV",
        file: "/root/timetable.pdf",
    },
    {
        year: "Third Year (TE)",
        semester: "Semester V & VI",
        file: "/root/timetable.pdf",
    },
    {
        year: "Final Year (BE)",
        semester: "Semester VII & VIII",
        file: "/root/timetable.pdf",
    },
];
export default function Page() {
    return (
        <div>



            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            Academic Calendar
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-gray-900">
                            Important Academic Timeline
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
                            A snapshot of the academic schedule followed by the department.
                            Dates may vary according to the university calendar.
                        </p>

                    </div>

                    <div className="mt-16 space-y-6">

                        {academicCalendar.map((item) => (

                            <div
                                key={item.month}
                                className="flex flex-col gap-6 rounded-3xl border p-6 transition hover:border-primary md:flex-row md:items-center"
                            >

                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-50">

                                    <CalendarDays className="h-9 w-9 text-primary" />

                                </div>

                                <div className="w-full">

                                    <div className="flex flex-wrap items-center justify-between gap-3">

                                        <h3 className="text-xl text-black font-semibold">
                                            {item.title}
                                        </h3>

                                        <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                                            {item.month}
                                        </span>

                                    </div>

                                    <p className="mt-3 leading-7 text-gray-600">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>
            <section className="bg-purple-50 py-24">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Heading */}

                    <div className="text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            Time Table
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-gray-900">
                            Class Time Tables
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                            Download the latest class timetable for your academic year.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid gap-8 md:grid-cols-3">

                        {timeTables.map((item) => (

                            <div
                                key={item.year}
                                className="rounded-3xl border bg-white p-8 transition hover:-translate-y-1 hover:border-primary"
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">

                                    <FileText className="h-8 w-8 text-primary" />

                                </div>

                                <h3 className="mt-8 text-black text-2xl font-bold">
                                    {item.year}
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    {item.semester}
                                </p>

                                <a
                                    href={item.file}
                                    download
                                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
                                >
                                    <Download className="h-5 w-5" />

                                    Download PDF
                                </a>

                            </div>

                        ))}

                    </div>

                </div>
            </section>
        </div>
    );
}