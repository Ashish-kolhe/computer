import Image from "next/image";
const recruiters = [
  "/company/tcs.png",
  "/company/infosys.png",
  "/company/wipro.png",
  "/company/as.png",
  "/company/cognizant.webp",
  "/company/cisco.png",
  "/company/tm.png",
 
];
export default function Row (){
    return(
        <div className="relative w-full overflow-hidden">
            <section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <p className="text-xs font-semibold uppercase  text-primary">
        Career Opportunities
      </p>

      <h2 className="font-heading text-black mt-3 text-2xl font-bold">
        Our Top Recruiters
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-black/60">
        Our students have been placed in leading technology companies across India.
      </p>

    </div>

    <div className="relative mt-14 overflow-hidden">

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-white to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-max animate-marquee gap-16">

        {[...recruiters, ...recruiters].map((logo, index) => (

          <div
            key={index}
            className="flex h-16 w-40 items-center justify-center"
          >
            <Image
              src={logo}
              alt=""
              width={120}
              height={50}
              className="h-10 w-auto object-contain "
            />
          </div>

        ))}

      </div>

    </div>

  </div>

</section>
        </div>
    );

}