"use client";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import VYBStoreLogo from "../VYBStoreLogo";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navGlass, setNavGlass] = useState(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [userMenu, setUserMenu] = useState<boolean>();

  // Navlink Items
  const menu = [
    {
      index: 1,
      name: "Fav Creators",
      url: "/fav-creators",
    },
    {
      index: 2,
      name: "Merchandise",
      url: "/merch",
    },
    {
      index: 3,
      name: "Brand",
      url: "/brand",
    },
    {
      index: 4,
      name: "Digital",
      url: "/digital",
    },
  ];

  const userMenuOptions = [
    {
      index: 0,
      name: "Profile",
      url: "/profile"
    },
    {
      index: 1,
      name: "Dashboard",
      url: "/dashboard"
    },
    {
      index: 2,
      name: "My Store",
      url: "/my-store"
    },
  ]

  // To open and close hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  // Set navbar to glassmode when scrolled
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavGlass(true);
    } else {
      setNavGlass(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // toggle user menu
  const toggleUserMenu = () => {
    setUserMenu(!userMenu);
  }

  // Close user menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (userMenu && !e.target.closest(".user-menu-wrapper")) {
        setUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenu]);

  return (
    <>
      <div
        className={`navbar sm:px-4 md:px-10 screen_992:px-[4.375rem] screen_1200:px-[7.5rem] xl:px-[9.375rem] sticky left-0 right-0 z-[2000] w-full max-w-full`}
      >
        {/* Mobile Wrapper */}
        <div
          className={`nav-wrapper top-0 left-0 hidden absolute transition-all duration-500 ease-in-out ${
            menuOpen
              ? "w-full h-screen bg-black/10 backdrop-blur-lg z-[1001]"
              : ""
          }
          }`}
        >
          <div
            className={`menu-container bg-white w-[70vw] absolute top-0 h-screen z-[1002] ${
              menuOpen && "open"
            } flex flex-col gap-4 rounded-tr-2xl rounded-br-2xl`}
          >
            <div className="menu-header w-full h-16 flex justify-center items-center pl-14 pr-6 border-b-[1px]">
              <VYBStoreLogo
                className="cursor-pointer bg-black"
                onClick={() => window.location.replace("/")}
              />
            </div>
            <div className="menu-links w-full flex flex-col gap-4 items-start">
              {menu.map((item) => (
                <NavLinks
                  key={item.index}
                  {...item}
                  mobileWrapper={setMenuOpen}
                />
              ))}
            </div>
            <div className="menu-footer w-full flex justify-center items-center">
              <div className="authentication-wrapper h-full w-fit flex justify-center items-center rounded-full bg-black hover:bg-black/80 text-white cursor-pointer">
                <span>Register</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`main-nav w-full h-full flex items-stretch max-w-full gap-6 p-2 px-5 transition-all duration-500 ease-in-out sm:px-4 ${
            navGlass ? "bg-white/10 backdrop-blur-lg rounded-full" : ""
          }`}
        >
          <div className="logo-box w-max flex items-center">
            <VYBStoreLogo
              className="cursor-pointer"
              onClick={() => window.location.replace("/")}
            />
          </div>

          <div className="navbar-search-box w-2/5 flex justify-center items-center transition-all duration-500 ease-in-out flex-shrink sm:flex-1">
            <div className="input-box w-full flex justify-stretch items-center py-3 px-4 bg-white gap-2 rounded-full">
              <div className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={searchValue !== "" ? 3 : 2}
                  stroke="#404040"
                  className="size-5 transition-all duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search Creator/Product"
                className="search-input selection:text-[#fff] selection:bg-[#181818] focus:outline-none placeholder:text-[#404040] text-[16px] bg-transparent w-full text-[#404040]"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>

          <div className="nav-links w-3/5 sm:hidden flex justify-center items-center gap-7 flex-wrap flex-shrink-0">
            {menu.map((item) => (
              <NavLinks key={item.index} {...item} />
            ))}
          </div>

          <div className="user-menu w-max flex justify-center items-center select-none sm:hidden">
            <div className="user-menu-wrapper bg-white flex py-3 px-4 gap-8 rounded-xl relative"
              onClick={() => toggleUserMenu()}
            >
              <div className="user-icon-wrapper h-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="arrow-icon-wrapper h-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={`user-menu-options absolute top-full left-0 mt-2 py-4 px-2 gap-2 bg-[#0a0a0a] text-white w-[150%] rounded-xl flex-col ${userMenu ? "flex" : "hidden"}`}>
                {userMenuOptions.map((option) => (
                  <Link key={option.index} href={option.url} className="w-full hover:bg-white/10 px-2 py-1 rounded-md">{option.name}</Link>
                ))}
            </div> 
            </div>
          </div>

          <div
            className={`hamburger-menu hidden sm:flex sm:w-max justify-start items-center select-none}`}
            draggable={false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
