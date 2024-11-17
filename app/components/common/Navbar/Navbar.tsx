"use client";
import React, { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import VYBStoreLogo from "../VYBStoreLogo";
import "./navbar.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navGlass, setNavGlass] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [userMenu, setUserMenu] = useState<boolean>();
  const navbarMenu = useRef<HTMLDivElement>(null);
  const UserData = useSelector((state: RootState) => state.auth.userData);
  const router = useRouter();

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
      url: "/profile",
    },
    {
      index: 1,
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      index: 2,
      name: "My Store",
      url: "/my-store",
    },
  ];

  // To open and close hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked!");
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
  };

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
          className={`nav-blur-wrapper w-full h-screen pointer-events-none top-0 left-0 absolute transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen
              ? "bg-black/10 backdrop-blur-sm z-[1004] pointer-events-auto"
              : "opacity-0"
          }
          }`}
        >
          <div
            className={`menu-container bg-[#181818] w-[70vw] text-white absolute top-0 right-0 h-screen z-[1002] ${
              menuOpen ? "open" : ""
            } flex flex-col gap-4 rounded-tl-3xl rounded-bl-3xl`}
            ref={navbarMenu}
          >
            <div
              className="menu-close-btn absolute top-5 right-5"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            {UserData ? (
              <>
                <div className="user-photo w-full flex flex-col items-center">
                  <img
                    src="/Authentication/defaultUser.jpg"
                    className="size-24 flex items-center justify-center text-white rounded-full"
                    draggable={false}
                    alt={`img`}
                  />
                  <p className="my-2">{UserData.username}</p>
                  <div
                    className="change-profile-photo w-4/5 flex relative justify-center gap-2 text-[#00DC82] cursor-pointer select-none"
                    onClick={() => {
                      console.log("Change Photo");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#00DC82"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    <p className="text-center">Change Profile Picture</p>
                  </div>
                </div>
                <div className="menu-links w-full flex flex-col items-center gap-4">
                  {userMenuOptions.map((option, index) => (
                    <Link key={index + option.index} href={option.url}>
                      {option.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="authentication-btn w-full flex gap-5 px-4 py-2 bg-white active:bg-white/80 text-black rounded-2xl my-5 cursor-pointer"
                  onClick={() => {toggleMenu(); router.push("/authentication")}}>
                  <p>Login</p>
                  <div className="login-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </>
            )}
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
              onClick={() => router.push("/")}
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

          <div className="nav-links w-3/5 sm:hidden flex justify-center items-center gap-8 flex-wrap flex-shrink-0">
            {menu.map((item) => (
              <NavLinks key={item.index} {...item} />
            ))}
          </div>

          <div className="user-menu w-max flex justify-center items-center select-none sm:hidden">
            <div
              className="user-menu-wrapper bg-white active:bg-white/80 flex py-3 px-4 gap-8 rounded-xl relative cursor-pointer transition-all duration-200 ease-in-out"
              onClick={() => {
                UserData
                  ? toggleUserMenu()
                  : (window.location.href = "/authentication");
              }}
            >
              {UserData ? (
                <>
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
                  <div
                    className={`user-menu-options absolute top-full left-0 mt-2 py-4 px-2 gap-2 bg-[#0a0a0a] text-white w-[150%] rounded-xl flex-col cursor-default ${
                      userMenu ? "flex" : "hidden"
                    }`}
                  >
                    {userMenuOptions.map((option) => (
                      <Link
                        key={option.index}
                        href={option.url}
                        className="w-full hover:bg-white/10 px-2 py-1 rounded-md cursor-pointer"
                      >
                        {option.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p>Login</p>
                  <div className="login-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </>
              )}
            </div>
          </div>

          <div
            className={`hamburger-menu hidden sm:flex sm:w-max justify-start items-center select-none}`}
            draggable={false}
            onClick={toggleMenu}
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
