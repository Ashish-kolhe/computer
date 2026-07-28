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
  title: "ATC Computer",
  description: "Adsul's Technical Campus , Computer Department",
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
