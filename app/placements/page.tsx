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
    name: "Aarav Sharma",
    company: "Microsoft",
    package: 18,
    year: "2025–26",
    image: "/root/Sir.png",
  },
  {
    id: 2,
    name: "Priya Patil",
    company: "Amazon",
    package: 16,
    year: "2025–26",
    image: "/root/Madam.png",
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    company: "Google",
    package: 14,
    year: "2024–25",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    company: "Infosys",
    package: 12,
    year: "2024–25",
    image: "https://i.pravatar.cc/300?img=44",
  },
  {
    id: 5,
    name: "Aditya Jadhav",
    company: "TCS",
    package: 11,
    year: "2023–24",
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    id: 6,
    name: "Neha Shinde",
    company: "Accenture",
    package: 10,
    year: "2023–24",
    image: "https://i.pravatar.cc/300?img=45",
  },
];

/* =========================================================
   2025–26 DATA
========================================================= */

const placement2025_26: PlacementStudent[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    company: "Microsoft",
    role: "Software Engineer",
    package: 18,
  },
  {
    id: 2,
    name: "Priya Patil",
    company: "Amazon",
    role: "Software Developer",
    package: 16,
  },
  {
    id: 3,
    name: "Rahul More",
    company: "Infosys",
    role: "System Engineer",
    package: 9,
  },
  {
    id: 4,
    name: "Sneha Joshi",
    company: "TCS",
    role: "Graduate Engineer",
    package: 8,
  },
];

/* =========================================================
   2024–25 DATA
========================================================= */

const placement2024_25: PlacementStudent[] = [
  {
    id: 1,
    name: "Akash Rajendra Sonawane",
    company: "APMC Kopargaon",
    role: "Selected Candidate",
    package: 2,
  },
  {
    id: 2,
    name: "Bade Sunil Bhaskar",
    company: "PG Power & Industrial Solutions Pvt. Ltd.",
    role: "Selected Candidate",
    package: 3.4,
  },
  {
    id: 3,
    name: "Chavan Avinash Machhindra",
    company: "U & D Square Sol. Pvt. Ltd.",
    role: "Selected Candidate",
    package: 4.5,
  },
  {
    id: 4,
    name: "Dhage Akshay Namdev",
    company: "Disha Computer",
    role: "Selected Candidate",
    package: 1.5,
  },
  {
    id: 7,
    name: "Kaushal Santosh Suryawanshi",
    company: "Tetra Pak India Pvt. Ltd.",
    role: "Selected Candidate",
    package: 3.42,
  },
  {
    id: 8,
    name: "Kotambe Sayali Gokul",
    company: "Snider, Ahilyanagar",
    role: "Selected Candidate",
    package: 4.5,
  },
  {
    id: 9,
    name: "Makone Ajinkya Sanjay",
    company: "Exide Battery, Pune",
    role: "Selected Candidate",
    package: 3.5,
  },
  {
    id: 10,
    name: "Pawar Shreyash Sunil",
    company: "WOW Infotech, Nashik",
    role: "Selected Candidate",
    package: 3.4,
  },
  {
    id: 11,
    name: "Pradnya Ramkrushna Sonawane",
    company: "Active Company",
    role: "Selected Candidate",
    package: 2,
  },
  {
    id: 12,
    name: "Suryawanshi Nandkishor Bapu",
    company: "Disha Computer",
    role: "Selected Candidate",
    package: 1.5,
  },
];

/* =========================================================
   2023–24 DATA
========================================================= */

const placement2023_24: PlacementStudent[] = [
  { id: 1, name: "Aare Sujit Siddeshwar", company: "Positron Pvt Ltd", role: "Software Engineer", package: 2.8 },
  { id: 2, name: "Aditi Rajesh Wagh", company: "KPIT Technologies Limited", role: "Application Developer", package: 3.0 },
  { id: 3, name: "Adsul Tejeswini Sanjay", company: "Tata Strive, Pune", role: "Software Trainee", package: 2.6 },
  { id: 4, name: "Baviskar Kajal Chandrashekhar", company: "Positron Pvt Ltd", role: "Software Engineer", package: 2.7 },
  { id: 5, name: "Bhaskar Nishant Krishnakant", company: "Tech Mahindra Mumbai", role: "Associate Engineer", package: 2.9 },
  { id: 6, name: "Bhawar Sagar Nana", company: "Cyber Success, Pune", role: "Cyber Security Trainee", package: 2.5 },
  { id: 7, name: "Bhite Dhananjay Shivaji", company: "CWS Technology", role: "Software Developer", package: 2.8 },
  { id: 8, name: "Bide Shreyash Damodhar", company: "Qspider, Pune", role: "Testing Engineer", package: 2.6 },
  { id: 9, name: "Borade Diksha Bhausaheb", company: "Qspider, Pune", role: "Testing Engineer", package: 2.7 },
  { id: 10, name: "Bulbule Omkar Sanjay", company: "Qspider, Pune", role: "Testing Engineer", package: 2.8 },
  { id: 11, name: "Bundele Vaishnavi Suresh", company: "Qspider, Pune", role: "Testing Engineer", package: 2.6 },
  { id: 12, name: "Davkhar Aniket Rajendra", company: "TAISEI INFRA PUNE", role: "Engineer Trainee", package: 2.9 },
  { id: 13, name: "Davkhar Saurabh Rajendra", company: "Adtech Solution Pune", role: "Software Developer", package: 2.7 },
  { id: 14, name: "Dewtarse Abhijeet Deepak", company: "Edutech Technology Pvt Ltd Pune", role: "Technical Associate", package: 2.8 },
  { id: 15, name: "Dokhe Sonali Sanjay", company: "Pravara Infotech", role: "Software Developer", package: 2.6 },
  { id: 16, name: "Gaikwad Aditya Avinash", company: "Qspider, Pune", role: "Testing Engineer", package: 2.7 },
  { id: 17, name: "Ganesh Madhav Gitte", company: "Qspider, Pune", role: "Testing Engineer", package: 2.8 },
  { id: 18, name: "Gavate Bhagyashri Shankar", company: "Wipro Technologies", role: "Project Engineer", package: 3.0 },
  { id: 19, name: "Gholap Shrikant Vijay", company: "Career Labs, Pune", role: "Software Trainee", package: 2.5 },
  { id: 20, name: "Ghorpade Vilas Anil", company: "Gkn Driveline Limited Ahmednagar", role: "Graduate Engineer Trainee", package: 2.9 },
  { id: 21, name: "Gore Pallavi Balasaheb", company: "Affinityx", role: "Associate", package: 2.7 },
  { id: 22, name: "Jadhav Prabhakar Devnath", company: "TBS Quality Service Innovations, Pune", role: "Quality Engineer", package: 2.8 },
  { id: 23, name: "Jagdale Rushikesh Pradip", company: "Mahesh Agro Plast, Pune", role: "Engineer Trainee", package: 2.6 },
  { id: 24, name: "Kadam Pooja Santosh", company: "Sunanda Infotech PVT LTD Nashik", role: "Software Developer", package: 2.7 },
  { id: 25, name: "Kamble Yash Laxmikant", company: "INFOSYS Bangalore", role: "Systems Engineer", package: 3.0 },
  { id: 26, name: "Kanade Rahul Radheshyam", company: "Shubhada Polymers Products Pvt Ltd Nashik", role: "Engineer Trainee", package: 2.8 },
  { id: 27, name: "Kandekar Pankaj Baban", company: "Qspider, Pune", role: "Testing Engineer", package: 2.6 },
  { id: 28, name: "Kolte Rushikesh Chandrabhan", company: "Career Labs, Pune", role: "Software Trainee", package: 2.7 },
  { id: 29, name: "Kurhe Aniket Appasaheb", company: "Gkn Driveline Limited Ahmednagar", role: "Graduate Engineer Trainee", package: 2.9 },
  { id: 30, name: "Lanke Nikita Anantha", company: "Cyber Success, Pune", role: "Cyber Security Trainee", package: 2.5 },
  { id: 31, name: "Lotake Nisha Bibhishan", company: "Career Labs, Pune", role: "Software Trainee", package: 2.6 },
  { id: 32, name: "Mahandule Sanket Dattatray", company: "TCS, Pune", role: "Software Developer", package: 3.0 },
  { id: 33, name: "Walke Pratiksha Navnath", company: "Cyber Success, Pune", role: "Cyber Security Trainee", package: 2.7 },
  { id: 34, name: "Marathe Rupali Dnyandev", company: "Qspider, Pune", role: "Testing Engineer", package: 2.8 },
  { id: 35, name: "Misal Aditya Shankar", company: "Zenser Technologies Private Limited", role: "Software Developer", package: 2.9 },
  { id: 36, name: "Nannaware Sayali Dattatray", company: "Qspider, Pune", role: "Testing Engineer", package: 2.6 },
  { id: 37, name: "Navale Mihir Sunil", company: "Sanya Autocomp Aurangabad", role: "Engineer Trainee", package: 2.7 },
  { id: 38, name: "Shaikh Diya Altaph", company: "Qspider, Pune", role: "Testing Engineer", package: 2.8 },
  { id: 39, name: "Shinde Pradnya Dilip", company: "Careerlabs, Pune", role: "Software Trainee", package: 2.5 },
  { id: 40, name: "Shinde Vaishnavi Subhash", company: "Careerlabs, Pune", role: "Software Trainee", package: 2.6 },
  { id: 41, name: "Shubham Govind Bhagwat", company: "Qspider, Pune", role: "Testing Engineer", package: 2.7 },
  { id: 42, name: "Thete Akanksha Jayram", company: "ESTEEM Programming Institute, Pune", role: "Software Trainee", package: 2.8 },
  { id: 43, name: "Sapkal Sakshi Prashant", company: "Bajaj Auto Limited, Pune", role: "Graduate Engineer Trainee", package: 3.0 },
  { id: 44, name: "Pawar Ravindra Namdev", company: "ARDEM Data Services Private Limited", role: "Data Associate", package: 2.7 },
  { id: 45, name: "Wagh Ajit", company: "e-Business Solutions", role: "Software Associate", package: 2.8 },
  { id: 46, name: "Wandhekar Sanket", company: "ARDEM Data Services Private Limited", role: "Data Associate", package: 2.6 },
  { id: 47, name: "Pawar Pallavi Dnyaneshwar", company: "Sunanda Infotech PVT LTD Nashik", role: "Software Developer", package: 2.9 },
  { id: 48, name: "Sagalgile Tushar Annasaheb", company: "Authentic Staffing Agency", role: "Associate", package: 2.5 },
];

/* =========================================================
   2022–23 DATA
========================================================= */

const placement2022_23: PlacementStudent[] = [
  {
    id: 1,
    name: "Bhusari Madhuri Machindra",
    company: "Qspider, Pune",
    role: "Testing Engineer",
    package: 2.6,
  },
  {
    id: 2,
    name: "Bramhane Milind Dilip",
    company: "TATA Automobiles",
    role: "Graduate Engineer Trainee",
    package: 2.9,
  },
  {
    id: 3,
    name: "Girhe Mayuri Popat",
    company: "Cyber Success, Pune",
    role: "Cyber Security Trainee",
    package: 2.7,
  },
  {
    id: 4,
    name: "Gore Shubham Anil",
    company: "Cyber Success, Pune",
    role: "Cyber Security Trainee",
    package: 2.5,
  },
  {
    id: 5,
    name: "Jadhav Anjali Eknath",
    company: "Cyber Success, Pune",
    role: "Cyber Security Trainee",
    package: 2.8,
  },
  {
    id: 6,
    name: "Kalsait Diksha Vijay",
    company: "Qspider Campus",
    role: "Testing Engineer",
    package: 2.6,
  },
  {
    id: 7,
    name: "Karande Priti Suryabhan",
    company: "Capgemini, Pune",
    role: "Software Engineer",
    package: 3.0,
  },
  {
    id: 8,
    name: "Kasar Rutuja Vasant",
    company: "Pentagoan Pune",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 9,
    name: "Katkade Pravin Babappasaheb",
    company: "Pentagoan Pune",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 10,
    name: "Kedare Payal Babasaheb",
    company: "Career Labs, Pune",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 11,
    name: "Lokhande Namrata Ravindra",
    company: "GlobalStep",
    role: "Software Associate",
    package: 2.7,
  },
  {
    id: 12,
    name: "Misal Isha Shankar",
    company: "Capgemini, Pune",
    role: "Software Engineer",
    package: 3.0,
  },
  {
    id: 13,
    name: "Narode Gaurav Vishwanath",
    company: "KPIT, Pune",
    role: "Software Engineer",
    package: 2.9,
  },
  {
    id: 14,
    name: "Nemane Mansi Nandkumar",
    company: "PRM, Pune",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 15,
    name: "Pardeshi Achal Sharad",
    company: "Infosys, Pune",
    role: "Systems Engineer",
    package: 3.0,
  },
  {
    id: 16,
    name: "Renake Ashwini Rajendra",
    company: "KPIT, Pune",
    role: "Software Engineer",
    package: 2.8,
  },
  {
    id: 17,
    name: "Chaudhari Divya Ashok",
    company: "ATC, Chas",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 18,
    name: "Potdar Swapnil Ashok",
    company: "Accelyo",
    role: "Software Developer",
    package: 2.7,
  },
  {
    id: 19,
    name: "Ranshur Harshal Ghanshyam",
    company: "Infosys",
    role: "Systems Engineer",
    package: 3.0,
  },
  {
    id: 20,
    name: "Rokade Priti Gorakshnath",
    company: "Capgemini, Pune",
    role: "Software Engineer",
    package: 2.9,
  },
  {
    id: 21,
    name: "Salve Rohan Kishor",
    company: "SunPharma, A'nagar",
    role: "Associate Engineer",
    package: 2.8,
  },
  {
    id: 22,
    name: "Sapkal Shubham Sambhaji",
    company: "Pentagoan, Pune",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 23,
    name: "Shahane Aishwarya Sunil",
    company: "Pentagoan, Pune",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 24,
    name: "Shaikh Sahil Asif",
    company: "Pentagoan Pune",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 25,
    name: "Shete Shivam Raju",
    company: "ITYX Pune",
    role: "Software Developer",
    package: 2.8,
  },
  {
    id: 26,
    name: "Shinde Pranjali Popat",
    company: "Careerlabs, Pune",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 27,
    name: "Sonawane Vishal Gorakh",
    company: "ESP, Pune",
    role: "Software Developer",
    package: 2.7,
  },
  {
    id: 28,
    name: "Thorat Kalyani Rajendra",
    company: "Boat Apprentice Pune",
    role: "Graduate Trainee",
    package: 2.9,
  },
  {
    id: 29,
    name: "Vidhate Jalindar Balasaheb",
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
    name: "Gaikwad Anjali Navnath",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 2,
    name: "Dhakane Mohini Devaram",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 3,
    name: "Bagal Pooja Sham",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 4,
    name: "Nannaware Srushti Kailas",
    company: "Ref: Appointment Letter",
    role: "Software Trainee",
    package: 2.9,
  },
  {
    id: 5,
    name: "Tambore Nandkumar Ashokrao",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 6,
    name: "Raktate Akash Dilip",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.8,
  },
  {
    id: 7,
    name: "Gaikwad Milind Raosaheb",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.6,
  },
  {
    id: 8,
    name: "Mhaske Pratiksha Popat",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 9,
    name: "Ligade Mayuri Balasaheb",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 10,
    name: "Khatib Jameel Abdul Mobin",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.9,
  },
  {
    id: 11,
    name: "Urmude Hrishikesh Suresh",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.8,
  },
  {
    id: 12,
    name: "Palwe Pooja Macchindra",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 13,
    name: "Kandalkar Snehal Rausaheb",
    company: "Ref: Appointment Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 14,
    name: "Pathare Pramod Prakash",
    company: "Ref: Employee ID",
    role: "Software Associate",
    package: 3.0,
  },
  {
    id: 15,
    name: "Wable Navnath Arjun",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 16,
    name: "Kulkarni Supriya Padmakar",
    company: "Ref: Qspiders Campus",
    role: "Testing Engineer",
    package: 2.6,
  },
  {
    id: 17,
    name: "Diwan Ajinkya Dilip",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.9,
  },
  {
    id: 18,
    name: "Shaikh Rihan Sajid",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 19,
    name: "Gadekar Divya Nivrutti",
    company: "Ref: Letter of Appointment",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 20,
    name: "Nagade Shivam Sanjay",
    company: "Ref: Letter of Appointment",
    role: "Software Developer",
    package: 2.6,
  },
  {
    id: 21,
    name: "Vitnor Varsha Kondiram",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 22,
    name: "Kulkarni Pratyancha Shrinivas",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 23,
    name: "Bhingarde Pranave Dnyaneshwar",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 24,
    name: "Gore Shraddha Chandrashekhar",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 25,
    name: "Vidhate Sarika Kedarnath",
    company: "Ref: I-Card",
    role: "Software Associate",
    package: 2.9,
  },
  {
    id: 26,
    name: "Zaware Renuka Balasaheb",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 27,
    name: "Late Rutika Rajendra",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 28,
    name: "Fand Priti Balasaheb",
    company: "Ref: Qspiders Campus",
    role: "Testing Engineer",
    package: 2.7,
  },
  {
    id: 29,
    name: "Jadhav Prajakta Ravindra",
    company: "Ref: Letter of Appointment",
    role: "Software Trainee",
    package: 2.9,
  },
  {
    id: 30,
    name: "Navale Suresh Ashok",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.8,
  },
  {
    id: 31,
    name: "Adsure Akshay Vilas",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 32,
    name: "Badhe Tejas Dattatray",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 33,
    name: "Pawar Shripad Chandrashekhar",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.7,
  },
  {
    id: 34,
    name: "Kulkarni Pranali Sanjay",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 35,
    name: "Pardeshi Pooja Ratan",
    company: "Ref: Appointment Letter",
    role: "Software Trainee",
    package: 2.9,
  },
  {
    id: 36,
    name: "Zurale Gaurav Rajendra",
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
    name: "Gunjal Vikas Vilas",
    company: "Ref: PENTA Campus",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 39,
    name: "Adik Prajakta Anil",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 40,
    name: "Hindule Pratiksha Arjun",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 41,
    name: "Pawar Prajwal Chandrashekhar",
    company: "Ref: PO/HR",
    role: "Graduate Trainee",
    package: 2.9,
  },
  {
    id: 42,
    name: "Bhendekar Akash Chhagan",
    company: "Ref: Offer Letter",
    role: "Software Trainee",
    package: 2.8,
  },
  {
    id: 43,
    name: "Gunjal Yash Sanjay",
    company: "Ref: PO/HR",
    role: "Software Trainee",
    package: 2.6,
  },
  {
    id: 44,
    name: "Aware Priyanka Peter",
    company: "Ref: TS/HR",
    role: "Software Trainee",
    package: 2.7,
  },
  {
    id: 45,
    name: "More Saurabh Anil",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.9,
  },
  {
    id: 46,
    name: "Satpute Omkar Jaidev",
    company: "Ref: Letter of Intent",
    role: "Software Trainee",
    package: 2.5,
  },
  {
    id: 47,
    name: "Khedkar Kiran Rajendra",
    company: "Ref: Offer Letter",
    role: "Software Developer",
    package: 2.8,
  },
];

/* =========================================================
   2020–21 DATA
========================================================= */

const placement2020_21: PlacementStudent[] = [
  {
    id: 1,
    name: "Amit Deshmukh",
    company: "Wipro",
    role: "Project Engineer",
    package: 6,
  },
  {
    id: 2,
    name: "Snehal More",
    company: "Cognizant",
    role: "Programmer Analyst",
    package: 5.5,
  },
];

/* =========================================================
   2019–20 DATA
========================================================= */

const placement2019_20: PlacementStudent[] = [
  {
    id: 1,
    name: "Vivek Patil",
    company: "TCS",
    role: "System Engineer",
    package: 5,
  },
  {
    id: 2,
    name: "Rutuja Jadhav",
    company: "Infosys",
    role: "System Engineer",
    package: 4.5,
  },
];

/* =========================================================
   ACADEMIC YEAR DATA
========================================================= */

const academicYears: AcademicYear[] = [
  {
    year: "2025–26",
    totalStudents: 120,
    placedStudents: 108,
    placementPercentage: 90,
    highestPackage: 18,
    averagePackage: 7.8,
    companies: 32,
    students: placement2025_26,
  },
  {
    year: "2024–25",
    totalStudents: 115,
    placedStudents: 99,
    placementPercentage: 86,
    highestPackage: 14,
    averagePackage: 7.2,
    companies: 28,
    students: placement2024_25,
  },
  {
    year: "2023–24",
    totalStudents: 152,
    placedStudents: 92,
    placementPercentage: 84,
    highestPackage: 11,
    averagePackage: 6.8,
    companies: 25,
    students: placement2023_24,
  },
  {
    year: "2022–23",
    totalStudents: 105,
    placedStudents: 84,
    placementPercentage: 80,
    highestPackage: 9,
    averagePackage: 6.1,
    companies: 22,
    students: placement2022_23,
  },
  {
    year: "2021–22",
    totalStudents: 100,
    placedStudents: 76,
    placementPercentage: 76,
    highestPackage: 7,
    averagePackage: 5.6,
    companies: 20,
    students: placement2021_22,
  },
  {
    year: "2020–21",
    totalStudents: 95,
    placedStudents: 68,
    placementPercentage: 72,
    highestPackage: 6,
    averagePackage: 5.1,
    companies: 18,
    students: placement2020_21,
  },
  {
    year: "2019–20",
    totalStudents: 90,
    placedStudents: 60,
    placementPercentage: 67,
    highestPackage: 5,
    averagePackage: 4.5,
    companies: 16,
    students: placement2019_20,
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

      <section className="px-6 pb-20">

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


            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Highest Package",
                  value: "₹18 LPA",
                },
                {
                  title: "Average Package",
                  value: "₹7.8 LPA",
                },
                {
                  title: "Students Placed",
                  value: "108+",
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