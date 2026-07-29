import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Heart } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Faculty", href: "/faculty" },
    { name: "Academics", href: "/academics" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "YouTube",
      href: "#",
      icon: FaYoutube,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedinIn,
    },
  ];

  return (
    <footer className=" bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr]">

          {/* Logo & Department */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/root/logo.png"  
                alt="ATC Logo"
                width={70}
                height={70}
                className="rounded-xl object-contain"
              />

              <div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Adsul's Technical Campus
                </h2>

                <p className="mt-1 text-primary font-medium">
                  Department of Computer Engineering
                </p>

              </div>

            </div>

            <div className="mt-8 flex items-start gap-3">

              <MapPin className="mt-1 h-5 w-5 text-primary shrink-0" />

              <p className="leading-7 text-gray-600">
                Chas,
                <br />
                Ahilyanagar,
                Maharashtra
              </p>

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="text-gray-600 transition hover:text-primary"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3">

                <Phone className="h-5 w-5 text-primary" />

                <a
                  href="tel:+919876543210"
                  className="text-gray-600 hover:text-primary"
                >
                  +91 98765 43210
                </a>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="h-5 w-5 text-primary" />

                <a
                  href="mailto:computer@atc.edu.in"
                  className="text-gray-600 hover:text-primary"
                >
                  computer@atc.edu.in
                </a>

              </div>

            </div>

            <div className="mt-8 flex gap-3">

              {socials.map((social) => {

                const Icon = social.icon;

                return (

                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Icon size={15} />
                  </a>

                );

              })}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12  pt-6 flex flex-col gap-2 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Adsul's Technical Campus · Department of Computer Engineering. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-gray-500">
  Made with
  <Heart className="h-4 w-4  text-red-500" />
  by{" "}
  <a
    href="https://atkrypton.in" 
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-primary transition hover:underline"
  >
    Krypton
  </a>
</p>

        </div>

      </div>
    </footer>
  );
}