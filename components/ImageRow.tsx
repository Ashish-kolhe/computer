"use client";

import Image from "next/image";

interface Props {
  images: string[];
  direction: "left" | "right";
  speed: "slow" | "normal" | "fast";
}

export default function ImageRow({
  images,
  direction,
  speed,
}: Props) {

  const duration = {
    slow: "35s",
    normal: "28s",
    fast: "22s",
  };

  return (
    <div className="relative overflow-hidden">

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex w-max gap-5"
        style={{
          animation: `${
            direction === "left"
              ? "marqueeLeft"
              : "marqueeRight"
          } ${duration[speed]} linear infinite`,
        }}
      >

        {[...images, ...images].map((image, index) => (

          <div
            key={index}
           className={`relative shrink-0 overflow-hidden rounded-2xl ${
  index % 2 === 0
    ? "h-40 w-60 md:h-44 md:w-64 lg:h-48 lg:w-72"
    : "h-44 w-64 md:h-48 md:w-72 lg:h-52 lg:w-80"
}`}
          >

            <Image
              src={image}
              alt=""
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />

          </div>

        ))}

      </div>

    </div>
  );
}