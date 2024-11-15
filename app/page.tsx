import HeroSection from "./components/Home/HeroSection/HeroSection";
import "./components/Home/home.css";

export default function Home() {
  return (
    <>
			<div className="home-page min-h-screen w-full flex flex-col mt-12">
        <HeroSection />
      </div>
    </>
  );
}
