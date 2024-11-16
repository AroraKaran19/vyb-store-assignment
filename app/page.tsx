import HeroSection from "./components/Home/HeroSection/HeroSection";
import "./components/Home/home.css";
import CateogoriesSection from "./components/Home/CateogoriesSection/CateogoriesSection";
import MonitizationSection from "./components/Home/MonitizationSection/MonitizationSection";
import InfluencerSection from "./components/Home/InfluencerSection/InfluencerSection";
import GetStartedSection from "./components/Home/GetStartedSection/GetStartedSection";

export default function Home() {
  return (
    <>
			<div className="home-page w-full flex flex-col">
        <HeroSection />
        <CateogoriesSection />
        <MonitizationSection />
        <InfluencerSection />
        <GetStartedSection />
      </div>
    </>
  );
}
