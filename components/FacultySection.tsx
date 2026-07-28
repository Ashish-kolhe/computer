"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faculty = [
  {
    id: 1,
    name: "Dr. H.B.Jadhav",
    designation: "Head of Department",
    image: "/root/Sir.png",
  },
  {
    id: 2,
    name: "Dr. M.B.Jadhav",
    designation: "Associate Professor",
    image: "/root/Madam.png",
  },
  {
    id: 3,
    name: "Mr. S.D.Bhondve",
    designation: "Assistant Professor",
    image: "/root/Sir.png",
  },
  {
    id: 4,
    name: "Miss. P.B.Chandane",
    designation: "Assistant Professor",
    image: "/root/Madam.png",
  },
  {
    id: 5,
    name: "Mr. S.S.Medhe",
    designation: "Assistant Professor",
    image: "/root/Sir.png",
  },
];

const facultyList = [...faculty, ...faculty];

export default function FacultySection() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
    <section className="py-16 bg-white overflow-hidden ">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 flex items-end justify-between">

          <div>
            <p className="text-sm uppercase text-primary font-semibold">
              Our Faculty
            </p>

            
          </div>

          <Link
            href="/faculty"
            className="btn btn-ghost text-black shadow-none border-none hover:bg-white hover:text-primary "
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

      <div className="faculty-marquee">

        <div className="faculty-track">

          {facultyList.map((member, index) => (

            <div
              key={`${member.id}-${index}`}
              className="faculty-card"
            >

              <Image
                src={member.image}
                alt={member.name}
                width={170}
                height={170}
                className="h-40 w-40 rounded-full object-cover"
              />

              <h3 className="mt-5 text-lg font-semibold text-black text-center">
                {member.name}
              </h3>

              <p className="text-sm text-black/60 text-center">
                {member.designation}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
    </div>
  );
}