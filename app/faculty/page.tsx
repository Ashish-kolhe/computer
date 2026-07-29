const facultyData = [
    {
        id: 1,
        name: "Dr. H.B. Jadhav",
        designation: "HOD & Associate Professor",
        education: "PhD (CSE)",
        image: "/root/Dean-Photo.jpg",
    },
    {
        id: 2,
        name: "Dr. V.V. Gaike",
        designation: "Associate Professor",
        education: "PhD (CSE)",
        image: "/faculty/Gaike.png",
    },
    {
        id: 3,
        name: "Dr. M.B. Jadhav",
        designation: "Associate Professor",
        education: "PhD (CSE)",
        image: "/faculty/JadhavMB.jpg",
    },
    {
        id: 4,
        name: "Dr. J.K. Shimpi",
        designation: "Assistant Professor",
        education: "PhD (CSE)",
        image: "/root/Sir.png",
    },
    {
        id: 5,
        name: "Mr. S.D. Bhondve",
        designation: "Assistant Professor",
        education: "ME (CSE)",
        image: "/faculty/Bhondave.jpeg",
    },
    {
        id: 6,
        name: "Mr. M.S. Dighe",
        designation: "Assistant Professor",
        education: "M.Tech, PhD Appear",
        image: "/root/Sir.png",
    },
    {
        id: 7,
        name: "Mr. K.M. Borude",
        designation: "Assistant Professor",
        education: "M.Tech, PhD Appear",
        image: "/faculty/Borude.jpg",
    },
    {
        id: 8,
        name: "Miss. P.B. Chandane",
        designation: "Assistant Professor",
        education: "M.Tech, PhD Appear",
        image: "/root/Madam.png",
    },
    {
        id: 9,
        name: "Mr. A. Somwanshi",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/root/Sir.png",
    },
    {
        id: 10,
        name: "Miss. J.R. Mahajan",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/root/Madam.png",
    },
    {
        id: 11,
        name: "Mr. A.B. Jadhav",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/faculty/JadhavB.png",
    },
    {
        id: 12,
        name: "Miss. P.T. Dhotre",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/faculty/DhotrePT.JPG",
    },
    {
        id: 13,
        name: "Ms. P.O. Athare",
        designation: "Assistant Professor",
        education: "ME (CSE)",
        image: "/root/Madam.png",
    },
    {
        id: 14,
        name: "Mr. M.N. Pimple",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/faculty/PIMPLE.jpg",
    },
    {
        id: 15,
        name: "Mr. N.M. Kolhe",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/faculty/KOLHE.jpeg",
    },
    {
        id: 16,
        name: "Mr. V.N. Dhakane",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/faculty/DHAKANE.jpg",
    },
    {
        id: 17,
        name: "Miss. U.B. Shelke",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/faculty/SHELKE.jpeg",
    },
    {
        id: 18,
        name: "Miss. P.V. Gaikwad",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/faculty/Gaikwad.jpeg",
    },
    {
        id: 19,
        name: "Mr. S.V. Jaybhay",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/root/Sir.png",
    },
    {
        id: 20,
        name: "Mr. S.S. Medhe",
        designation: "Assistant Professor",
        education: "M.Tech (CS)",
        image: "/faculty/MEDHE.jpg",
    },
    {
        id: 21,
        name: "Miss. P.A. Vijay",
        designation: "Assistant Professor",
        education: "B.E/MBA",
        image: "/faculty/PVIJAY.jpeg",
    },
    {
        id: 22,
        name: "Mr. S.K. Pandurang",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/root/Sir.png",
    },
    {
        id: 23,
        name: "Miss. P.A. Waghule",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/faculty/Wagule.png",
    },
    {
        id: 24,
        name: "Miss. S.V. Adhav",
        designation: "Assistant Professor",
        education: "M.E/M.Tech",
        image: "/root/Madam.png",
    },
];


export default function Page() {
    return (
        <main className="bg-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
                    Our <span className="text-primary">Faculty</span>
                </h1>

                <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto pb-14">
                    Meet our dedicated faculty members who inspire innovation, excellence, and academic growth.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                    {facultyData.map((faculty) => (
                        <div
                            key={faculty.id}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Circle Image or Placeholder */}
                            {faculty.image ? (
                                <img
                                    src={faculty.image}
                                    alt={faculty.name}
                                    className="w-52 h-52 rounded-full object-cover "
                                />
                            ) : (
                                <div className="w-52 h-52 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 text-lg">
                                    Photo
                                </div>
                            )}

                            {/* Name */}
                            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                                {faculty.name}
                            </h2>

                            {/* Designation */}
                            <p className="mt-2 text-lg font-medium text-primary">
                                {faculty.designation}
                            </p>

                            {/* Education */}
                            <p className="mt-2 text-gray-500">
                                {faculty.education}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}