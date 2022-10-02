import React from "react";
import Maps from "../../Molecules/Map";
import { useLoadScript } from "@react-google-maps/api";
import Link from "next/link";
import {
  UilTwitterAlt,
  UilInstagram,
  UilGithubAlt,
} from "@iconscout/react-unicons";

const dataMedsos = [
  {
    id: 1,
    title: "Twistcode",
    icon: <UilTwitterAlt />,
    link: "https://twitter.com/Ajeye_",
  },
  {
    id: 2,
    title: "Twistcode",
    icon: <UilInstagram />,
    link: "https://www.instagram.com/ajeye_/",
  },
  {
    id: 3,
    title: "Twistcode",
    icon: <UilGithubAlt />,
    link: "https://github.com/nurulasrulroji-ajeye",
  },
];

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 md:justify-evenly mt-10 md:mt-20 mb-[33px] md:p-0 p-3">
      <div className="flex flex-col md:gap-5">
        <h4 className="font-Popins font-semibold text-2xl">Location</h4>
        <div className="relative">
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <Maps className="w-full md:w-[360px] h-36" />
          )}
          <div className="absolute top-3 left-3 bg-white p-5 w-[220px]">
            <h5 className="text-2xl font-Popins font-semibold">Twiscode</h5>
            <p className="font-Popins text-sm">Jl. Serang-Tokyo</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-Popins font-semibold text-2xl mb-3">Company</h4>
        <ul>
          <li>Work</li>
          <li>Service</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h4 className="font-Popins font-semibold text-2xl mb-3">Contact Us</h4>
        <div>
          {dataMedsos.map((data) => (
            <Link href={data.link} key={data.id}>
              <a target="_blank" className="flex gap-2 mb-2">
                <div>{data.icon}</div>
                <div>{data.title}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
