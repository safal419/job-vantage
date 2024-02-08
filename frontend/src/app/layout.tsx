import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar1 from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobVantage",
  description: "Providing Job and Freelancing Projects in a same platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <Navbar1 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
