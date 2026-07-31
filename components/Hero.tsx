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
    <section
      className="
    relative
    isolate
    w-full
    aspect-video
    min-h-[650px]
    overflow-hidden
    bg-black
  "
    >


      {/* ================= VIDEO BACKGROUND ================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
    "
      >
        <source src="/root/3.mp4" type="video/mp4" />
      </video>



      {/* VIDEO OVERLAY */}

      <div
        className="
      absolute
      inset-0
      bg-gradient-to-br
      from-black
      via-black/75
      to-black/35
    "
      />



      {/* ================= CONTENT ================= */}

      <div
        className="
      relative
      z-20
      flex
      h-full
      w-full
      items-center
    "
      >

        <div
          className="
        mx-auto
        w-full
        max-w-7xl
        px-5
        sm:px-8
        lg:px-12
      "
        >

          <div
            className="
          max-w-3xl
          pt-20
          lg:pt-0
        "
          >


            {/* ACCREDITATION */}

            <div className="mb-8 flex flex-wrap gap-3">


              <div
                className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-black
              backdrop-blur-md
            "
              >

                <Image
                  src="/root/nba.jpeg"
                  alt="NBA"
                  width={22}
                  height={22}
                />

                NBA Accredited

              </div>



              <div
                className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-black
              backdrop-blur-md
            "
              >

                <Image
                  src="/root/naac.png"
                  alt="NAAC"
                  width={22}
                  height={22}
                />

                NAAC B++

              </div>


            </div>





          




            <h2
              className="
            mt-3
            text-2xl
            font-semibold
            text-white
            sm:text-3xl
          "
            >
              Adsul's Technical Campus
            </h2>
  <p
              className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-white/70
            pt-3
          "
            >
              Department of
            </p>




            <h1
              className="
            mt-6
            font-heading
            text-5xl
            font-black
            leading-[0.88]
            tracking-tight
            text-white

            sm:text-6xl

            lg:text-8xl
          "
            >

              Computer

              <br />

              
                Engineering
             

            </h1>





            <p
              className="
            mt-8
            max-w-xl
            text-base
            leading-7
            text-white/80

            sm:text-lg
            sm:leading-8
          "
            >

              Building future-ready engineers through innovation,
              industry collaboration, research and hands-on learning.

            </p>





            <div className="mt-6">

              <Link
                href="/about"
                className="
              btn
              btn-wide
              bg-white
              text-black
              shadow-xl
              transition-all
              hover:bg-primary
              hover:text-white
            "
              >

                Explore Department

                <ArrowRight size={18} />

              </Link>


            </div>



          </div>


        </div>


      </div>





      {/* ================= WHITE BLENDING FADE ================= */}


    {/* ================= WHITE WAVE TRANSITION ================= */}

<div className="pointer-events-none absolute bottom-0 left-0 z-30 w-full overflow-hidden leading-[0]">

  <svg
    className="
      relative
      block
      h-[80px]
      w-full
      sm:h-[120px]
      lg:h-[150px] 
      scale-x-[-1]
    "
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    <path
  fill="white"
  d="
    M0,140
    C240,180 480,180 720,150
    C960,120 1200,120 1440,160
    L1440,220
    L0,220
    Z
  "
/>

  </svg>

</div>


    </section>
  );
}