"use client";

import { usePathname } from "next/navigation";
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
  Phone,
  NotebookPen,
  Home,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className='relative sticky top-0 z-55'>
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
      <h1 className="font-heading text-black text-xl font-bold tracking-tight">
        ATC
      </h1>

      <p className="text-[11px] text-black/60 font-medium">
        Computer Department
      </p>
    </div>
  </Link>
</div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost text-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
  className="menu menu-md gap-3 dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow"
>
  <li>
    <Link
      href="/about"
      className="flex items-center gap-2 font-medium bg-white transition-all duration-200 text-black hover:text-primary"
    >
      <Info size={16} />
      About
    </Link>
  </li>

  <li>
    <Link
      href="/academics"
      className="flex items-center gap-2 font-medium bg-white transition-all duration-200 text-black hover:text-primary"
    >
      <GraduationCap size={16} />
      Academics
    </Link>
  </li>

  <li>
    <Link
      href="/faculty"
      className="flex items-center gap-2 font-medium bg-white transition-all duration-200 text-black hover:text-primary"
    >
      <Users size={16} />
      Faculty
    </Link>
  </li>

  <li>
    <Link
      href="/gallery"
      className="flex items-center gap-2 font-medium bg-white transition-all duration-200 text-black hover:text-primary"
    >
      <Images size={16} />
      Gallery
    </Link>
  </li>
 <li>
          <Link
            href="/placements"
            className="flex items-center gap-2 font-medium bg-white transition-all duration-200 text-black hover:text-primary"
          >
            <BriefcaseBusiness size={16} />
            Placements
          </Link>
        </li>

        <li>
          <Link
            href="/admission"
            className="flex items-center gap-2 font-medium bg-white transition-all duration-200 text-black hover:text-primary"
          >
            <NotebookPen size={16} />
            Admissions
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="flex items-center gap-2 font-medium bg-white transition-all duration-200 text-black hover:text-primary"
          >
            <Phone size={16} />
            Contact
          </Link>
        </li>
  
</ul>
    </div>
    
  </div>
 <div className="navbar-center hidden lg:flex">
 <ul className="menu menu-horizontal gap-3 px-2">
  {[
    {
      href: "/",
      label: "",
      icon: Home,
    },
    {
      href: "/about",
      label: "About",
      icon: Info,
    },
    {
      href: "/academics",
      label: "Academics",
      icon: GraduationCap,
    },
    {
      href: "/faculty",
      label: "Faculty",
      icon: Users,
    },
    {
      href: "/gallery",
      label: "Gallery",
      icon: Images,
    },
    {
      href: "/placements",
      label: "Placements",
      icon: BriefcaseBusiness,
    },
    {
      href: "/admission",
      label: "Admissions",
      icon: NotebookPen,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Phone,
    },
  ].map((item) => {
    const Icon = item.icon;
    const active = pathname === item.href;

    return (
      <li key={item.href}>
        <Link
          href={item.href}
          className={`group flex items-center rounded-full bg-white font-medium transition-all duration-500 ease-out ${
            active
              ? "px-4 py-2 text-primary"
              : "px-3 py-2 text-black hover:text-primary hover:bg-gray-50"
          }`}
        >
          <Icon
            size={18}
            className="shrink-0 transition-transform duration-500 group-hover:scale-110"
          />

          <span
            className={`overflow-hidden whitespace-nowrap transition-all duration-500 ${
              active
                ? "max-w-[120px] opacity-100 ml-2"
                : "max-w-0 opacity-0 ml-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2"
            }`}
          >
            {item.label}
          </span>
        </Link>
      </li>
    );
  })}
</ul>
</div>
  
</div>
 <svg
  className="absolute z-56 left-0 top-full w-full -mt-2 h-6 scale-y-[-1]"
  viewBox="0 0 1440 80"
  preserveAspectRatio="none"
>
  <path
    fill="white"
    d="
      M0,20
      C360,60 720,60 1080,25
      C1260,5 1350,10 1440,30
      L1440,80
      L0,80
      Z
    "
  />
</svg>
    </div>
  );
}

