import React from "react";

const MonitizationSection = () => {
  const monitizationContent = [
    [
      {
        heading: "Trusted By Influencers",
        subheading: "A trusted platform for influencers to grow and earn.",
        imgUrl: "/MonitizationSection/1.png",
      },
      {
        heading: "Trusted By Influencers",
        subheading: "A trusted platform for influencers to grow and earn.",
        imgUrl: "/MonitizationSection/2.png",
      },
    ],
    [
      {
        heading: "Trusted By Influencers",
        subheading: "A trusted platform for influencers to grow and earn.",
        imgUrl: "/MonitizationSection/3.png",
      },
      {
        heading: "Trusted By Influencers",
        subheading: "A trusted platform for influencers to grow and earn.",
        imgUrl: "/MonitizationSection/4.png",
      },
    ],
  ];

  return (
    <>
      <section
        id="monitization"
        className="monitization-section w-full flex items-stretch sm:flex-col"
      >
        <div className="monitization-section_textarea w-2/5 text-[#00DC82] flex items-center sm:w-full">
          <p className="text-center">
            From Creation to Monetization: Vyb Store Has It All
          </p>
        </div>
        <div className="monitization-section_content-container w-3/5 flex sm:w-full shrink-0">
          {monitizationContent.map((content, index) => (
            <div key={index} className="monitization-content-container-column flex-1 flex flex-col text-white">
              {content.map((item, index) => (
                <div key={item.heading + index} className="monitization-content-box flex flex-col items-center bg-black rounded-2xl">
                  <div className="monitization-content-box_heading text-center">{item.heading}</div>
                  <div className="monitization-content-box_subheading text-center">{item.subheading}</div>
                  <img className="monitization-content-box_image text-center" src={item.imgUrl ? item.imgUrl : ""} alt={`${item.heading} Image`} draggable={false} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MonitizationSection;
