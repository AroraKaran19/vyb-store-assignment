import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/common/Navbar/Navbar";

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
        <main className="max-w-full sm:px-4 md:px-10 screen_992:px-[4.375rem] screen_1200:px-[7.5rem] xl:px-[9.375rem]">
          {children}
        </main>
      </body>
    </html>
  );
}
