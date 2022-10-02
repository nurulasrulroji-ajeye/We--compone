import React from "react";
import Image from "next/image";
import { hero, mobile } from "../../../assets";
import Button from "../../Atoms/Button";

const HeroSection = () => {
  const string = "Deliver";
  const Deliver = string.split("");
  const strings = "Code";
  const Code = strings.split("");
  return (
    <div className="flex md:flex-row flex-col-reverse w-full justify-between bg-[#F8F8F8] items-center md:py-7 pb-7 relative overflow-hidden">
      <div className="md:ml-28 p-3 md:p-0 md:mt-0 -mt-24 relative z-10">
        <h4 className="font-semibold md:text-[64px] text-5xl text-[#414141] md:max-w-[355px] max-w-full font-Popins md:leading-[72px] leading-relaxed">
          We{" "}
          <span>
            {" "}
            {Code.map((text, idx) => (
              <span
                key={idx}
                className="hover:text-black md:hover:text-[68px] transition-all ease-in-out duration-300 hover:"
              >
                {text}
              </span>
            ))}
          </span>{" "}
          We{" "}
          <span>
            {" "}
            {Deliver.map((text, idx) => (
              <span
                key={idx}
                className="hover:text-black md:hover:text-[68px] transition-all ease-in-out duration-300 hover:"
              >
                {text}
              </span>
            ))}
          </span>
        </h4>
        <p className="text-sm font-light max-w-[360px] my-5 md:my-[40px] font-Popins">
          Twiscode specializes in developing high-performing mobile and web
          applications.
        </p>
        <Button title="Let's Talk" />
      </div>
      <div className="relative hover:scale-105 transition-all duration-300 ease-in-out hover:drop-shadow-lg">
        <Image src={hero} />
      </div>
    </div>
  );
};

export default HeroSection;
