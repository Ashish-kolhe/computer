import Image from "next/image";
export default function Page() {
    return (
        <div>
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Left Content */}
                        <div className="lg:col-span-2">
                            <span className="rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
                                About Department
                            </span>

                            

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We focus in imparting the core science underlying the computing aspects, so that students cope easily with today’s modern and upgrading technologies.
                            </p>

                            <p className="mt-4 text-gray-600 leading-7">
                                We also strive to bridge the theory- practice gap by applying continuous effort in teaching, learning and by periodically measuring the outcomes. The department inculcates technical, analytical and communication skills in students that would suffice for any job in the current challenging world. The Department provides suitable environment that enables students to follow their instincts of learning and doing innovative things.
                            </p>

                            <p className="mt-4 text-gray-600 leading-7">
                                The style and method of imparting education to students make them self-capable for life-long learning and ready for diversified carriers in IT Industry, Education, Research, Management and Entrepreneurship.
                            </p>

                            {/* Statistics */}
                            <div className="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-3">
                                <div className="rounded-xl bg-white p-6 text-center ">
                                    <h2 className="text-3xl font-bold text-purple-700">1500+</h2>
                                    <p className="mt-2 text-gray-600">Students</p>
                                </div>

                                <div className="rounded-xl bg-white p-6 text-center ">
                                    <h2 className="text-3xl font-bold text-purple-700">70+</h2>
                                    <p className="mt-2 text-gray-600">Faculty</p>
                                </div>

                                <div className="rounded-xl bg-white p-6 text-center ">
                                    <h2 className="text-3xl font-bold text-purple-700">100%</h2>
                                    <p className="mt-2 text-gray-600">Placement Assistance</p>
                                </div>
                            </div>
                        </div>

                        {/* Right HOD Card */}
                        <div>
                            <div className="rounded-2xl bg-white p-8 ">
                                <div className="flex flex-col items-center">
                                    <Image
                                        src="/root/Dean-photo.jpg"
                                        alt="HOD"
                                        width={220}
                                        height={220}
                                        className="rounded-xl object-cover"
                                    />

                                    <h2 className="mt-6 text-2xl font-bold text-gray-900">
                                        Dr. H.B. Jadhav
                                    </h2>

                                    <p className="text-purple-600 font-semibold text-center">
                                        Associate Professor & Head of Department 
                            
                                    </p>
                                </div>

                                <div className="mt-8 space-y-4 border-t pt-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Education</h4>
                                        <p className="text-gray-600">
                                            Ph.D (CSE), M.E. (CSE)
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800">Experience</h4>
                                        <p className="text-gray-600">18+ Years</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-600">098hodcomputer@gmail.com</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Mob:-
                                        </h4>
                                        <p className="text-gray-600">
                                            +91 9021814980
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Heading */}
                    <div className="text-center">
                        <span className="rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
                            Department Goals
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-gray-900">
                            Vision, Mission, PO & PSO
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            The Department of Computer Engineering is committed to producing
                            skilled engineers through quality education, innovation, and
                            industry-oriented learning.
                        </p>
                    </div>

                    {/* Vision & Mission */}
                    <div className="mt-12 grid gap-8 lg:grid-cols-2">
                        {/* Vision */}
                        <div className="rounded-2xl bg-white p-8   transition">
                            <div className="flex items-center gap-3">

                                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                            </div>

                            <p className="mt-6 leading-8 text-gray-600">
                                To strive for excellence in the field of Computer engineering through creative problem solving related to societal needs.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="rounded-2xl bg-white p-8 transition">
                            <div className="flex items-center gap-3">

                                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                            </div>

                            <ul className="mt-6 space-y-4 text-gray-600">
                                <li>M1:	Establish strong fundamentals, domain knowledge and skills among the students with analytical thinking, conceptual knowledge, social awareness, expertise in the latest tools and awareness to advanced software.</li>
                                <li>M2:	Establish leadership skills, team spirit and high ethical values among the students.</li>
                                <li>M3:	Guide students towards research and development, and a willingness to learn by connecting themselves to the global society.</li>
                                <li>M4:	Encourage students to become free-lancers.</li>

                            </ul>
                        </div>
                    </div>

                    {/* PO & PSO */}
                    <div className="mt-14 grid gap-8 lg:grid-cols-2">
                        {/* Program Specific Outcomes */}
                        <div className="rounded-2xl bg-white p-8 ">
                            <h3 className="mb-6 text-2xl font-bold text-purple-700">
                                Program Specific Outcomes (PSOs)
                            </h3>

                            <div className="space-y-4">
                                {[
                                    "Understand, plan, analyse, design and execution of buildings and infrastructures such as residential, public, industrial and irrigation structures, transportation facilities, powerhouses respectively.",
                                    "Make use of management tools, optimization and leadership techniques to complete the computer engineering projects within stipulated time and funds.",
                                    "Contribute to the society for sustainable development through environmental awareness and upholding professional ethics."

                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 rounded-lg border border-purple-100 bg-purple-50 p-4"
                                    >
                                        <span className="font-bold text-purple-700">
                                            PSO{index + 1}
                                        </span>

                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="rounded-2xl bg-white p-8 ">
                            <h3 className="mb-6 text-2xl font-bold text-purple-700">
                                Program  Educational Outcomes (PEO)
                            </h3>

                            <div className="space-y-4">
                                {[
                                    "To prepare globally competent graduates having strong fundamentals and domain knowledge to provide effective solutions for engineering problems.",
                                    "To prepare the graduates to work as committed professionals with strong professional ethics and values, sense of responsibilities, understanding of legal, safety, health, societal, cultural and environmental issues.",
                                    "To prepare committed and motivated graduates with research attitude, lifelong learning, investigative approach, and multidisciplinary thinking.",
                                    "To prepare the graduates with strong managerial and communication skills to work effectively as individual as well as in teams."
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 rounded-lg border border-purple-100 bg-purple-50 p-4"
                                    >
                                        <span className="font-bold text-purple-700">
                                            PEO{index + 1}
                                        </span>

                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                       
                    </div>
                    <div className="">
                         {/* Program  Outcomes */}
                        <div className="rounded-2xl bg-white p-8 s">
                            <h3 className="mb-6 text-2xl font-bold text-purple-700">
                                Program Outcomes (PO)
                            </h3>

                            <div className="space-y-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                                {[
                                    "Engineering Knowledge - Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",

                                    "Problem Analysis - Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",

                                    "Design/Development of Solutions - Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health, safety, cultural, societal, and environmental factors.",

                                    "Conduct Investigations of Complex Problems - Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.",

                                    "Modern Tool Usage - Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of their limitations.",

                                    "The Engineer and Society - Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to professional engineering practice.",

                                    "Environment and Sustainability - Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of sustainable development.",

                                    "Ethics - Apply ethical principles and commit to professional ethics, responsibilities, and norms of engineering practice.",

                                    "Individual and Team Work - Function effectively as an individual and as a member or leader in diverse teams and multidisciplinary settings.",

                                    "Communication - Communicate effectively on complex engineering activities with the engineering community and society at large through reports, presentations, documentation, and clear instructions.",

                                    "Project Management and Finance - Demonstrate knowledge and understanding of engineering and management principles and apply these to manage projects and work effectively in multidisciplinary environments.",

                                    "Life-long Learning - Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 rounded-lg border border-purple-100 bg-purple-50 p-4"
                                    >
                                        <span className="font-bold text-purple-700">
                                            PO{index + 1}
                                        </span>

                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}