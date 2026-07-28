import Image from "next/image";
import Hero from "@/components/Hero";
import Updates from "@/components/Updates";
import FacultySection from "@/components/FacultySection";
import Stats from "@/components/Stats";
import PlacementChart from "@/components/PlacementChart";
import Row from "@/components/Row";
import LifeAtATC from "@/components/LifeAtAtc";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans ">
      <Hero/>
      <Updates/>
      <FacultySection/>
      <PlacementChart/>
      <Stats/>
      <Row/>
<LifeAtATC/>
    </div>
  );
}
