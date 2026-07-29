
import Hero from "./Hero";
import Programs from "./Programs";
import AcademicCalendar from "./AcademicCalendar";
import Syllabus from "./Syllabus";
import Laboratories from "./Laboratories";
import Downloads from "./Downloads";
export default function Page() {
    return (
        <div>
              <>
      <Hero />
      <Programs />
      <AcademicCalendar />
      <Syllabus />
      <Laboratories />
      <Downloads />
    </>
        </div>
    );
}