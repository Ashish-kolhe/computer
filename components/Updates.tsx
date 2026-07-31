"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, X } from "lucide-react";

const updates = [
  {
    id: 1,
    category: "Award",
    title: "Best College Award",
    date: "10 February 2026",
    image: "/root/award.jpeg",
    shortDescription:
      "Over 300 students from various engineering colleges participated in the annual hackathon.",
    description:
      "The Department of Computer Engineering successfully organized the National Level Hackathon 2026. More than 300 students from different engineering colleges showcased innovative solutions in Artificial Intelligence, IoT, Cybersecurity, Cloud Computing, and Web Development. The event concluded with project demonstrations, expert evaluations, and prize distribution.",
  },
  {
    id: 2,
    category: "Hackathon",
    title: "ATC-SIH Internal Hackathon",
    date: "23 September 2025",
    image: "/root/sih.jpg",
    shortDescription:
      "nternal Hackathon organized by the Computer Department for Smart India Hackathon (SIH) 2025 on 23 September 2025.",
    description:
      "The event brought together student teams to present innovative solutions to real-world problems as part of the institute-level selection process for Smart India Hackathon (SIH) 2025.",
  },
  
  
];

export default function Updates() {
  const [selectedUpdate, setSelectedUpdate] = useState<
    (typeof updates)[number] | null
  >(null);

  return (
    <>
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-8">
            <p className="text-sm uppercase  text-primary font-semibold">
              Stay Updated
            </p>

           
          </div>

          <div
  className="
    flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-3
    lg:grid lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:snap-none
  "
>

            {updates.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedUpdate(item)}
                className="
  group
  cursor-pointer
  shrink-0
  snap-start
  w-full
  sm:w-[360px]
  lg:w-full
"
              >
                <div className="overflow-hidden rounded-2xl">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={390}
                    height={220}
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="pt-5">

                  <span className="badge badge-primary badge-sm rounded-full">
                    {item.category}
                  </span>

                  <h4 className="mt-3 text-xl text-black font-semibold leading-snug transition-colors group-hover:text-primary">
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-2 text-sm text-black/60 mt-3">
                    <CalendarDays size={15} />
                    {item.date}
                  </div>

                 
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Modal */}

      <dialog
        className={`modal ${selectedUpdate ? "modal-open" : ""}`}
      >
        <div className="modal-box max-w-4xl p-0">

          {selectedUpdate && (
            <>
              <div className="relative">

                <Image
                  src={selectedUpdate.image}
                  alt={selectedUpdate.title}
                  width={1000}
                  height={500}
                  className="w-full h-72 object-cover"
                />

                <button
                  onClick={() => setSelectedUpdate(null)}
                  className="btn btn-circle btn-sm absolute top-4 right-4"
                >
                  <X size={16} />
                </button>

              </div>

              <div className="p-8">

                <span className="badge badge-primary rounded-full">
                  {selectedUpdate.category}
                </span>

                <h2 className="font-heading text-4xl font-bold mt-4">
                  {selectedUpdate.title}
                </h2>

                <div className="flex items-center gap-2 text-base-content/60 mt-4">
                  <CalendarDays size={16} />
                  {selectedUpdate.date}
                </div>

                <p className="mt-8 leading-8 text-base-content/80">
                  {selectedUpdate.description}
                </p>

              </div>
            </>
          )}

        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setSelectedUpdate(null)}>close</button>
        </form>
      </dialog>
      </div>
    </>
  );
}