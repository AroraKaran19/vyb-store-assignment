import React from "react";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="hero-section w-full flex items-stretch sm:flex-col">

        <div className="hero-section_left-side flex-1 flex flex-col">

          <div className="hero-section_heading w-full flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <div className="heading_divider flex flex-wrap">
              <div className="heading_word">One</div>
              <div className="heading_word">Stop</div>
            </div>
            <div className="heading_divider flex">
              <div className="heading_word">Marketplace</div>
            </div>
            <div className="heading_divider flex flex-wrap">
              <div className="heading_word">For</div>
              <div className="heading_word">Influencer</div>
            </div>
          </div>

          <div className="hero-section_para w-full flex flex-wrap">
            <p>
              "Unleash Your Influence: Sell Itineraries, Build Your Brand,
              Create Merch, and Share Content - All in One Hub."
            </p>
          </div>

          <div className="hero-section_buttons w-full flex items-stretch gap-10">
            <button className="demo-btn bg-[#00DC82] text-black px-5 py-3 rounded-xl hover:bg-[#0cbb72] hover:scale-105 transition-all duration-150 ease-in-out">
              Demo Store
            </button>
            <div className="join-waitlist-btn_wrapper bg-waitlist-btn p-[2px] rounded-xl hover:scale-105 hover:bg-waitlist-btn-hover transition-all duration-150 ease-in-out">
              <button className="join-waitlist bg-[#181818] w-full h-full px-5 py-3 rounded-xl">
                <div className="text-background_wrapper bg-waitlist-btn bg-clip-text">
                  <p className="text-transparent">Join Waitlist</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-section_right-side flex-1 flex">
          <img src="/Home/HeroSection/HeroSection.png" alt="Hero Section Image" className="hero-section-image rounded-3xl" draggable={false} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
