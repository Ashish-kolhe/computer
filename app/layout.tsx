import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Computer Department | Adsul's Technical Campus",
    template: "%s | Computer Department",
  },

  description:
    "Official website of the Computer Department, Adsul's Technical Campus.",

  keywords: [
    "Computer Department",
    "Adsul's Technical Campus",
    "ATC",
    "Computer Engineering",
    "Engineering College",
    "Adsul college",
    "college chas",
    "Adsul college chas",
    "Computer Engineering college Nagar",
    "College",
    
  ],

  authors: [
    {
      name: "Computer Department, Adsul's Technical Campus",
    },
  ],

  creator: "Krypton",

 
  metadataBase: new URL("https://atclive.vercel.app"),

  
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html
  lang="en"
  className={`${inter.variable} ${sora.variable} h-full antialiased`}
>
       <body className="min-h-screen flex flex-col">
    <Navbar />

    <main className="flex-1 bg-white">
      {children}
    </main>

    <Footer />
  </body>
    </html>
  );
}
