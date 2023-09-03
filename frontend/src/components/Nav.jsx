"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { Context } from "@app/Provider";
import Menu from "@components/Menu";
import Logo from "@/../public/LOGO.svg";
import { HiSun } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi";
// import { HiOutlineArrowCircleLeft } from "react-icons/hi";

const Nav = () => {
  const myContext = useContext(Context);
  console.log(myContext);
  return (
    <div className="flex justify-between h-[40px]">
      <div>
        <Link
          href={`/`}
          // className={`flex h-full ${myContext.menu ? "mt-0" : "mt--2"}`}
        >
          <Image
            className={`h-full py-1 w-min object-fill`}
            alt="LOGO"
            src={Logo}
          />
        </Link>
      </div>
      <div className="flex gap-4 h-full">
        <button
          className="text-3xl relative h-full aspect-square"
          onClick={myContext.toggleTheme}
        >
          <HiSun
            className={`${
              myContext.theme === "dark" ? `opacity-0` : `opacity-100`
            } absolute top-[5px]`}
          />
          <HiMoon
            className={`${
              myContext.theme === "light" ? `opacity-0` : `opacity-100`
            } absolute top-[5px]`}
          />
          {/* {myContext.theme === "dark" ? <HiSun /> : <HiMoon />} */}
        </button>
        <button
          className=""
          onClick={myContext.toggleMenu}
        >
          <Menu />
        </button>
      </div>
    </div>

    // <div className="flex justify-evenly">
    //   NAVBAR
    //   <p>{myContext.theme}</p>
    //   <p>{myContext.menu}</p>
    //   <br />
    //   <button
    //     className="p-2 border rounded"
    //     onClick={myContext.toggleMenu}
    //   >
    //     menu
    //   </button>
    //   <Menu />
    // </div>
  );
};

export default Nav;
