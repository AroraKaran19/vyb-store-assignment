import React from 'react'
import GetStartedCarousel from './GetStartedCarousel';

const GetStartedSection = () => {

  const getStartedTemplates = [
    {
      heading: "Sign Up and create your own store hassle-free.",
      paragraph: "Join us via google signin and verify your influencer status by entering you social media Id and unlock your store @ zero cost.",
      imgSrc: "/Home/GetStartedSection/1.png",
      templateColor: "#A94949",
      className: "",
    },
    {
      heading: "Monetize your influencer status: Earn money adding real value to your true followers!",
      paragraph: "Let VYB the money now !! Its here and widthdraw it periodically.",
      imgSrc: "/Home/GetStartedSection/2.png",
      templateColor: "#5ED46A",
      className: "-rotate-[2deg]",
    },
    {
      heading: "Sign Up and create your own store hassle-free.",
      paragraph: "Join us via google signin and verify your influencer status by entering you social media Id and unlock your store @ zero cost.",
      imgSrc: "/Home/GetStartedSection/3.png",
      templateColor: "#487FD7",
      className: "rotate-[2deg]",
    },
    {
      heading: "Sign Up and create your own store hassle-free.",
      paragraph: "Join us via google signin and verify your influencer status by entering you social media Id and unlock your store @ zero cost.",
      imgSrc: "/Home/GetStartedSection/4.png",
      templateColor: "#5CAAB6",
      className: "-rotate-[2deg]",
    },
  ]

  return (
    <>
      <section id="get-started" className="get-started-section w-full flex flex-col">
        <h1 className="get-started-section_heading w-full text-center text-[#00DC82]">How to get started?</h1>
        <div className="get-started-section_templates w-full flex justify-center overflow-x-hidden">
          <GetStartedCarousel templateData={getStartedTemplates} />
        </div>
      </section>
    </>
  )
}

export default GetStartedSection;