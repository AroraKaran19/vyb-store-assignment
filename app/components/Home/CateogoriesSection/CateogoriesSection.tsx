"use client";
import React, { useState } from "react";
import Carousel from "./Carousel";

const CateogoriesSection = () => {
  // Fully Customizable Cateogory Section
  const [cateogoriesMenu, setCateogoriesMenu] = useState([
    {
      index: 0,
      name: "Travel",
      active: true,
      cat_items: {
        imgSrc: "/TravelSectionDisplayImage.png",
        heading: "TRAVEL",
        subheading:
          "Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.",
        extraSections: [
          <div className="explore-section w-full bg-black text-white flex flex-col pb-5">
            <div className="explore-section-heading w-full text-center px-4">
              Explore Our Curated Travel Itineraries
            </div>
            <div className="carousel-wrapper w-full px-6 relative overflow-hidden">
              <Carousel
                items={[
                  {
                    title: "Darjeeling Itinerary",
                    subtitle: "West Bengal",
                    author: {
                      name: "Samira Hadid",
                      imgUrl:
                        "/Home/ExtraSections/TravelSection1/Authors/Author_1.jpg",
                    },
                    imgSrc: "/Home/ExtraSections/TravelSection1/1.jpg",
                    active: true,
                  },
                  {
                    title: "Munnar Itinerary",
                    subtitle: "Kerala",
                    author: {
                      name: "Samira Hadid",
                      imgUrl:
                        "/Home/ExtraSections/TravelSection1/Authors/Author_1.jpg",
                    },
                    imgSrc: "/Home/ExtraSections/TravelSection1/2.jpg",
                  },
                  {
                    title: "Delhi Itinerary",
                    subtitle: "Delhi",
                    author: {
                      name: "Samira Hadid",
                      imgUrl:
                        "/Home/ExtraSections/TravelSection1/Authors/Author_1.jpg",
                    },
                    imgSrc: "",
                  },
                  {
                    title: "Delhi Itinerary",
                    subtitle: "Delhi",
                    author: {
                      name: "Samira Hadid",
                      imgUrl:
                        "/Home/ExtraSections/TravelSection1/Authors/Author_1.jpg",
                    },
                    imgSrc: "",
                  },
                  {
                    title: "Delhi Itinerary",
                    subtitle: "Delhi",
                    author: {
                      name: "Samira Hadid",
                      imgUrl:
                        "/Home/ExtraSections/TravelSection1/Authors/Author_1.jpg",
                    },
                    imgSrc: "",
                  },
                  {
                    title: "Delhi Itinerary",
                    subtitle: "Delhi",
                    author: {
                      name: "Samira Hadid",
                      imgUrl:
                        "/Home/ExtraSections/TravelSection1/Authors/Author_1.jpg",
                    },
                    imgSrc: "",
                  },
                ]}
              />
            </div>
          </div>,
          <div className="how-to-list-section bg-how-to-list text-white flex flex-col gap-4">
            <div className="how-to-list-section_heading w-full text-center z-50">
              How To List?
            </div>
            <div className="how-to-list_planes-container h-full w-full max-w-full flex flex-col relative">
              <img
                src="/Home/ExtraSections/TravelSection2/PlaneSection.png"
                alt="Plane Section"
                className="w-full antialiased z-50"
                draggable={false}
              />
              <div className="how-to-list-section_endline w-full flex justify-center items-end pb-5 sm:p-16 sm:relative">
                <p className="z-50 text-center select-none">You Curate Experience, We Make It Happen</p>
                <div
                  className="how-to-list-section_background absolute w-full h-full max-w-full bottom-0 right-0 left-0 opacity-80"
                  style={{
                    backgroundImage:
                      "url('/Home/ExtraSections/TravelSection2/Background.png')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    aspectRatio: 16 / 9,
                  }}
                ></div>
              </div>
            </div>
          </div>,
        ],
      },
    },
    {
      index: 1,
      name: "Digital",
      active: false,
    },
    {
      index: 2,
      name: "Brand",
      active: false,
    },
    {
      index: 3,
      name: "Merch",
      active: false,
    },
  ]);

  const changeActive = (index: number) => {
    const updatedLinks = cateogoriesMenu.map((item, i) => ({
      ...item,
      active: index == i,
    }));
    setCateogoriesMenu(updatedLinks);
  };

  return (
    <>
      <section
        id="cateogories"
        className="cateogories-section w-full flex flex-col"
      >
        <div className="cateogories-menu w-full flex justify-between items-stretch bg-black text-white rounded-3xl ">
          {cateogoriesMenu.map((menu_item) => (
            <div
              key={menu_item.index}
              className={`menu-link cursor-pointer transition-all duration-200 ease-in-out hover:text-white/80 ${
                menu_item.active == true ? "active" : ""
              }`}
              onClick={() => changeActive(menu_item.index)}
            >
              {menu_item.name}
            </div>
          ))}
        </div>
        <div className="cateogory-display-container w-full flex flex-col">
          {cateogoriesMenu
            .filter((active_menu) => active_menu.active)
            .map((active_menu) => {
              return (
                <div
                  key={active_menu.index}
                  className="category-display_image w-full flex justify-center relative"
                >
                  <img
                    src={
                      active_menu.cat_items?.imgSrc
                        ? active_menu.cat_items?.imgSrc
                        : "/whiteBackground.png"
                    }
                    alt="Cateogory Display Image"
                    className={`w-full aspect-video ${
                      (active_menu.cat_items?.extraSections?.length ?? 0) > 0
                        ? "rounded-tl-3xl rounded-tr-3xl"
                        : "rounded-3xl"
                    }`}
                    draggable={false}
                  />
                  <div className="category-display_text absolute w-full h-full flex flex-col justify-center items-center">
                    <div
                      className={`category-display_heading ${
                        active_menu.cat_items?.imgSrc
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {active_menu.cat_items?.heading
                        ? active_menu.cat_items?.heading
                        : "COMING SOON"}
                    </div>
                    <div
                      className={`category-display_subheading w-3/5 sm:w-4/5 text-center ${
                        active_menu.cat_items?.imgSrc
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {active_menu.cat_items?.subheading
                        ? active_menu.cat_items?.subheading
                        : "Coming Soon!!"}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {cateogoriesMenu
          .filter((active_menu) => active_menu.active)
          .map((active_menu) => {
            if (active_menu.cat_items?.extraSections) {
              return active_menu.cat_items?.extraSections.map(
                (section, index) => (
                  <div key={`extraSection-${index}`}>{section}</div>
                )
              );
            }
          })}
      </section>
    </>
  );
};

export default CateogoriesSection;
