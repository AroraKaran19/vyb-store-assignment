import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";

const UrbanistRegular = localFont({
  src: "./fonts/Urbanist/Urbanist-Regular.ttf",
  variable: "--font-urbanist-regular",
});

export const metadata: Metadata = {
  title: "VYBStore Assignment",
  description: "Assignment for VYBStore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased max-w-full bg-[#181818] ${UrbanistRegular.className}`}>
        <Navbar />
        <main className="min-h-screen max-w-full overflow-x-hidden max-h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
