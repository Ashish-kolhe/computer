import {
  GraduationCap,
  Users,
  FlaskConical,
  BriefcaseBusiness,
} from "lucide-react";
import PlacementChart from "./PlacementChart";
export default function Stats (){
    return(
<div>
    <section className="bg-white py-8">

  <div className="mx-auto max-w-7xl px-6">

    {/* Stats */}

    <div className="">

 <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-primary/10">

  <div className="flex flex-col items-center justify-center py-6 text-center">
    <div className="mb-3 rounded-full bg-primary/10 p-2.5">
      <GraduationCap className="h-5 w-5 text-primary" />
    </div>

    <h3 className="text-2xl text-black font-bold tracking-tight">
      700+
    </h3>

    <p className="mt-1 text-xs text-black/60">
      Students
    </p>
  </div>

  <div className="flex flex-col items-center justify-center py-6 text-center">
    <div className="mb-3 rounded-full bg-primary/10 p-2.5">
      <Users className="h-5 w-5 text-primary" />
    </div>

    <h3 className="text-2xl font-bold text-black tracking-tight">
      30+
    </h3>

    <p className="mt-1 text-xs text-black/60">
      Faculty Members
    </p>
  </div>

  <div className="flex flex-col items-center justify-center py-6 text-center">
    <div className="mb-3 rounded-full bg-primary/10 p-2.5">
      <FlaskConical className="h-5 w-5 text-primary" />
    </div>

    <h3 className="text-2xl font-bold text-black tracking-tight">
      12+
    </h3>

    <p className="mt-1 text-xs text-black/60">
      Modern Labs
    </p>
  </div>

  <div className="flex flex-col items-center justify-center py-6 text-center">
    <div className="mb-3 rounded-full bg-primary/10 p-2.5">
      <BriefcaseBusiness className="h-5 w-5 text-primary" />
    </div>

    <h3 className="text-2xl font-bold text-black tracking-tight">
      100%
    </h3>

    <p className="mt-1 text-xs text-black/60">
      Placement Assistance
    </p>
  </div>

</div>
</div>
  </div>

</section>
</div>

    );
}