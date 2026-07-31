import Link from "next/link";
import {
  GraduationCap,
  CheckCircle2,
  FileText,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Page() {
  const eligibility = [
    "Passed HSC (10+2) examination with Physics and Mathematics as compulsory subjects.",
    "Obtained the minimum qualifying marks as prescribed by the Government of Maharashtra / Competent Authority.",
    "Valid MHT-CET or JEE Main score (as applicable).",
  ];

  const documents = [
    "SSC & HSC Mark Sheets",
    "Leaving / Transfer Certificate",
    "MHT-CET / JEE Score Card",
    "Domicile Certificate",
    "Caste Certificate (if applicable)",
    "Passport Size Photographs",
  ];

  return (
    <div>

      {/* Hero */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Admissions
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Join the Department of Computer Engineering
          </h1>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Begin your journey towards a successful career in technology with
            quality education, experienced faculty, and industry-oriented
            learning.
          </p>

        </div>
      </section>

      {/* Eligibility & Documents */}

      <section className="bg-white pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-gray-100 p-8">

            <div className="flex items-center gap-3">
              <GraduationCap className="text-primary" />
              <h2 className="text-2xl font-bold">
                Eligibility
              </h2>
            </div>

            <div className="mt-8 space-y-5">
              {eligibility.map((item) => (
                <div
                  key={item}
                  className="flex gap-3"
                >
                  <CheckCircle2
                    className="mt-1 text-primary"
                    size={18}
                  />

                  <p className="text-gray-600 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="rounded-2xl border border-gray-100 p-8">

            <div className="flex items-center gap-3">
              <FileText className="text-primary" />
              <h2 className="text-2xl font-bold">
                Required Documents
              </h2>
            </div>

            <div className="mt-8 space-y-5">
              {documents.map((item) => (
                <div
                  key={item}
                  className="flex gap-3"
                >
                  <ArrowRight
                    className="mt-1 text-primary"
                    size={18}
                  />

                  <p className="text-gray-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Admission Process */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Admission Process
            </span>

            <h2 className="mt-4 text-4xl text-black font-bold">
              Simple Admission Process
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {[
              "Appear for MHT-CET / JEE Main",
              "Participate in CAP Counselling",
              "Select Adsul's Technical Campus",
              "Complete Document Verification & Admission",
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 p-8 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {index + 1}
                </div>

                <p className="mt-5 text-gray-700 leading-7">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Contact */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-gray-100 p-10">

          <div className="text-center">

            <h2 className="text-3xl text-black font-bold">
              Need Admission Assistance?
            </h2>

            <p className="mt-3 text-gray-600">
              Contact the Department for admission guidance and counselling.
            </p>

          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <div className="flex gap-4">

              <Phone className="text-primary" />

              <div>

                <h4 className="font-semibold">
                  Phone
                </h4>

                <a
                  href="tel:+919021814980"
                  className="text-gray-600 hover:text-primary"
                >
                  +91 9021814980
                </a>

              </div>

            </div>

            <div className="flex gap-4">

              <Mail className="text-primary" />

              <div>

                <h4 className="font-semibold">
                  Email
                </h4>

                <a
                  href="mailto:098hodcomputer@gmail.com"
                  className="text-gray-600 hover:text-primary"
                >
                  098hodcomputer@gmail.com
                </a>

              </div>

            </div>

          </div>

          <div className="mt-10 text-center">

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-medium"
            >
              Contact Department
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}