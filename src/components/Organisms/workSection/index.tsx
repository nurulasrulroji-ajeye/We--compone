import React from "react";
import Image from "next/image";
import { work, Android, Web, Uiux } from "../../../assets";

const Works = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row md:mt-[124px] mt-10 justify-center items-center md:gap-20"
      id="work"
    >
      <div>
        <Image src={work} />
      </div>
      <div className="px-4 md:p-0">
        <h1 className="font-semibold text-4xl font-Popins">What We Do?</h1>
        <div className="flex gap-5 mt-9">
          <div className="mt-[2px]">
            <Android />
          </div>
          <div>
            <h4 className="font-Popins font-semibold text-sm mb-2 text-[#414141]">
              Mobile Application
            </h4>
            <p className="max-w-[282px] font-Popins text-xs font-normal leading-6">
              Building mobile applications is never easy. P2P lending app ?
              Logistic App ? E-Commerce App ? We have done them all. Done them
              all well. Done them all fast.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-9">
          <div className="mt-[2px]">
            <Web />
          </div>
          <div>
            <h4 className="font-Popins font-semibold text-sm mb-2 text-[#414141]">
              Web Application
            </h4>
            <p className="max-w-[290px] w-full font-Popins text-xs font-normal leading-6">
              We can build any web applications you need. A personal blog ?
              Company Profile ? E-commerce ? or any specific functionalities ?
              We got you covered! We have a strong team of web developers that
              can follow your stack and needs.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-9">
          <div className="mt-[2px]">
            <Uiux />
          </div>
          <div>
            <h4 className="font-Popins font-semibold text-sm mb-2 text-[#414141]">
              UI/UX Design
            </h4>
            <p className="max-w-[282px] font-Popins text-xs font-normal leading-6">
              All things are designed. A few things are designed well. We try to
              elevate your ideas with great UI/UX design, suited to your taste,
              addressing the right pain points.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
