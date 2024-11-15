import HeroSection from "./components/Home/HeroSection/HeroSection";
import "./components/Home/home.css";
import CateogoriesSection from "./components/Home/CateogoriesSection/CateogoriesSection";

export default function Home() {
  return (
    <>
			<div className="home-page w-full flex flex-col">
        <HeroSection />
        <CateogoriesSection />
      </div>
    </>
  );
}
