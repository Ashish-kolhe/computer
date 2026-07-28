import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
  <section className="relative overflow-hidden bg-white">

    <div className="mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-8 lg:grid-cols-2 lg:gap-20">

      {/* ---------------- LEFT ---------------- */}

      <div className="relative lg:-mt-20 z-30 max-w-xl">

        {/* Accreditation */}

        <div className="mb-8 flex flex-wrap gap-3">

          <div className="badge gap-2 rounded-full bg-white text-black px-5 py-4">
            <Image
              src="/root/nba.jpeg"
              alt="NBA"
              width={22}
              height={22}
            />
            NBA Accredited
          </div>

          <div className="badge gap-2 rounded-full bg-white text-black px-5 py-4">
            <Image
              src="/root/naac.png"
              alt="NAAC"
              width={22}
              height={22}
            />
            NAAC B++
          </div>

        </div>

        

        <h2 className="mt-2 text-2xl font-semibold text-zinc-800">
          Adsul's Technical Campus
        </h2>
<p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
          Department of
        </p>
        <h1 className="font-heading text-black mt-6 text-5xl font-black leading-[0.9] tracking-tight lg:text-7xl">
          Computer
          <br />
          <span className="text-primary">
            Engineering
          </span>
        </h1>

        <p className="mt-8 max-w-lg text-md leading-8 text-zinc-500">
          Building future-ready engineers through innovation,
          industry collaboration, research and hands-on learning.
        </p>

        <div className="mt-10">
          <Link
            href="/about"
            className="btn bg-white shadow-none text-black hover:bg-white hover:text-primary btn-wide"
          >
            Explore Department
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>

      {/* ---------------- RIGHT ---------------- */}

      <div className="relative h-[430px] sm:h-[520px] lg:h-[650px]">

        {/* Desktop fade */}

        <div className="absolute -left-28 top-0 z-20 hidden h-full w-56 bg-gradient-to-r from-white via-white/10 to-transparent lg:block" />

        {/* Mobile fade */}

        <div className="absolute bottom-0 left-0 z-20 h-24 w-full bg-gradient-to-b from-transparent via-white/40 to-white lg:hidden" />

        <div className="grid h-full grid-cols-4 grid-rows-6 gap-[6px]">

          {/* 1 */}

          <div className="col-span-2 row-span-3 overflow-hidden rounded-3xl">
            <Image
              src="/root/One.png"
              alt=""
              width={700}
              height={900}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* 2 */}

          <div className=" overflow-hidden rounded-3xl">
            <Image
              src="/root/Two.png"
              alt=""
              width={400}
              height={400}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* 3 */}

          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/root/Three.png"
              alt=""
              width={400}
              height={400}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* 4 */}

          <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
            <Image
              src="/root/Four.png"
              alt=""
              width={700}
              height={500}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* 5 */}

          <div className=" col-span-2 overflow-hidden rounded-3xl">
            <Image
              src="/root/One.png"
              alt=""
              width={400}
              height={400}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* 6 */}

          <div className="row-span-1 col-span-2  overflow-hidden rounded-3xl">
            <Image
              src="/root/Two.png"
              alt=""
              width={400}
              height={700}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* 7 */}

          <div className="col-span-1 overflow-hidden rounded-3xl">
            <Image
              src="/root/Three.png"
              alt=""
              width={700}
              height={400}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* 8 */}

          <div className="row-span-1 col-span-3 overflow-hidden rounded-3xl">
            <Image
              src="/root/Four.png"
              alt=""
              width={400}
              height={400}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>

      </div>

    </div>

  </section>
);
}