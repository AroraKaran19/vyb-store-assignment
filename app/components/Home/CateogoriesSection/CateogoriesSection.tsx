"use client";
import React, { act, useState } from "react";

const CateogoriesSection = () => {
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
      <div className="cateogories-section w-full flex flex-col">
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
                    className="rounded-3xl w-full aspect-video"
                    draggable={false}
                  />
                  <div className="category-display_text absolute w-full h-full flex flex-col justify-center items-center">
                    <div className={`category-display_heading ${active_menu.cat_items?.heading ? "text-white" : "text-black"}`}>
                      {active_menu.cat_items?.heading ? active_menu.cat_items?.heading : "BLANK"}
                    </div>
                    <div className={`category-display_subheading w-3/5 sm:w-4/5 text-center ${active_menu.cat_items?.subheading ? "text-white" : "text-black"}`}>
                      {active_menu.cat_items?.subheading ? active_menu.cat_items?.subheading : "No Value Provided!"}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CateogoriesSection;
