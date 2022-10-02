import React from "react";
import Image from "next/image";
import { service } from "../../../assets";
import Button from "../../Atoms/Button";

const Service = () => {
  return (
    <div
      className="md:mt-[156px] mt-20 flex w-full md:justify-end justify-center relative items-center"
      id="services"
    >
      <Image src={service} />
      <div className="md:w-[508px] p-3 md:p-0 md:h-[283px] absolute md:bg-white bg-white/20 backdrop-blur-md md:backdrop-blur-none md:right-[35%] shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:backdrop-blur-md hover:bg-white/40 transition-all duration-500 ease-in-out rounded-md md:rounded-none">
        <div className="w-full flex flex-col h-full justify-center gap-3 md:gap-[30px] md:ml-[51px]">
          <h2 className="md:text-4xl text-xl font-semibold font-Popins md:text-[#414141] text-white">
            How We Work?
          </h2>
          <h2 className="max-w-[240px] md:text-base text-sm md:text-[#414141] text-white">
            Let's discuss what projects you have in mind
          </h2>
          <div className="md:flex-none md:justify-start flex justify-center">
            <Button title="Let's Have a Coffee" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
