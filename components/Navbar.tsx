import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Info,
  GraduationCap,
  Users,
  Images,
  BookOpen,
} from "lucide-react";
export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-white px-3 py-2">
        <div className="navbar-start">
  <Link href="/" className="flex items-center gap-3">
    <Image
      src="/root/logo.png"
      alt="ATC Logo"
      width={36}
      height={36}
      className="object-contain"
    />

    <div className="leading-none">
      <h1 className="font-heading text-xl font-bold tracking-tight">
        ATC
      </h1>

      <p className="text-[11px] text-base-content/60 font-medium">
        Computer Department
      </p>
    </div>
  </Link>
</div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
       
        className="menu menu-md gap-3 dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow ">
        <li>
      <Link href="/about" className="flex items-center gap-2 font-medium  bg-white transition-all duration-200  hover:text-primary">
        <Info size={16} />
        About
      </Link>
    </li>

    <li>
      <Link href="/academics" className="flex items-center gap-2 font-medium  bg-white transition-all duration-200  hover:text-primary">
        <GraduationCap size={16} />
        Academics
      </Link>
    </li>

    <li>
      <Link href="/faculty" className="flex items-center gap-2 font-medium  bg-white transition-all duration-200  hover:text-primary">
        <Users size={16} />
        Faculty
      </Link>
    </li>

    <li>
      <Link href="/gallery" className="flex items-center gap-2 font-medium  bg-white transition-all duration-200  hover:text-primary">
        <Images size={16} />
        Gallery
      </Link>
    </li>

    <li>
      <Link href="/placements" className="flex items-center gap-2 font-medium bg-white transition-all duration-200  hover:text-primary">
        <BriefcaseBusiness size={16} />
        Placements
      </Link>
    </li>
      </ul>
    </div>
    
  </div>
 <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal gap-2 px-1">

   

    <li>
      <Link href="/about" className="flex items-center gap-2 font-medium  bg-white transition-all duration-200  hover:text-primary">
        <Info size={16} />
        About
      </Link>
    </li>

    <li>
      <Link href="/academics" className="flex items-center gap-2 font-medium  bg-white transition-all duration-200  hover:text-primary">
        <GraduationCap size={16} />
        Academics
      </Link>
    </li>

    <li>
      <Link href="/faculty" className="flex items-center gap-2 font-medium  bg-white transition-all duration-200  hover:text-primary">
        <Users size={16} />
        Faculty
      </Link>
    </li>

    <li>
      <Link href="/gallery" className="flex items-center gap-2 font-medium  bg-white transition-all duration-200  hover:text-primary">
        <Images size={16} />
        Gallery
      </Link>
    </li>

    <li>
      <Link href="/placements" className="flex items-center gap-2 font-medium bg-white transition-all duration-200  hover:text-primary">
        <BriefcaseBusiness size={16} />
        Placements
      </Link>
    </li>

  </ul>
</div>
  
</div>
    </div>
  );
}

