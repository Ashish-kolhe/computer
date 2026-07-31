"use client";

type PlacementStudent = {
  id: number;
  name: string;
  company: string;
  role: string;
  package: number;
};

type TopPerformer = {
  id: number;
  name: string;
  company: string;
  package: number;
  year: string;
  image: string;
};

type AcademicYear = {
  year: string;
  totalStudents: number;
  placedStudents: number;
  placementPercentage: number;
  highestPackage: number;
  averagePackage: number;
  companies: number;
  students: PlacementStudent[];
};

/* =========================================================
   TOP PERFORMERS
========================================================= */

const topPerformers: TopPerformer[] = [
  {
    id: 1,
    name: "Chavan Avinash",
    company: "U & D Square",
    package: 4.5,
    year: "2024–25",
    image: "/root/boy.png",
  },
  {
    id: 2,
    name: "Kotambe Sayali",
    company: "Snider",
    package: 4.5,
    year: "2024–25",
    image: "/root/girl.png",
  },
  {
    id: 3,
    name: "Pardeshi Achal",
    company: "Infosys",
    package: 3,
    year: "2022–23",
    image: "/root/girl.png",
  },
  {
    id: 4,
    name: "Davkhar Aniket",
    company: "TAISEI INFRA",
    package: 2.9,
    year: "2023–24",
    image: "/root/boy.png",
  },
 
];





/* =========================================================
   2024–25 DATA
========================================================= */

const placement2024_25: PlacementStudent[] = [
  {
    id: 1,
    name: "Akash Sonawane",
    company: "APMC Kopargaon",
    role: "Selected Candidate",
    package: 2,
  },
  {
    id: 2,
    name: "Bade Sunil",
    company: "PG Power & Industrial Solutions Pvt. Ltd.",
    role: "Selected Candidate",
    package: 3.4,
  },
  {
    id: 3,
    name: "Chavan Avinash",
    company: "U & D Square Sol. Pvt. Ltd.",
    role: "Selected Candidate",
    package: 4.5,
  },
  {
    id: 4,
    name: "Dhage Akshay ",
    company: "Disha Computer",
    role: "Selected Candidate",
    package: 1.5,
  },
  {
    id: 7,
    name: "Kaushal Suryawanshi",
    company: "Tetra Pak India Pvt. Ltd.",
    role: "Selected Candidate",
    package: 3.42,
  },
  {
    id: 8,
    name: "Kotambe Sayali",
    company: "Snider, Ahilyanagar",
    role: "Selected Candidate",
    package: 4.5,
  },
  {
    id: 9,
    name: "Makone Ajinkya",
    company: "Exide Battery, Pune",
    role: "Selected Candidate",
    package: 3.5,
  },
  {
    id: 10,
    name: "Pawar Shreyash",
    company: "WOW Infotech, Nashik",
    role: "Selected Candidate",
    package: 3.4,
  },
  {
    id: 11,
    name: "Pradnya Sonawane",
    company: "Active Company",
    role: "Selected Candidate",
    package: 2,
  },
  {
    id: 12,
    name: "Suryawanshi Nandkishor",
    company: "Disha Computer",
    role: "Selected Candidate",
    package: 1.5,
  },
];

/* =========================================================
   2023–24 DATA
========================================================= */

const placement2023_24: PlacementStudent[] = [
  { id: 1, name: "Aare Sujit", company: "Positron Pvt Ltd", role: "Software Engineer", package:2.8},
  { id: 2, name: "Aditi Wagh", company: "KPIT Technologies Limited", role: "Application Developer", package: 3.0 },
  { id: 3, name: "Adsul Tejeswini", company: "Tata Strive, Pune", role: "Software Trainee", package: 2.6 },
  { id: 4, name: "Baviskar Kajal", company: "Positron Pvt Ltd", role: "Software Engineer", package: 2.7 },
  { id: 5, name: "Bhaskar Nishant", company: "Tech Mahindra Mumbai", role: "Associate Engineer", package: 2.9 },
  { id: 6, name: "Bhawar Sagar", company: "Cyber Success, Pune", role: "Cyber Security Trainee", package: 2.5 },
  { id: 7, name: "Bhite Dhananjay", company: "CWS Technology", role: "Software Developer", package: 2.8 },
  { id: 8, name: "Bide Shreyash", company: "Qspider, Pune", role: "Testing Engineer", package: 2.6 },
  { id: 9, name: "Borade Diksha", company: "Qspider, Pune", role: "Testing Engineer", package: 2.7 },
  { id: 10, name: "Bulbule Omkar", company: "Qspider, Pune", role: "Testing Engineer", package: 2.8 },
  { id: 11, name: "Bundele Vaishnavi", company: "Qspider, Pune", role: "Testing Engineer", package: 2.6 },
  { id: 12, name: "Davkhar Aniket", company: "TAISEI INFRA PUNE", role: "Engineer Trainee", package: 2.9 },
  { id: 13, name: "Davkhar Saurabh", company: "Adtech Solution Pune", role: "Software Developer", package: 2.7 },
  { id: 14, name: "Dewtarse Abhijeet", company: "Edutech Technology", role: "Technical Associate", package: 2.8 },
  { id: 15, name: "Dokhe Sonali", company: "Pravara Infotech", role: "Software Developer", package: 2.6 },
  { id: 16, name: "Gaikwad Aditya", company: "Qspider, Pune", role: "Testing Engineer", package: 2.7 },
  { id: 17, name: "Ganesh Madhav", company: "Qspider, Pune", role: "Testing Engineer", package: 2.8 },
  { id: 18, name: "Gavate Bhagyashri", company: "Wipro Technologies", role: "Project Engineer", package: 3.0 },
  { id: 19, name: "Gholap Shrikant", company: "Career Labs, Pune", role: "Software Trainee", package: 2.5 },
  { id: 20, name: "Ghorpade Vilas", company: "Gkn Driveline ", role: "Graduate Engineer Trainee", package: 2.9 },
  { id: 21, name: "Gore Pallavi", company: "Affinityx", role: "Associate", package: 2.7 },
  { id: 22, name: "Jadhav Prabhakar", company: "TBS Quality Service Innovations", role: "Quality Engineer", package: 2.8 },
  { id: 23, name: "Jagdale Rushikesh", company: "Mahesh Agro Plast, Pune", role: "Engineer Trainee", package: 2.6 },
  { id: 24, name: "Kadam Pooja", company: "Sunanda Infotech ", role: "Software Developer", package: 2.7 },
  { id: 25, name: "Kamble Yash", company: "INFOSYS Bangalore", role: "Systems Engineer", package: 3.0 },
  { id: 26, name: "Kanade Rahul", company: "Shubhada Polymers Products ", role: "Engineer Trainee", package: 2.8 },
  { id: 27, name: "Kandekar Pankaj", company: "Qspider, Pune", role: "Testing Engineer", package: 2.6 },
  { id: 28, name: "Kolte Rushikesh", company: "Career Labs, Pune", role: "Software Trainee", package: 2.7 },
  { id: 29, name: "Kurhe Aniket", company: "Gkn Driveline", role: "Graduate Engineer Trainee", package: 2.9 },
  { id: 30, name: "Lanke Nikita", company: "Cyber Success, Pune", role: "Cyber Security Trainee", package: 2.5 },
  { id: 31, name: "Lotake Nisha", company: "Career Labs, Pune", role: "Software Trainee", package: 2.6 },
  { id: 32, name: "Mahandule Sanket", company: "TCS, Pune", role: "Software Developer", package: 3.0 },
  { id: 33, name: "Walke Pratiksha", company: "Cyber Success, Pune", role: "Cyber Security Trainee", package: 2.7 },
  { id: 34, name: "Marathe Rupali", company: "Qspider, Pune", role: "Testing Engineer", package: 2.8 },
  { id: 35, name: "Misal Aditya", company: "Zenser Technologies", role: "Software Developer", package: 2.9 },
  { id: 36, name: "Nannaware Sayali", company: "Qspider, Pune", role: "Testing Engineer", package: 2.6 },
  { id: 37, name: "Navale Mihir", company: "Sanya Autocomp Aurangabad", role: "Engineer Trainee", package: 2.7 },
  { id: 38, name: "Shaikh Diya", company: "Qspider, Pune", role: "Testing Engineer", package: 2.8 },
  { id: 39, name: "Shinde Pradnya", company: "Careerlabs, Pune", role: "Software Trainee", package: 2.5 },
  { id: 40, name: "Shinde Vaishnavi", company: "Careerlabs, Pune", role: "Software Trainee", package: 2.6 },
  { id: 41, name: "Shubham Govind", company: "Qspider, Pune", role: "Testing Engineer", package: 2.7 },
  { id: 42, name: "Thete Akanksha", company: "ESTEEM Programming Institute", role: "Software Trainee", package: 2.8 },
  { id: 43, name: "Sapkal Sakshi", company: "Bajaj Auto Limited, Pune", role: "Graduate Engineer Trainee", package: 3.0 },
  { id: 44, name: "Pawar Ravindra", company: "ARDEM Data Services Private Limited", role: "Data Associate", package: 2.7 },
  { id: 45, name: "Wagh Ajit", company: "e-Business Solutions", role: "Software Associate", package: 2.8 },
  { id: 46, name: "Wandhekar Sanket", company: "ARDEM Data Services", role: "Data Associate", package: 2.6 },
  { id: 47, name: "Pawar Pallavi", company: "Sunanda Infotech", role: "Software Developer", package: 2.9 },
  { id: 48, name: "Sagalgile Tushar", company: "Authentic Staffing Agency", role: "Associate", package: 2.5 },
];

/* =========================================================
   2022–23 DATA
========================================================= */

const placement2022_23: PlacementStudent[] = [
  {
    id: 1,
    name: "Bhusari Madhuri",
    company: "Qspider, Pune",
    role: "Testing Engineer",
    package: 2.6,
  },
  {
    id: 2,
    name: "Bramhane Milind",
    company: "TATA Automobiles",
    role: "Graduate Engineer Trainee",
    package: 2.9,
  },
  {
    id: 3,
    name: "Girhe Mayuri",
    company: "Cyber Success, Pune",
    role: "Cyber Security Trainee",
    package: 2.7,
  },
  {
    id: 4,
    name: "Gore Shubham",
    company: "Cyber Success, Pune",
    role: "Cyber Security Trainee",
    package: 2.5,
  },
  {
    id: 5,
    name: "Jadhav Anjali",
    company: "Cyber Success, Pune",
    role: "Cyber Security Trainee",
    package: 2.8,
  },
  {
    id: 6,
    name: "Kalsait Diksha",
    company: "Qspider Campus",
    role: "Testing Engineer",
    package: 2.6,
  },
  {
    id: 7,
    name: "Karande Priti",
    company: "Capgemini, Pune",
    role: "Software Engineer",
    package: 3.0,
  },
  {
    id: 8,
    name: "Kasar Rutuja",
    company: "Pentagoan Pune",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 9,
    name: "Katkade Pravin",
    company: "Pentagoan Pune",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 10,
    name: "Kedare Payal",
    company: "Career Labs, Pune",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 11,
    name: "Lokhande Namrata",
    company: "GlobalStep",
    role: "Software Associate",
    package: 2.7,
  },
  {
    id: 12,
    name: "Misal Isha",
    company: "Capgemini, Pune",
    role: "Software Engineer",
    package: 3.0,
  },
  {
    id: 13,
    name: "Narode Gaurav",
    company: "KPIT, Pune",
    role: "Software Engineer",
    package: 2.9,
  },
  {
    id: 14,
    name: "Nemane Mansi",
    company: "PRM, Pune",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 15,
    name: "Pardeshi Achal",
    company: "Infosys, Pune",
    role: "Systems Engineer",
    package: 3.0,
  },
  {
    id: 16,
    name: "Renake Ashwini",
    company: "KPIT, Pune",
    role: "Software Engineer",
    package: 2.8,
  },
  {
    id: 17,
    name: "Chaudhari Divya",
    company: "ATC, Chas",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 18,
    name: "Potdar Swapnil",
    company: "Accelyo",
    role: "Software Developer",
    package: 2.7,
  },
  {
    id: 19,
    name: "Ranshur Harshal",
    company: "Infosys",
    role: "Systems Engineer",
    package: 3.0,
  },
  {
    id: 20,
    name: "Rokade Priti",
    company: "Capgemini, Pune",
    role: "Software Engineer",
    package: 2.9,
  },
  {
    id: 21,
    name: "Salve Rohan",
    company: "SunPharma, A'nagar",
    role: "Associate Engineer",
    package: 2.8,
  },
  {
    id: 22,
    name: "Sapkal Shubham",
    company: "Pentagoan, Pune",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 23,
    name: "Shahane Aishwarya",
    company: "Pentagoan, Pune",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 24,
    name: "Shaikh Sahil",
    company: "Pentagoan Pune",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 25,
    name: "Shete Shivam",
    company: "ITYX Pune",
    role: "Software Developer",
    package: 2.8,
  },
  {
    id: 26,
    name: "Shinde Pranjali",
    company: "Careerlabs, Pune",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 27,
    name: "Sonawane Vishal",
    company: "ESP, Pune",
    role: "Software Developer",
    package: 2.7,
  },
  {
    id: 28,
    name: "Thorat Kalyani",
    company: "Boat Apprentice Pune",
    role: "Graduate Trainee",
    package: 2.9,
  },
  {
    id: 29,
    name: "Vidhate Jalindar",
    company: "Cyber Success, Pune",
    role: "Cyber Security Trainee",
    package: 2.8,
  },
];
/* =========================================================
   2021–22 DATA
========================================================= */

const placement2021_22: PlacementStudent[] = [
  {
    id: 1,
    name: "Gaikwad Anjali",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 2,
    name: "Dhakane Mohini",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 3,
    name: "Bagal Pooja",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 4,
    name: "Nannaware Srushti",
    company: "Ref: Appointment Letter",
    role: "Software Trainee",
    package: 2.9,
  },
  {
    id: 5,
    name: "Tambore Nandkumar",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 6,
    name: "Raktate Akash",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.8,
  },
  {
    id: 7,
    name: "Gaikwad Milind",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.6,
  },
  {
    id: 8,
    name: "Mhaske Pratiksha",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 9,
    name: "Ligade Mayuri",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 10,
    name: "Khatib Jameel Abdul",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.9,
  },
  {
    id: 11,
    name: "Urmude Hrishikesh",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.8,
  },
  {
    id: 12,
    name: "Palwe Pooja",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 13,
    name: "Kandalkar Snehal",
    company: "Ref: Appointment Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 14,
    name: "Pathare Pramod",
    company: "Ref: Employee ID",
    role: "Software Associate",
    package: 3.0,
  },
  {
    id: 15,
    name: "Wable Navnath",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 16,
    name: "Kulkarni Supriya",
    company: "Ref: Qspiders Campus",
    role: "Testing Engineer",
    package: 2.6,
  },
  {
    id: 17,
    name: "Diwan Ajinkya",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.9,
  },
  {
    id: 18,
    name: "Shaikh Rihan",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 19,
    name: "Gadekar Divya",
    company: "Ref: Letter of Appointment",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 20,
    name: "Nagade Shivam",
    company: "Ref: Letter of Appointment",
    role: "Software Developer",
    package: 2.6,
  },
  {
    id: 21,
    name: "Vitnor Varsha",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 22,
    name: "Kulkarni Pratyancha",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 23,
    name: "Bhingarde Pranave",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 24,
    name: "Gore Shraddha",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 25,
    name: "Vidhate Sarika",
    company: "Ref: I-Card",
    role: "Software Associate",
    package: 2.9,
  },
  {
    id: 26,
    name: "Zaware Renuka",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 27,
    name: "Late Rutika",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 28,
    name: "Fand Priti",
    company: "Ref: Qspiders Campus",
    role: "Testing Engineer",
    package: 2.7,
  },
  {
    id: 29,
    name: "Jadhav Prajakta",
    company: "Ref: Letter of Appointment",
    role: "Software Trainee",
    package: 2.9,
  },
  {
    id: 30,
    name: "Navale Suresh",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.8,
  },
  {
    id: 31,
    name: "Adsure Akshay",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 32,
    name: "Badhe Tejas",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 33,
    name: "Pawar Shripad",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.7,
  },
  {
    id: 34,
    name: "Kulkarni Pranali",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 35,
    name: "Pardeshi Pooja ",
    company: "Ref: Appointment Letter",
    role: "Software Trainee",
    package: 2.9,
  },
  {
    id: 36,
    name: "Zurale Gaurav ",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.7,
  },
  {
    id: 37,
    name: "Shelke Shubhangi",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 38,
    name: "Gunjal Vikas ",
    company: "Ref: PENTA Campus",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 39,
    name: "Adik Prajakta ",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 40,
    name: "Hindule Pratiksha",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 41,
    name: "Pawar Prajwal ",
    company: "Ref: PO/HR",
    role: "Graduate Trainee",
    package: 2.9,
  },
  {
    id: 42,
    name: "Bhendekar Akash",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 43,
    name: "Gunjal Yash",
    company: "Ref: PO/HR",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 44,
    name: "Aware Priyanka ",
    company: "Ref: TS/HR",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 45,
    name: "More Saurabh",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.9,
  },
  {
    id: 46,
    name: "Satpute Omkar",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 47,
    name: "Khedkar Kiran",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.8,
  },
];

/* =========================================================
   2020–21 DATA
========================================================= */



/* =========================================================
   ACADEMIC YEAR DATA
========================================================= */

const academicYears: AcademicYear[] = [
 
  {
    year: "2024–25",
    totalStudents: 60,
    placedStudents: 12,
    placementPercentage: 20,
    highestPackage: 4.5,
    averagePackage: 3.7,
    companies: 28,
    students: placement2024_25,
  },
  {
    year: "2023–24",
    totalStudents: 60,
    placedStudents: 48,
    placementPercentage: 80,
    highestPackage: 3,
    averagePackage: 2.8,
    companies: 14,
    students: placement2023_24,
  },
  {
    year: "2022–23",
    totalStudents: 60,
    placedStudents: 29,
    placementPercentage: 50,
    highestPackage: 3,
    averagePackage: 2.4,
    companies: 9,
    students: placement2022_23,
  },
  {
    year: "2021–22",
    totalStudents: 60,
    placedStudents: 47,
    placementPercentage: 80,
    highestPackage: 3,
    averagePackage: 2.6,
    companies: 8,
    students: placement2021_22,
  },
  
];

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Page() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}




      {/* =====================================================
          TOP PERFORMERS
      ====================================================== */}

      <section className="overflow-hidden py-20">

        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
            Student Achievements
          </p>

          <h2 className="mt-3 text-4xl font-bold text-primary">
            Our Top Performers
          </h2>

          <p className="mt-3 text-slate-500">
            Celebrating students who achieved excellence
            in campus placements.
          </p>
        </div>


        {/* Horizontal Infinite Scroll */}

        <div className="mt-12 overflow-hidden">

          <div className="flex w-max gap-6 animate-[placementScroll_35s_linear_infinite] hover:[animation-play-state:paused]">

            {[...topPerformers, ...topPerformers].map(
              (student, index) => (
                <div
                  key={`${student.id}-${index}`}
                  className="w-[270px] shrink-0 rounded-3xl  bg-white p-6 text-center  transition hover:-translate-y-2 "
                >

                  {/* Student Photo */}

                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full  ">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="h-full w-full object-cover"
                    />
                  </div>


                  {/* Package */}

                  <div className="mt-6">
                    <p className="text-3xl font-bold text-slate-900">
                      ₹{student.package} LPA
                    </p>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Package
                    </p>
                  </div>


                  {/* Student Name */}

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {student.name}
                  </h3>


                  {/* Company */}

                  <p className="mt-1 text-sm text-slate-500">
                    {student.company}
                  </p>


                  {/* Year */}

                  <span className="mt-4 inline-block rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
                    {student.year}
                  </span>

                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          OVERALL PLACEMENT SUMMARY
      ====================================================== */}

      <section className=" pb-20">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl  bg-white p-8 ">

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                Placement Overview
              </p>

              <h2 className="mt-2 text-3xl text-primary font-bold">
                Our Placement Journey
              </h2>
            </div>


            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Highest Package",
                  value: "₹4.5 LPA",
                },
                {
                  title: "Average Package",
                  value: "₹3.8 LPA",
                },
                {
                  title: "Students Placed",
                  value: "136+",
                },
                {
                  title: "Recruiting Companies",
                  value: "32+",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6"
                >
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <p className="mt-3 text-3xl font-bold text-slate-900">
                    {item.value}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          YEAR-WISE PLACEMENT RECORDS
      ====================================================== */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
              Historical Data
            </p>

            <h2 className="mt-3 text-4xl font-bold text-primary">

              Placement Records
            </h2>

          </div>


          {/* 2025–26 → 2019–20 */}

          {academicYears.map((academicYear) => (

            <div
              key={academicYear.year}
              className="mb-16"
            >

              {/* Year Header */}

              <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">

                <div>
                  <p className="text-sm font-medium text-black">
                    Academic Year
                  </p>

                  <h3 className="mt-1 text-3xl font-bold text-primary">
                    {academicYear.year}
                  </h3>
                </div>


                <div className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">
                  {academicYear.placementPercentage}% Placement
                </div>

              </div>


              {/* Statistics */}

              <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-5">

                {[
                  {
                    label: "Total Students",
                    value: academicYear.totalStudents,
                  },
                  {
                    label: "Students Placed",
                    value: academicYear.placedStudents,
                  },
                  {
                    label: "Highest Package",
                    value: `₹${academicYear.highestPackage} LPA`,
                  },
                  {
                    label: "Average Package",
                    value: `₹${academicYear.averagePackage} LPA`,
                  },
                  {
                    label: "Companies",
                    value: academicYear.companies,
                  },
                ].map((stat) => (

                  <div
                    key={stat.label}
                    className="rounded-2xl  bg-white p-5"
                  >
                    <p className="text-xs font-medium text-slate-500">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>

                  </div>

                ))}

              </div>


              {/* Placement Table */}

              <div className="overflow-hidden rounded-3xl ">

                <div className="overflow-x-auto">

                  <table className="w-full min-w-[700px]">

                    <thead>

                      <tr className="border-b border-slate-200 bg-slate-50">

                        <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                          Student
                        </th>

                        <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                          Company
                        </th>

                        <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                          Role
                        </th>

                        <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                          Package
                        </th>

                      </tr>

                    </thead>


                    <tbody className="divide-y divide-slate-100">

                      {academicYear.students.map(
                        (student) => (

                          <tr
                            key={student.id}
                            className="transition hover:bg-slate-50"
                          >

                            <td className="px-6 py-5">

                              <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                  {student.name.charAt(0)}
                                </div>

                                <span className="font-semibold text-slate-800">
                                  {student.name}
                                </span>

                              </div>

                            </td>


                            <td className="px-6 py-5 font-medium text-slate-600">
                              {student.company}
                            </td>


                            <td className="px-6 py-5 text-slate-500">
                              {student.role}
                            </td>


                            <td className="px-6 py-5 text-right">

                              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-900">
                                ₹{student.package} LPA
                              </span>

                            </td>

                          </tr>

                        )
                      )}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}



      {/* =====================================================
          INFINITE SCROLL ANIMATION
      ====================================================== */}

      <style jsx>{`
        @keyframes placementScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </main>
  );
}