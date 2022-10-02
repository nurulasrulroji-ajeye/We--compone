import React, { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import Link from "next/link";
import { exLogo } from "../../../assets";
import Image from "next/image";
import { useRouter } from "next/router";
import { link } from "fs";

const navList = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Work", link: "/#work" },
  { id: 3, title: "Services", link: "/#services" },
  { id: 4, title: "Our Costumer", link: "/#costumer" },
  { id: 5, title: "Team", link: "/#team" },
  { id: 6, title: "Portfolio", link: "/portfolio" },
  { id: 7, title: "Contact", link: "/#contact" },
];

const Navbar = () => {
  const [changeBg, setChangeBg] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const currentRouter = router.pathname;

  const onScrollNavbar = () => {
    window.scrollY > 150 ? setChangeBg(true) : setChangeBg(false);
    console.log(window.scrollY);
  };

  useEffect(() => {
    onScrollNavbar();
    window.addEventListener("scroll", onScrollNavbar);
  }, []);

  return (
    <div
      className={`${
        !changeBg
          ? "navbar h-[100px] px-3 lg:px-24 flex justify-between fixed top-0 z-50 bg-white"
          : "navbar px-3 lg:px-24 flex justify-between fixed top-0 z-50 bg-white/40 backdrop-blur-md h-16"
      }`}
      style={{ transition: "all 1s" }}
    >
      <Link href="/" className="">
        <a className="w-[120px]">
          <Image src={exLogo} className="w-full" />
        </a>
      </Link>
      <div className="hidden md:flex gap-7 drop-shadow-md">
        {navList.map((list) => (
          <Link href={list.link} scroll={false} key={list.id} className="">
            <a className="font-Popins font-medium text-sm">{list.title}</a>
          </Link>
        ))}
      </div>
      <button
        className="w-5 md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`${
            !open
              ? "block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              : "block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rotate-45 translate-y-1.5"
          }`}
        ></span>
        <span
          className={`${
            !open
              ? "block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              : "block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out scale-x-0"
          }`}
        ></span>
        <span
          className={`${
            !open
              ? "block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              : "block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -rotate-45 -translate-y-1.5"
          }`}
        ></span>
      </button>
      {!open ? (
        <></>
      ) : (
        <div className="md:hidden flex flex-col absolute bg-white gap-2 top-16 px-5 py-3 right-3 drop-shadow-md rounded-md">
          {navList.map((list) => (
            <Link href={list.link} scroll={true} key={list.id} className="">
              <a
                className="font-Popins font-medium text-sm"
                onClick={() => setOpen(!open)}
              >
                {list.title}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
